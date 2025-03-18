provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "goodfood" {
  name     = "goodfood-resources"
  location = "East US"
}

resource "azurerm_kubernetes_cluster" "aks" {
  name                = "goodfood-aks"
  location            = azurerm_resource_group.goodfood.location
  resource_group_name = azurerm_resource_group.goodfood.name
  dns_prefix          = "goodfood"

  default_node_pool {
    name       = "default"
    node_count = 2  # Pour assurer haute disponibilité
    vm_size    = "Standard_B2s"
  }

  identity {
    type = "SystemAssigned"
  }
}

resource "azurerm_container_registry" "acr" {
  name                = "goodfoodacr"
  resource_group_name = azurerm_resource_group.goodfood.name
  location            = azurerm_resource_group.goodfood.location
  sku                 = "Basic"
  admin_enabled       = true
}

resource "azurerm_log_analytics_workspace" "log_analytics" {
  name                = "goodfood-logs"
  resource_group_name = azurerm_resource_group.goodfood.name
  location            = azurerm_resource_group.goodfood.location
  sku                 = "PerGB2018"
}

output "aks_cluster_name" {
  value = azurerm_kubernetes_cluster.aks.name
}

output "acr_login_server" {
  value = azurerm_container_registry.acr.login_server
}

# Déploiement des microservices et RabbitMQ sur AKS avec Terraform et Kubernetes
data "kubectl_manifest" "rabbitmq" {
  yaml_body = file("rabbitmq-deployment.yaml")
}

data "kubectl_manifest" "microservices" {
  yaml_body = file("microservices-deployment.yaml")
}

data "kubectl_manifest" "api_gateway" {
  yaml_body = file("api-gateway.yaml")
}

resource "null_resource" "apply_k8s" {
  provisioner "local-exec" {
    command = "kubectl apply -f rabbitmq-deployment.yaml && kubectl apply -f microservices-deployment.yaml && kubectl apply -f api-gateway.yaml"
  }
}