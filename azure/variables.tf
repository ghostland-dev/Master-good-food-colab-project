variable "resource_group_name" {
  default = "my-resource-group"
}

variable "location" {
  default = "West Europe"
}

variable "container_registry_name" {
  default = "myregistry"
}

variable "app_service_plan_name" {
  default = "client-service-plan"
}

variable "app_service_name" {
  default = "client-service-app"
}

variable "container_registry_url" {
  default = "myregistry.azurecr.io"
}

variable "image_name" {
  default = "goodfood/client-service"
}
