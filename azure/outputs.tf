output "container_app_url" {
  description = "URL publique du Container App"
  value       = azurerm_container_app.client_service.latest_revision_fqdn
}
