const blogArticles = [
  {
    id: 1,
    title: {
      es: "Implementación de Kubernetes en Producción: Lecciones Aprendidas",
      en: "Production Kubernetes Implementation: Lessons Learned"
    },
    slug: "kubernetes-production-lessons",
    excerpt: {
      es: "Una guía completa sobre las mejores prácticas, arquitectura de referencia y criterios de decisión para implementar Kubernetes en entornos de producción.",
      en: "A comprehensive guide on best practices, reference architecture, and decision criteria for implementing Kubernetes in production environments."
    },
    content: {
      es: `# Implementación de Kubernetes en Producción: Lecciones Aprendidas

## Arquitectura de Referencia

### Componentes Principales
- **Control Plane**: Configuración de alta disponibilidad
- **Worker Nodes**: Estrategias de escalado automático
- **Networking**: CNI selection y políticas de red
- **Storage**: Persistent volumes y storage classes

## Criterios de Toma de Decisiones

### 1. Selección de CNI
**Problema**: ¿Qué Container Network Interface elegir?

**Criterios evaluados**:
- Rendimiento de red
- Facilidad de configuración
- Soporte para políticas de red
- Compatibilidad con el proveedor de nube

**Solución propuesta**: Calico para Azure AKS
- Rendimiento superior en throughput
- Soporte nativo para políticas de red
- Integración optimizada con Azure

### 2. Estrategia de Almacenamiento
**Problema**: Gestión de datos persistentes

**Criterios evaluados**:
- Rendimiento (IOPS, throughput)
- Disponibilidad y durabilidad
- Costo
- Facilidad de backup

**Solución propuesta**: Azure Disk Premium + Azure Files
\`\`\`yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: premium-disk
provisioner: disk.csi.azure.com
parameters:
  storageaccounttype: Premium_LRS
  kind: Managed
\`\`\`

## Código de Despliegue

### Terraform Infrastructure
\`\`\`hcl
resource "azurerm_kubernetes_cluster" "main" {
  name                = var.cluster_name
  location            = var.location
  resource_group_name = var.resource_group_name
  dns_prefix          = var.dns_prefix

  default_node_pool {
    name       = "default"
    node_count = var.node_count
    vm_size    = var.vm_size
  }

  identity {
    type = "SystemAssigned"
  }

  network_profile {
    network_plugin = "azure"
    network_policy = "calico"
  }
}
\`\`\`

### Helm Chart Deployment
\`\`\`bash
# Agregar repositorios
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo add cert-manager https://charts.jetstack.io

# Instalar ingress controller
helm install nginx-ingress ingress-nginx/ingress-nginx \\
  --namespace ingress-nginx \\
  --create-namespace \\
  --set controller.replicaCount=2

# Instalar cert-manager
helm install cert-manager cert-manager/cert-manager \\
  --namespace cert-manager \\
  --create-namespace \\
  --set installCRDs=true
\`\`\`

## Configuración de Infraestructura

### Monitoring Stack
\`\`\`yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: prometheus-config
data:
  prometheus.yml: |
    global:
      scrape_interval: 15s
    rule_files:
      - "*.rules"
    scrape_configs:
      - job_name: 'kubernetes-pods'
        kubernetes_sd_configs:
          - role: pod
\`\`\`

## Paso a Paso de Implementación

### Fase 1: Preparación
1. **Evaluación de requisitos**
   - Análisis de carga de trabajo
   - Estimación de recursos
   - Definición de SLAs

2. **Diseño de arquitectura**
   - Diagrama de componentes
   - Flujo de datos
   - Estrategias de seguridad

### Fase 2: Provisión de Infraestructura
1. **Terraform apply**
   \`\`\`bash
   terraform init
   terraform plan -var-file="prod.tfvars"
   terraform apply -var-file="prod.tfvars"
   \`\`\`

2. **Configuración de kubectl**
   \`\`\`bash
   az aks get-credentials --resource-group myRG --name myAKS
   \`\`\`

### Fase 3: Despliegue de Servicios Base
1. **Ingress Controller**
2. **Certificate Manager**
3. **Monitoring Stack**
4. **Logging Stack**

### Fase 4: Aplicaciones
1. **Despliegue de aplicaciones**
2. **Configuración de DNS**
3. **Certificados SSL**
4. **Pruebas de conectividad**

## Lecciones Aprendidas

### ✅ Buenas Prácticas
- Usar namespaces para aislamiento
- Implementar resource quotas
- Configurar network policies
- Automatizar backups

### ❌ Errores Comunes
- No configurar resource limits
- Ignorar security contexts
- No planificar la estrategia de upgrade
- Subestimar los costos de almacenamiento

## Conclusiones

La implementación exitosa de Kubernetes requiere una planificación cuidadosa y una comprensión profunda de los trade-offs involucrados. Esta guía proporciona un marco de referencia para tomar decisiones informadas.`,
      en: `# Production Kubernetes Implementation: Lessons Learned

## Reference Architecture

### Main Components
- **Control Plane**: High availability configuration
- **Worker Nodes**: Auto-scaling strategies
- **Networking**: CNI selection and network policies
- **Storage**: Persistent volumes and storage classes

## Decision Criteria

### 1. CNI Selection
**Problem**: Which Container Network Interface to choose?

**Evaluated criteria**:
- Network performance
- Configuration ease
- Network policy support
- Cloud provider compatibility

**Proposed solution**: Calico for Azure AKS
- Superior throughput performance
- Native network policy support
- Optimized Azure integration

### 2. Storage Strategy
**Problem**: Persistent data management

**Evaluated criteria**:
- Performance (IOPS, throughput)
- Availability and durability
- Cost
- Backup ease

**Proposed solution**: Azure Disk Premium + Azure Files
\`\`\`yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: premium-disk
provisioner: disk.csi.azure.com
parameters:
  storageaccounttype: Premium_LRS
  kind: Managed
\`\`\`

## Deployment Code

### Terraform Infrastructure
\`\`\`hcl
resource "azurerm_kubernetes_cluster" "main" {
  name                = var.cluster_name
  location            = var.location
  resource_group_name = var.resource_group_name
  dns_prefix          = var.dns_prefix

  default_node_pool {
    name       = "default"
    node_count = var.node_count
    vm_size    = var.vm_size
  }

  identity {
    type = "SystemAssigned"
  }

  network_profile {
    network_plugin = "azure"
    network_policy = "calico"
  }
}
\`\`\`

### Helm Chart Deployment
\`\`\`bash
# Add repositories
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo add cert-manager https://charts.jetstack.io

# Install ingress controller
helm install nginx-ingress ingress-nginx/ingress-nginx \\
  --namespace ingress-nginx \\
  --create-namespace \\
  --set controller.replicaCount=2

# Install cert-manager
helm install cert-manager cert-manager/cert-manager \\
  --namespace cert-manager \\
  --create-namespace \\
  --set installCRDs=true
\`\`\`

## Infrastructure Configuration

### Monitoring Stack
\`\`\`yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: prometheus-config
data:
  prometheus.yml: |
    global:
      scrape_interval: 15s
    rule_files:
      - "*.rules"
    scrape_configs:
      - job_name: 'kubernetes-pods'
        kubernetes_sd_configs:
          - role: pod
\`\`\`

## Step-by-Step Implementation

### Phase 1: Preparation
1. **Requirements evaluation**
   - Workload analysis
   - Resource estimation
   - SLA definition

2. **Architecture design**
   - Component diagram
   - Data flow
   - Security strategies

### Phase 2: Infrastructure Provisioning
1. **Terraform apply**
   \`\`\`bash
   terraform init
   terraform plan -var-file="prod.tfvars"
   terraform apply -var-file="prod.tfvars"
   \`\`\`

2. **kubectl configuration**
   \`\`\`bash
   az aks get-credentials --resource-group myRG --name myAKS
   \`\`\`

### Phase 3: Base Services Deployment
1. **Ingress Controller**
2. **Certificate Manager**
3. **Monitoring Stack**
4. **Logging Stack**

### Phase 4: Applications
1. **Application deployment**
2. **DNS configuration**
3. **SSL certificates**
4. **Connectivity tests**

## Lessons Learned

### ✅ Best Practices
- Use namespaces for isolation
- Implement resource quotas
- Configure network policies
- Automate backups

### ❌ Common Mistakes
- Not configuring resource limits
- Ignoring security contexts
- Not planning upgrade strategy
- Underestimating storage costs

## Conclusions

Successful Kubernetes implementation requires careful planning and deep understanding of involved trade-offs. This guide provides a reference framework for making informed decisions.`
    },
    author: "Gabriel Contreras",
    date: "2024-06-15",
    readTime: 15,
    tags: ["kubernetes", "devops", "azure", "infrastructure", "production"],
    category: "Infrastructure",
    featured: true,
    published: true
  },
  {
    id: 2,
    title: {
      es: "Migración a Microservicios: Estrategias y Patrones",
      en: "Microservices Migration: Strategies and Patterns"
    },
    slug: "microservices-migration-strategies",
    excerpt: {
      es: "Guía práctica para migrar aplicaciones monolíticas a arquitecturas de microservicios, incluyendo patrones, herramientas y lecciones aprendidas.",
      en: "Practical guide for migrating monolithic applications to microservices architectures, including patterns, tools, and lessons learned."
    },
    content: {
      es: `# Migración a Microservicios: Estrategias y Patrones

## Arquitectura de Referencia

### Patrón Strangler Fig
La migración gradual es clave para el éxito:

\`\`\`mermaid
graph LR
    A[Cliente] --> B[API Gateway]
    B --> C[Proxy/Router]
    C --> D[Monolito Legacy]
    C --> E[Microservicio 1]
    C --> F[Microservicio 2]
\`\`\`

## Criterios de Toma de Decisiones

### 1. Identificación de Bounded Contexts
**Problema**: ¿Cómo dividir el monolito?

**Criterios evaluados**:
- Cohesión funcional
- Acoplamiento de datos
- Equipos responsables
- Frecuencia de cambios

**Herramienta recomendada**: Domain Driven Design

### 2. Estrategia de Datos
**Problema**: Gestión de consistencia de datos

**Opciones evaluadas**:
- Database per service
- Shared database anti-pattern
- Event sourcing
- CQRS

## Código de Implementación

### API Gateway con Kong
\`\`\`yaml
apiVersion: configuration.konghq.com/v1
kind: KongIngress
metadata:
  name: api-gateway-routing
upstream:
  algorithm: round-robin
proxy:
  path: /api/v1
route:
  strip_path: true
\`\`\`

### Event Sourcing Implementation
\`\`\`javascript
class EventStore {
  constructor() {
    this.events = [];
  }
  
  append(streamId, events, expectedVersion) {
    // Validar versión esperada
    const currentVersion = this.getVersion(streamId);
    if (currentVersion !== expectedVersion) {
      throw new Error('Concurrency conflict');
    }
    
    // Agregar eventos
    events.forEach(event => {
      this.events.push({
        streamId,
        version: currentVersion + 1,
        timestamp: new Date(),
        data: event
      });
    });
  }
  
  getEvents(streamId, fromVersion = 0) {
    return this.events
      .filter(e => e.streamId === streamId && e.version > fromVersion)
      .sort((a, b) => a.version - b.version);
  }
}
\`\`\`

## Paso a Paso de Migración

### Fase 1: Análisis y Preparación
1. **Mapeo de dependencias**
2. **Identificación de bounded contexts**
3. **Definición de APIs**
4. **Plan de migración**

### Fase 2: Implementación del Strangler Fig
1. **Setup del API Gateway**
2. **Implementación del primer microservicio**
3. **Routing gradual**
4. **Monitoreo y validación**

### Fase 3: Descomposición Gradual
1. **Extracción de servicios**
2. **Migración de datos**
3. **Actualización de dependencias**
4. **Pruebas de integración**

## Lecciones Aprendidas

### ✅ Factores de Éxito
- Empezar con servicios de bajo riesgo
- Invertir en observabilidad desde el inicio
- Automatizar testing end-to-end
- Mantener documentación actualizada

### ❌ Pitfalls Comunes
- Microservicios demasiado pequeños
- Ignorar la complejidad de red
- No planificar la gestión de configuración
- Subestimar el overhead operacional`,
      en: `# Microservices Migration: Strategies and Patterns

## Reference Architecture

### Strangler Fig Pattern
Gradual migration is key to success:

\`\`\`mermaid
graph LR
    A[Client] --> B[API Gateway]
    B --> C[Proxy/Router]
    C --> D[Legacy Monolith]
    C --> E[Microservice 1]
    C --> F[Microservice 2]
\`\`\`

## Decision Criteria

### 1. Bounded Contexts Identification
**Problem**: How to split the monolith?

**Evaluated criteria**:
- Functional cohesion
- Data coupling
- Team ownership
- Change frequency

**Recommended tool**: Domain Driven Design

### 2. Data Strategy
**Problem**: Data consistency management

**Evaluated options**:
- Database per service
- Shared database anti-pattern
- Event sourcing
- CQRS

## Implementation Code

### API Gateway with Kong
\`\`\`yaml
apiVersion: configuration.konghq.com/v1
kind: KongIngress
metadata:
  name: api-gateway-routing
upstream:
  algorithm: round-robin
proxy:
  path: /api/v1
route:
  strip_path: true
\`\`\`

### Event Sourcing Implementation
\`\`\`javascript
class EventStore {
  constructor() {
    this.events = [];
  }
  
  append(streamId, events, expectedVersion) {
    // Validate expected version
    const currentVersion = this.getVersion(streamId);
    if (currentVersion !== expectedVersion) {
      throw new Error('Concurrency conflict');
    }
    
    // Add events
    events.forEach(event => {
      this.events.push({
        streamId,
        version: currentVersion + 1,
        timestamp: new Date(),
        data: event
      });
    });
  }
  
  getEvents(streamId, fromVersion = 0) {
    return this.events
      .filter(e => e.streamId === streamId && e.version > fromVersion)
      .sort((a, b) => a.version - b.version);
  }
}
\`\`\`

## Migration Step-by-Step

### Phase 1: Analysis and Preparation
1. **Dependency mapping**
2. **Bounded contexts identification**
3. **API definition**
4. **Migration plan**

### Phase 2: Strangler Fig Implementation
1. **API Gateway setup**
2. **First microservice implementation**
3. **Gradual routing**
4. **Monitoring and validation**

### Phase 3: Gradual Decomposition
1. **Service extraction**
2. **Data migration**
3. **Dependencies update**
4. **Integration testing**

## Lessons Learned

### ✅ Success Factors
- Start with low-risk services
- Invest in observability from the beginning
- Automate end-to-end testing
- Keep documentation updated

### ❌ Common Pitfalls
- Too small microservices
- Ignoring network complexity
- Not planning configuration management
- Underestimating operational overhead`
    },
    author: "Gabriel Contreras",
    date: "2024-06-10",
    readTime: 12,
    tags: ["microservices", "architecture", "migration", "ddd", "api-gateway"],
    category: "Architecture",
    featured: false,
    published: true
  },
  {
    id: 3,
    title: {
      es: "Monitores Sintéticos con Elastic Stack y Terraform: Guía de Producción",
      en: "Synthetic Monitors with Elastic Stack and Terraform: Production Guide"
    },
    slug: "elastic-synthetic-monitors-terraform",
    excerpt: {
      es: "Implementación completa de monitores sintéticos para aplicaciones web usando Elastic Stack, automatizada con Terraform para entornos de producción.",
      en: "Complete implementation of synthetic monitors for web applications using Elastic Stack, automated with Terraform for production environments."
    },
    content: {
      es: `# Monitores Sintéticos con Elastic Stack y Terraform: Guía de Producción

## Introducción

En el mundo actual de DevOps y SRE, el monitoreo proactivo es esencial para mantener la disponibilidad y rendimiento de nuestras aplicaciones. Los monitores sintéticos nos permiten simular el comportamiento de usuarios reales y detectar problemas antes de que afecten a nuestros usuarios.

En este artículo, te mostraré cómo implementar una solución completa de monitoreo sintético usando Elastic Stack y automatizada con Terraform, lista para producción.

## Arquitectura de la Solución

### Componentes Principales
- **Elastic Stack**: Elasticsearch + Kibana para almacenamiento y visualización
- **Synthetics Monitors**: Verificaciones HTTP, API y TLS
- **Alerting System**: Notificaciones automáticas en caso de fallos
- **Terraform**: Infraestructura como código para gestión automatizada

### Diagrama de Arquitectura
\`\`\`mermaid
graph TD
    A[Monitor] --> B[Website]
    A --> C[API]
    A --> D[Database]
    B --> E[Elasticsearch]
    C --> E
    D --> E
    E --> F[Kibana]
    E --> G[Alerts]
    G --> H[Notifications]
\`\`\`

### Flujo de Monitoreo
\`\`\`mermaid
sequenceDiagram
    participant M as Monitor
    participant W as Website
    participant E as Elasticsearch
    participant A as Alerts
    
    M->>W: HTTP Request
    W-->>M: Response (200 OK)
    M->>E: Send Metrics
    M->>A: Trigger Alert (if failed)
\`\`\`

## Implementación con Terraform

### 1. Configuración del Provider

\`\`\`hcl
terraform {
  required_version = ">= 1.0.0"
  required_providers {
    elasticstack = {
      source  = "elastic/elasticstack"
      version = "~>0.9"
    }
  }
}

provider "elasticstack" {
  elasticsearch {
    endpoints = [var.elasticsearch_url]
    username  = var.elasticsearch_username
    password  = var.elasticsearch_password
  }
  
  kibana {
    endpoints = [var.kibana_url]
    username  = var.elasticsearch_username
    password  = var.elasticsearch_password
  }
  
  fleet {}
}
\`\`\`

### 2. Monitor de Salud de Website

\`\`\`hcl
resource "elasticstack_kibana_synthetics_monitor" "website_health_monitor" {
  name      = "Website Health Monitor"
  space_id  = var.kibana_space_id
  schedule  = var.monitor_schedule_minutes
  enabled   = var.monitors_enabled
  tags      = ["terraform", "production", "health-check"]
  
  alert = {
    status = {
      enabled = var.status_alerts_enabled
    }
    tls = {
      enabled = var.tls_alerts_enabled
    }
  }
  
  service_name = "production-website-monitor"
  timeout     = var.monitor_timeout_seconds
  locations   = var.monitor_locations
  
  http = {
    url  = var.target_website_url
    ipv4 = true
    ipv6 = false
    
    check = jsonencode({
      request = {
        method = "GET"
        headers = {
          "User-Agent" = "Elastic-Synthetics-Monitor/1.0"
        }
      }
      response = {
        status = [200, 201, 202]
        include_body = var.include_response_body
      }
    })
  }
  
  retest_on_failure = var.retest_on_failure
}
\`\`\`

### 3. Monitor de API con Validación JSON

\`\`\`hcl
resource "elasticstack_kibana_synthetics_monitor" "api_health_monitor" {
  count = var.api_endpoint_url != "" ? 1 : 0
  
  name      = "API Health Monitor"
  space_id  = var.kibana_space_id
  schedule  = var.monitor_schedule_minutes
  enabled   = var.monitors_enabled
  tags      = ["terraform", "production", "api", "health-check"]
  
  http = {
    url  = var.api_endpoint_url
    ipv4 = true
    ipv6 = false
    
    check = jsonencode({
      request = {
        method = "GET"
        headers = {
          "Content-Type" = "application/json"
          "User-Agent"   = "Elastic-Synthetics-Monitor/1.0"
        }
      }
      response = {
        status = [200]
        include_body = true
        json = [
          {
            description = "API Status Check"
            expression  = "status == 'ok' || status == 'healthy'"
          }
        ]
      }
    })
  }
  
  retest_on_failure = var.retest_on_failure
}
\`\`\`

### 4. Reglas de Alertas

\`\`\`hcl
resource "elasticstack_kibana_alerting_rule" "synthetics_status_alert" {
  name         = "Production Synthetics Monitor Status Alert"
  consumer     = "alerts"
  enabled      = var.alerting_enabled
  rule_type_id = "xpack.synthetics.alerts.monitorStatus"
  space_id     = var.kibana_space_id
  tags         = ["SYNTHETICS_ALERT", "production", "terraform"]
  interval     = var.alert_check_interval
  
  params = jsonencode({
    search = {
      query = {
        bool = {
          filter = [
            {
              terms = {
                "tags" = ["production"]
              }
            }
          ]
        }
      }
    }
  })
  
  actions = var.alert_actions
}
\`\`\`

## Configuración de Variables

### Variables Principales

\`\`\`hcl
variable "elasticsearch_url" {
  description = "URL for Elasticsearch (including the port)"
  type        = string
  default     = "http://localhost:9200"

  validation {
    condition     = can(regex("^https?://", var.elasticsearch_url))
    error_message = "Elasticsearch URL must start with http:// or https://"
  }
}

variable "target_website_url" {
  description = "Primary website URL to monitor"
  type        = string
  default     = "https://example.com"

  validation {
    condition     = can(regex("^https?://", var.target_website_url))
    error_message = "Target website URL must start with http:// or https://"
  }
}

variable "monitor_schedule_minutes" {
  description = "Schedule interval for monitors in minutes"
  type        = number
  default     = 5

  validation {
    condition     = var.monitor_schedule_minutes >= 1 && var.monitor_schedule_minutes <= 60
    error_message = "Monitor schedule must be between 1 and 60 minutes"
  }
}
\`\`\`

## Configuración de Alertas

### Integración con Slack

\`\`\`hcl
alert_actions = [
  {
    id    = "slack-webhook"
    group = "default"
    params = {
      method = "POST"
      url    = "https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK"
      body   = jsonencode({
        text = "🚨 Monitor Alert: {{alert.name}} - {{context.reason}}"
        channel = "#alerts"
        username = "Elastic Synthetics"
      })
      headers = {
        "Content-Type" = "application/json"
      }
    }
  }
]
\`\`\`

### Integración con Email

\`\`\`hcl
alert_actions = [
  {
    id    = "email-connector"
    group = "default"
    params = {
      to      = ["devops@company.com", "sre@company.com"]
      subject = "🚨 Synthetics Alert: {{alert.name}}"
      message = "Monitor {{monitor.name}} failed.\\n\\nDetails:\\n- Location: {{context.location}}\\n- Error: {{context.reason}}\\n\\nCheck Kibana for more details."
    }
  }
]
\`\`\`

## Testing con Docker ELK

### 1. Configuración del Entorno de Pruebas

\`\`\`bash
# Clonar docker-elk
git clone https://github.com/deviantony/docker-elk.git
cd docker-elk

# Iniciar stack
docker-compose up -d

# Esperar que los servicios estén listos
echo "Esperando que Elastic Stack esté listo..."
sleep 60

# Verificar estado
curl -u elastic:changeme http://localhost:9200/_cluster/health
\`\`\`

### 2. Aplicar Configuración Terraform

\`\`\`bash
# Configurar variables para testing
cat > terraform.tfvars.local << EOF
elasticsearch_url      = "http://localhost:9200"
kibana_url            = "http://localhost:5601"
elasticsearch_username = "elastic"
elasticsearch_password = "changeme"

project_name          = "test-webapp"
environment          = "testing"
target_website_url   = "https://httpbin.org/status/200"
api_endpoint_url     = "https://httpbin.org/json"

monitor_schedule_minutes = 1
monitor_timeout_seconds  = 10
EOF

# Aplicar configuración
terraform init
terraform plan -var-file="terraform.tfvars.local"
terraform apply -var-file="terraform.tfvars.local" -auto-approve
\`\`\`

### 3. Verificación de Monitores

\`\`\`bash
# Ver outputs de Terraform
terraform output

# Acceder a Kibana Synthetics
open http://localhost:5601/app/synthetics

# Verificar monitors via API
curl -u elastic:changeme \\
  "http://localhost:5601/api/synthetics/monitors" \\
  -H "kbn-xsrf: true"
\`\`\`

## Mejores Prácticas para Producción

### 1. Seguridad

**Usar API Keys en lugar de credenciales:**
\`\`\`bash
# Generar API key en Kibana
# Stack Management > Security > API Keys

export TF_VAR_elasticsearch_api_key="your-api-key-here"
\`\`\`

**Variables de entorno para datos sensibles:**
\`\`\`bash
export TF_VAR_database_health_auth_header="Bearer your-token"
export TF_VAR_slack_webhook_url="https://hooks.slack.com/services/..."
\`\`\`

### 2. Estado Remoto de Terraform

\`\`\`hcl
terraform {
  backend "s3" {
    bucket = "your-terraform-state-bucket"
    key    = "synthetic-monitors/terraform.tfstate"
    region = "us-west-2"
  }
}
\`\`\`

### 3. Configuración de Múltiples Entornos

\`\`\`bash
# Estructura de archivos
├── environments/
│   ├── production.tfvars
│   ├── staging.tfvars
│   └── development.tfvars
├── main.tf
├── variables.tf
└── outputs.tf

# Deployment por ambiente
terraform apply -var-file="environments/production.tfvars"
\`\`\`

## Monitoreo y Observabilidad

### Dashboard en Kibana

Una vez implementados los monitores, Kibana proporciona dashboards automáticos que muestran:

- **Estado de monitores**: UP/DOWN status
- **Tiempos de respuesta**: Latencia por ubicación
- **Disponibilidad**: Uptime percentage
- **Alertas**: Estado de alertas activas

### Métricas Clave

- **Availability**: % de tiempo que los servicios están disponibles
- **Response Time**: Tiempo promedio de respuesta
- **Error Rate**: Porcentaje de requests fallidos
- **Certificate Expiry**: Días hasta expiración de certificados TLS

## Troubleshooting Común

### 1. Problemas de Conectividad

\`\`\`bash
# Verificar conectividad a Elasticsearch
curl -u elastic:changeme http://localhost:9200/_cluster/health

# Verificar autenticación
curl -u elastic:changeme http://localhost:9200/_security/_authenticate
\`\`\`

### 2. Monitors No Aparecen

\`\`\`bash
# Verificar licencia de Elastic
curl -u elastic:changeme http://localhost:9200/_license

# Verificar Fleet setup
curl -u elastic:changeme http://localhost:5601/api/fleet/setup
\`\`\`

### 3. Debug de Terraform

\`\`\`bash
# Habilitar logging detallado
export TF_LOG=DEBUG
terraform apply

# Validar configuración
terraform validate
terraform fmt
\`\`\`

## Conclusiones

La implementación de monitores sintéticos con Elastic Stack y Terraform proporciona:

- **Monitoreo Proactivo**: Detección temprana de problemas
- **Automatización**: Infraestructura como código
- **Escalabilidad**: Fácil adición de nuevos monitores
- **Observabilidad**: Dashboards integrados en Kibana
- **Alertas Inteligentes**: Notificaciones contextuales

Esta solución es especialmente valiosa para:
- Equipos de SRE que necesitan monitoreo 24/7
- Aplicaciones críticas que requieren alta disponibilidad
- Organizaciones que implementan DevOps y automatización

### Próximos Pasos

1. **Implementar Browser Monitors**: Para flujos de usuario complejos
2. **Integrar con APM**: Correlacionar con métricas de aplicación
3. **Automatizar Remediation**: Acciones automáticas ante fallos
4. **Implementar SLO/SLI**: Definir Service Level Objectives`,
      en: `# Synthetic Monitors with Elastic Stack and Terraform: Production Guide

## Introduction

In today's DevOps and SRE world, proactive monitoring is essential to maintain the availability and performance of our applications. Synthetic monitors allow us to simulate real user behavior and detect problems before they affect our users.

In this article, I'll show you how to implement a complete synthetic monitoring solution using Elastic Stack and automated with Terraform, ready for production.

## Solution Architecture

### Main Components
- **Elastic Stack**: Elasticsearch + Kibana for storage and visualization
- **Synthetics Monitors**: HTTP, API, and TLS checks
- **Alerting System**: Automatic notifications in case of failures
- **Terraform**: Infrastructure as code for automated management

### Architecture Diagram
\`\`\`mermaid
graph TD
    A[Monitor] --> B[Website]
    A --> C[API]
    A --> D[Database]
    B --> E[Elasticsearch]
    C --> E
    D --> E
    E --> F[Kibana]
    E --> G[Alerts]
    G --> H[Notifications]
\`\`\`

### Monitoring Flow
\`\`\`mermaid
sequenceDiagram
    participant M as Monitor
    participant W as Website
    participant E as Elasticsearch
    participant A as Alerts
    
    M->>W: HTTP Request
    W-->>M: Response (200 OK)
    M->>E: Send Metrics
    M->>A: Trigger Alert (if failed)
\`\`\`

## Implementation with Terraform

### 1. Provider Configuration

\`\`\`hcl
terraform {
  required_version = ">= 1.0.0"
  required_providers {
    elasticstack = {
      source  = "elastic/elasticstack"
      version = "~>0.9"
    }
  }
}

provider "elasticstack" {
  elasticsearch {
    endpoints = [var.elasticsearch_url]
    username  = var.elasticsearch_username
    password  = var.elasticsearch_password
  }
  
  kibana {
    endpoints = [var.kibana_url]
    username  = var.elasticsearch_username
    password  = var.elasticsearch_password
  }
  
  fleet {}
}
\`\`\`

### 2. Website Health Monitor

\`\`\`hcl
resource "elasticstack_kibana_synthetics_monitor" "website_health_monitor" {
  name      = "Website Health Monitor"
  space_id  = var.kibana_space_id
  schedule  = var.monitor_schedule_minutes
  enabled   = var.monitors_enabled
  tags      = ["terraform", "production", "health-check"]
  
  alert = {
    status = {
      enabled = var.status_alerts_enabled
    }
    tls = {
      enabled = var.tls_alerts_enabled
    }
  }
  
  service_name = "production-website-monitor"
  timeout     = var.monitor_timeout_seconds
  locations   = var.monitor_locations
  
  http = {
    url  = var.target_website_url
    ipv4 = true
    ipv6 = false
    
    check = jsonencode({
      request = {
        method = "GET"
        headers = {
          "User-Agent" = "Elastic-Synthetics-Monitor/1.0"
        }
      }
      response = {
        status = [200, 201, 202]
        include_body = var.include_response_body
      }
    })
  }
  
  retest_on_failure = var.retest_on_failure
}
\`\`\`

### 3. API Monitor with JSON Validation

\`\`\`hcl
resource "elasticstack_kibana_synthetics_monitor" "api_health_monitor" {
  count = var.api_endpoint_url != "" ? 1 : 0
  
  name      = "API Health Monitor"
  space_id  = var.kibana_space_id
  schedule  = var.monitor_schedule_minutes
  enabled   = var.monitors_enabled
  tags      = ["terraform", "production", "api", "health-check"]
  
  http = {
    url  = var.api_endpoint_url
    ipv4 = true
    ipv6 = false
    
    check = jsonencode({
      request = {
        method = "GET"
        headers = {
          "Content-Type" = "application/json"
          "User-Agent"   = "Elastic-Synthetics-Monitor/1.0"
        }
      }
      response = {
        status = [200]
        include_body = true
        json = [
          {
            description = "API Status Check"
            expression  = "status == 'ok' || status == 'healthy'"
          }
        ]
      }
    })
  }
  
  retest_on_failure = var.retest_on_failure
}
\`\`\`

### 4. Alert Rules

\`\`\`hcl
resource "elasticstack_kibana_alerting_rule" "synthetics_status_alert" {
  name         = "Production Synthetics Monitor Status Alert"
  consumer     = "alerts"
  enabled      = var.alerting_enabled
  rule_type_id = "xpack.synthetics.alerts.monitorStatus"
  space_id     = var.kibana_space_id
  tags         = ["SYNTHETICS_ALERT", "production", "terraform"]
  interval     = var.alert_check_interval
  
  params = jsonencode({
    search = {
      query = {
        bool = {
          filter = [
            {
              terms = {
                "tags" = ["production"]
              }
            }
          ]
        }
      }
    }
  })
  
  actions = var.alert_actions
}
\`\`\`

## Variable Configuration

### Main Variables

\`\`\`hcl
variable "elasticsearch_url" {
  description = "URL for Elasticsearch (including the port)"
  type        = string
  default     = "http://localhost:9200"

  validation {
    condition     = can(regex("^https?://", var.elasticsearch_url))
    error_message = "Elasticsearch URL must start with http:// or https://"
  }
}

variable "target_website_url" {
  description = "Primary website URL to monitor"
  type        = string
  default     = "https://example.com"

  validation {
    condition     = can(regex("^https?://", var.target_website_url))
    error_message = "Target website URL must start with http:// or https://"
  }
}

variable "monitor_schedule_minutes" {
  description = "Schedule interval for monitors in minutes"
  type        = number
  default     = 5

  validation {
    condition     = var.monitor_schedule_minutes >= 1 && var.monitor_schedule_minutes <= 60
    error_message = "Monitor schedule must be between 1 and 60 minutes"
  }
}
\`\`\`

## Alert Configuration

### Slack Integration

\`\`\`hcl
alert_actions = [
  {
    id    = "slack-webhook"
    group = "default"
    params = {
      method = "POST"
      url    = "https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK"
      body   = jsonencode({
        text = "🚨 Monitor Alert: {{alert.name}} - {{context.reason}}"
        channel = "#alerts"
        username = "Elastic Synthetics"
      })
      headers = {
        "Content-Type" = "application/json"
      }
    }
  }
]
\`\`\`

### Email Integration

\`\`\`hcl
alert_actions = [
  {
    id    = "email-connector"
    group = "default"
    params = {
      to      = ["devops@company.com", "sre@company.com"]
      subject = "🚨 Synthetics Alert: {{alert.name}}"
      message = "Monitor {{monitor.name}} failed.\\n\\nDetails:\\n- Location: {{context.location}}\\n- Error: {{context.reason}}\\n\\nCheck Kibana for more details."
    }
  }
]
\`\`\`

## Testing with Docker ELK

### 1. Test Environment Setup

\`\`\`bash
# Clone docker-elk
git clone https://github.com/deviantony/docker-elk.git
cd docker-elk

# Start stack
docker-compose up -d

# Wait for services to be ready
echo "Waiting for Elastic Stack to be ready..."
sleep 60

# Verify status
curl -u elastic:changeme http://localhost:9200/_cluster/health
\`\`\`

### 2. Apply Terraform Configuration

\`\`\`bash
# Configure variables for testing
cat > terraform.tfvars.local << EOF
elasticsearch_url      = "http://localhost:9200"
kibana_url            = "http://localhost:5601"
elasticsearch_username = "elastic"
elasticsearch_password = "changeme"

project_name          = "test-webapp"
environment          = "testing"
target_website_url   = "https://httpbin.org/status/200"
api_endpoint_url     = "https://httpbin.org/json"

monitor_schedule_minutes = 1
monitor_timeout_seconds  = 10
EOF

# Apply configuration
terraform init
terraform plan -var-file="terraform.tfvars.local"
terraform apply -var-file="terraform.tfvars.local" -auto-approve
\`\`\`

### 3. Monitor Verification

\`\`\`bash
# View Terraform outputs
terraform output

# Access Kibana Synthetics
open http://localhost:5601/app/synthetics

# Verify monitors via API
curl -u elastic:changeme \\
  "http://localhost:5601/api/synthetics/monitors" \\
  -H "kbn-xsrf: true"
\`\`\`

## Production Best Practices

### 1. Security

**Use API Keys instead of credentials:**
\`\`\`bash
# Generate API key in Kibana
# Stack Management > Security > API Keys

export TF_VAR_elasticsearch_api_key="your-api-key-here"
\`\`\`

**Environment variables for sensitive data:**
\`\`\`bash
export TF_VAR_database_health_auth_header="Bearer your-token"
export TF_VAR_slack_webhook_url="https://hooks.slack.com/services/..."
\`\`\`

### 2. Terraform Remote State

\`\`\`hcl
terraform {
  backend "s3" {
    bucket = "your-terraform-state-bucket"
    key    = "synthetic-monitors/terraform.tfstate"
    region = "us-west-2"
  }
}
\`\`\`

### 3. Multi-Environment Configuration

\`\`\`bash
# File structure
├── environments/
│   ├── production.tfvars
│   ├── staging.tfvars
│   └── development.tfvars
├── main.tf
├── variables.tf
└── outputs.tf

# Environment deployment
terraform apply -var-file="environments/production.tfvars"
\`\`\`

## Monitoring and Observability

### Kibana Dashboard

Once monitors are implemented, Kibana provides automatic dashboards showing:

- **Monitor status**: UP/DOWN status
- **Response times**: Latency per location
- **Availability**: Uptime percentage
- **Alerts**: Active alert status

### Key Metrics

- **Availability**: % of time services are available
- **Response Time**: Average response time
- **Error Rate**: Percentage of failed requests
- **Certificate Expiry**: Days until TLS certificate expiration

## Common Troubleshooting

### 1. Connectivity Issues

\`\`\`bash
# Verify Elasticsearch connectivity
curl -u elastic:changeme http://localhost:9200/_cluster/health

# Verify authentication
curl -u elastic:changeme http://localhost:9200/_security/_authenticate
\`\`\`

### 2. Monitors Don't Appear

\`\`\`bash
# Check Elastic license
curl -u elastic:changeme http://localhost:9200/_license

# Verify Fleet setup
curl -u elastic:changeme http://localhost:5601/api/fleet/setup
\`\`\`

### 3. Terraform Debug

\`\`\`bash
# Enable detailed logging
export TF_LOG=DEBUG
terraform apply

# Validate configuration
terraform validate
terraform fmt
\`\`\`

## Conclusions

Implementing synthetic monitors with Elastic Stack and Terraform provides:

- **Proactive Monitoring**: Early problem detection
- **Automation**: Infrastructure as code
- **Scalability**: Easy addition of new monitors
- **Observability**: Integrated dashboards in Kibana
- **Smart Alerts**: Contextual notifications

This solution is especially valuable for:
- SRE teams that need 24/7 monitoring
- Critical applications requiring high availability
- Organizations implementing DevOps and automation

### Next Steps

1. **Implement Browser Monitors**: For complex user flows
2. **Integrate with APM**: Correlate with application metrics
3. **Automate Remediation**: Automatic actions on failures
4. **Implement SLO/SLI**: Define Service Level Objectives`
    },
    author: "Gabriel Contreras",
    date: "2025-01-01",
    readTime: 18,
    tags: ["elastic", "synthetics", "terraform", "monitoring", "devops", "sre", "infrastructure"],
    category: "Monitoring",
    featured: true,
    published: true
  }
];

// Función para obtener artículos por categoría
export const getArticlesByCategory = (category) => {
  return blogArticles.filter(article => 
    article.category === category && article.published
  );
};

// Función para obtener artículos destacados
export const getFeaturedArticles = () => {
  return blogArticles.filter(article => 
    article.featured && article.published
  );
};

// Función para obtener artículo por slug
export const getArticleBySlug = (slug) => {
  return blogArticles.find(article => article.slug === slug);
};

// Función para obtener un artículo específico por ID
export const getArticleById = (id) => {
  return blogArticles.find(article => article.id === id);
};

// Función para obtener todos los artículos publicados
export const getPublishedArticles = () => {
  return blogArticles
    .filter(article => article.published)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
};

// Función para obtener categorías únicas
export const getCategories = () => {
  const categories = [...new Set(blogArticles.map(article => article.category))];
  return categories;
};

// Función para obtener tags únicos
export const getTags = () => {
  const tags = [...new Set(blogArticles.flatMap(article => article.tags))];
  return tags;
};

export default blogArticles;
