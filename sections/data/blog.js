const blogArticles = [
  {
    id: 1,
    title: {
      es: "Implementación de Kubernetes en Producción: Lecciones Aprendidas",
      en: "Production Kubernetes Implementation: Lessons Learned",
      pt: "Implementação de Kubernetes em Produção: Lições Aprendidas"
    },
    slug: "kubernetes-production-lessons",
    excerpt: {
      es: "Una guía completa sobre las mejores prácticas, arquitectura de referencia y criterios de decisión para implementar Kubernetes en entornos de producción.",
      en: "A comprehensive guide on best practices, reference architecture, and decision criteria for implementing Kubernetes in production environments.",
      pt: "Um guia completo sobre melhores práticas, arquitetura de referência e critérios de decisão para implementar Kubernetes em ambientes de produção."
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

Successful Kubernetes implementation requires careful planning and deep understanding of involved trade-offs. This guide provides a reference framework for making informed decisions.`,
      pt: `# Implementação de Kubernetes em Produção: Lições Aprendidas

## Arquitetura de Referência

### Componentes Principais
- **Control Plane**: Configuração de alta disponibilidade
- **Worker Nodes**: Estratégias de escalonamento automático
- **Networking**: Seleção de CNI e políticas de rede
- **Storage**: Volumes persistentes e storage classes

## Critérios de Tomada de Decisão

### 1. Seleção de CNI
**Problema**: Qual Container Network Interface escolher?

**Critérios avaliados**:
- Desempenho de rede
- Facilidade de configuração
- Suporte a políticas de rede
- Compatibilidade com o provedor de nuvem

**Solução proposta**: Calico para Azure AKS
- Desempenho superior de throughput
- Suporte nativo a políticas de rede
- Integração otimizada com Azure

### 2. Estratégia de Armazenamento
**Problema**: Gestão de dados persistentes

**Critérios avaliados**:
- Desempenho (IOPS, throughput)
- Disponibilidade e durabilidade
- Custo
- Facilidade de backup

**Solução proposta**: Azure Disk Premium + Azure Files
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

## Código de Implantação

### Infraestrutura Terraform
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

### Implantação com Helm Chart
\`\`\`bash
# Adicionar repositórios
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

## Configuração de Infraestrutura

### Stack de Monitoramento
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

## Passo a Passo da Implementação

### Fase 1: Preparação
1. **Avaliação de requisitos**
   - Análise de carga de trabalho
   - Estimativa de recursos
   - Definição de SLAs

2. **Design de arquitetura**
   - Diagrama de componentes
   - Fluxo de dados
   - Estratégias de segurança

### Fase 2: Provisionamento de Infraestrutura
1. **Terraform apply**
   \`\`\`bash
   terraform init
   terraform plan -var-file="prod.tfvars"
   terraform apply -var-file="prod.tfvars"
   \`\`\`

2. **Configuração do kubectl**
   \`\`\`bash
   az aks get-credentials --resource-group myRG --name myAKS
   \`\`\`

### Fase 3: Implantação de Serviços Base
1. **Ingress Controller**
2. **Certificate Manager**
3. **Stack de Monitoramento**
4. **Stack de Logging**

### Fase 4: Aplicações
1. **Implantação de aplicações**
2. **Configuração de DNS**
3. **Certificados SSL**
4. **Testes de conectividade**

## Lições Aprendidas

### Boas Práticas
- Usar namespaces para isolamento
- Implementar resource quotas
- Configurar políticas de rede
- Automatizar backups

### Erros Comuns
- Não configurar resource limits
- Ignorar security contexts
- Não planejar a estratégia de upgrade
- Subestimar os custos de armazenamento

## Conclusões

A implementação bem-sucedida do Kubernetes requer planejamento cuidadoso e compreensão profunda dos trade-offs envolvidos. Este guia fornece um referencial para tomar decisões informadas.`
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
      en: "Microservices Migration: Strategies and Patterns",
      pt: "Migração para Microsserviços: Estratégias e Padrões"
    },
    slug: "microservices-migration-strategies",
    excerpt: {
      es: "Guía práctica para migrar aplicaciones monolíticas a arquitecturas de microservicios, incluyendo patrones, herramientas y lecciones aprendidas.",
      en: "Practical guide for migrating monolithic applications to microservices architectures, including patterns, tools, and lessons learned.",
      pt: "Guia prático para migrar aplicações monolíticas para arquiteturas de microsserviços, incluindo padrões, ferramentas e lições aprendidas."
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
- Underestimating operational overhead`,
      pt: `# Migração para Microsserviços: Estratégias e Padrões

## Arquitetura de Referência

### Padrão Strangler Fig
A migração gradual é a chave para o sucesso:

\`\`\`mermaid
graph LR
    A[Cliente] --> B[API Gateway]
    B --> C[Proxy/Router]
    C --> D[Monólito Legacy]
    C --> E[Microsserviço 1]
    C --> F[Microsserviço 2]
\`\`\`

## Critérios de Tomada de Decisão

### 1. Identificação de Bounded Contexts
**Problema**: Como dividir o monólito?

**Critérios avaliados**:
- Coesão funcional
- Acoplamento de dados
- Equipes responsáveis
- Frequência de mudanças

**Ferramenta recomendada**: Domain Driven Design

### 2. Estratégia de Dados
**Problema**: Gestão de consistência de dados

**Opções avaliadas**:
- Database per service
- Shared database anti-pattern
- Event sourcing
- CQRS

## Código de Implementação

### API Gateway com Kong
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

### Implementação de Event Sourcing
\`\`\`javascript
class EventStore {
  constructor() {
    this.events = [];
  }

  append(streamId, events, expectedVersion) {
    // Validar versão esperada
    const currentVersion = this.getVersion(streamId);
    if (currentVersion !== expectedVersion) {
      throw new Error('Conflito de concorrência');
    }

    // Adicionar eventos
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

## Passo a Passo da Migração

### Fase 1: Análise e Preparação
1. **Mapeamento de dependências**
2. **Identificação de bounded contexts**
3. **Definição de APIs**
4. **Plano de migração**

### Fase 2: Implementação do Strangler Fig
1. **Setup do API Gateway**
2. **Implementação do primeiro microsserviço**
3. **Roteamento gradual**
4. **Monitoramento e validação**

### Fase 3: Decomposição Gradual
1. **Extração de serviços**
2. **Migração de dados**
3. **Atualização de dependências**
4. **Testes de integração**

## Lições Aprendidas

### Fatores de Sucesso
- Começar com serviços de baixo risco
- Investir em observabilidade desde o início
- Automatizar testes end-to-end
- Manter documentação atualizada

### Armadilhas Comuns
- Microsserviços pequenos demais
- Ignorar a complexidade de rede
- Não planejar a gestão de configuração
- Subestimar o overhead operacional`
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
      en: "Synthetic Monitors with Elastic Stack and Terraform: Production Guide",
      pt: "Monitores Sintéticos com Elastic Stack e Terraform: Guia de Produção"
    },
    slug: "elastic-synthetic-monitors-terraform",
    excerpt: {
      es: "Implementación completa de monitores sintéticos para aplicaciones web usando Elastic Stack, automatizada con Terraform para entornos de producción.",
      en: "Complete implementation of synthetic monitors for web applications using Elastic Stack, automated with Terraform for production environments.",
      pt: "Implementação completa de monitores sintéticos para aplicações web usando Elastic Stack, automatizada com Terraform para ambientes de produção."
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
  },
  {
    id: 4,
    title: {
      es: "Pipelines CI/CD a Escala: Orquestando más de 400 Pipelines",
      en: "CI/CD Pipelines at Scale: Orchestrating 400+ Pipelines",
      pt: "Pipelines CI/CD em Escala: Orquestrando mais de 400 Pipelines"
    },
    slug: "cicd-pipelines-at-scale",
    excerpt: {
      es: "Estrategias probadas para gestionar más de 400 pipelines CI/CD con templates reutilizables, governance automatizada y despliegues multi-entorno seguros.",
      en: "Proven strategies for managing 400+ CI/CD pipelines with reusable templates, automated governance, and secure multi-environment deployments.",
      pt: "Estratégias comprovadas para gerenciar mais de 400 pipelines CI/CD com templates reutilizáveis, governança automatizada e deploys multi-ambiente seguros."
    },
    content: {
      es: `# Pipelines CI/CD a Escala: Orquestando más de 400 Pipelines

## El Desafío

Gestionar más de 400 pipelines CI/CD en una organización enterprise no es simplemente "más de lo mismo". Los problemas que surgen a escala son cualitativamente distintos: drift de configuración, tiempos de mantenimiento exponenciales y falta de visibilidad sobre el estado global de los despliegues.

## Arquitectura de Templates YAML

### Biblioteca de Templates Centralizada

La clave fue crear una **biblioteca de templates YAML** versionada como un repositorio independiente:

\`\`\`yaml
# templates/build/dotnet-build.yml
parameters:
  - name: projectPath
    type: string
  - name: configuration
    type: string
    default: 'Release'
  - name: runTests
    type: boolean
    default: true

steps:
  - task: DotNetCoreCLI@2
    displayName: 'Restore packages'
    inputs:
      command: 'restore'
      projects: '\${{ parameters.projectPath }}/**/*.csproj'

  - task: DotNetCoreCLI@2
    displayName: 'Build solution'
    inputs:
      command: 'build'
      projects: '\${{ parameters.projectPath }}/**/*.csproj'
      arguments: '--configuration \${{ parameters.configuration }} --no-restore'

  - \${{ if eq(parameters.runTests, true) }}:
    - task: DotNetCoreCLI@2
      displayName: 'Run unit tests'
      inputs:
        command: 'test'
        projects: '\${{ parameters.projectPath }}/**/*Tests.csproj'
        arguments: '--configuration \${{ parameters.configuration }} --collect:"XPlat Code Coverage"'
\`\`\`

### Composición de Pipelines

Cada proyecto consume los templates de forma declarativa:

\`\`\`yaml
# azure-pipelines.yml de un microservicio
resources:
  repositories:
    - repository: templates
      type: git
      name: DevOps/pipeline-templates
      ref: refs/tags/v2.5.0

extends:
  template: pipelines/microservice.yml@templates
  parameters:
    serviceName: 'order-service'
    deployEnvironments: ['dev', 'staging', 'production']
    requireApproval: true
\`\`\`

## Governance y Quality Gates

### Escaneo de Seguridad Integrado

Cada pipeline pasa por gates obligatorios antes del despliegue:

1. **SAST** (SonarQube): Análisis estático con umbral de cobertura al 80%
2. **SCA** (WhiteSource/Mend): Escaneo de dependencias y licencias
3. **Container Scanning** (Trivy): Vulnerabilidades en imágenes Docker
4. **Secrets Detection** (GitLeaks): Prevención de filtración de credenciales

### Política de Branching

\`\`\`yaml
# Regla de branch policy automatizada
trigger:
  branches:
    include:
      - main
      - release/*

pr:
  branches:
    include:
      - main
  autoCancel: true
  drafts: false
\`\`\`

## Despliegues Multi-Entorno

### Patrón de Promoción

Implementamos un modelo de promoción secuencial con validaciones automáticas:

- **Dev**: Despliegue automático en cada commit a main
- **Staging**: Promoción automática tras pasar smoke tests
- **Production**: Aprobación manual + ventana de despliegue + canary release al 10%

### Rollback Automatizado

\`\`\`yaml
# Template de rollback
steps:
  - script: |
      HEALTH_CHECK=$(curl -s -o /dev/null -w "%{http_code}" https://\$ENDPOINT/health)
      if [ "\$HEALTH_CHECK" != "200" ]; then
        echo "##vso[task.logissue type=error]Health check failed, initiating rollback"
        kubectl rollout undo deployment/\$SERVICE_NAME -n \$NAMESPACE
        exit 1
      fi
    displayName: 'Post-deployment health check'
\`\`\`

## Resultados

| Métrica | Antes | Después |
|---------|-------|---------|
| Tiempo de onboarding de pipeline | 2 días | 30 minutos |
| Drift de configuración | 60% | < 5% |
| Incidentes por despliegues | 12/mes | 2/mes |
| Tiempo medio de despliegue | 45 min | 12 min |

## Lecciones Aprendidas

1. **Versioná tus templates**: Usar tags semánticos evita que un cambio en el template rompa 400 pipelines simultáneamente
2. **Observabilidad de pipelines**: Dashboards centralizados con métricas de DORA son indispensables
3. **Self-service con guardrails**: Los equipos deben poder configurar sus pipelines dentro de límites definidos
4. **Automatizá la governance**: Las validaciones manuales no escalan`,
      en: `# CI/CD Pipelines at Scale: Orchestrating 400+ Pipelines

## The Challenge

Managing over 400 CI/CD pipelines in an enterprise organization is not simply "more of the same." Problems that emerge at scale are qualitatively different: configuration drift, exponential maintenance overhead, and lack of visibility into global deployment health.

## YAML Template Architecture

### Centralized Template Library

The key was building a **versioned YAML template library** as a standalone repository:

\`\`\`yaml
# templates/build/dotnet-build.yml
parameters:
  - name: projectPath
    type: string
  - name: configuration
    type: string
    default: 'Release'
  - name: runTests
    type: boolean
    default: true

steps:
  - task: DotNetCoreCLI@2
    displayName: 'Restore packages'
    inputs:
      command: 'restore'
      projects: '\${{ parameters.projectPath }}/**/*.csproj'

  - task: DotNetCoreCLI@2
    displayName: 'Build solution'
    inputs:
      command: 'build'
      projects: '\${{ parameters.projectPath }}/**/*.csproj'
      arguments: '--configuration \${{ parameters.configuration }} --no-restore'

  - \${{ if eq(parameters.runTests, true) }}:
    - task: DotNetCoreCLI@2
      displayName: 'Run unit tests'
      inputs:
        command: 'test'
        projects: '\${{ parameters.projectPath }}/**/*Tests.csproj'
        arguments: '--configuration \${{ parameters.configuration }} --collect:"XPlat Code Coverage"'
\`\`\`

### Pipeline Composition

Each project consumes templates declaratively:

\`\`\`yaml
# Microservice azure-pipelines.yml
resources:
  repositories:
    - repository: templates
      type: git
      name: DevOps/pipeline-templates
      ref: refs/tags/v2.5.0

extends:
  template: pipelines/microservice.yml@templates
  parameters:
    serviceName: 'order-service'
    deployEnvironments: ['dev', 'staging', 'production']
    requireApproval: true
\`\`\`

## Governance and Quality Gates

### Integrated Security Scanning

Every pipeline passes through mandatory gates before deployment:

1. **SAST** (SonarQube): Static analysis with 80% coverage threshold
2. **SCA** (WhiteSource/Mend): Dependency and license scanning
3. **Container Scanning** (Trivy): Docker image vulnerability detection
4. **Secrets Detection** (GitLeaks): Credential leak prevention

### Branch Policy

\`\`\`yaml
# Automated branch policy rule
trigger:
  branches:
    include:
      - main
      - release/*

pr:
  branches:
    include:
      - main
  autoCancel: true
  drafts: false
\`\`\`

## Multi-Environment Deployments

### Promotion Pattern

We implemented a sequential promotion model with automated validations:

- **Dev**: Automatic deployment on every commit to main
- **Staging**: Auto-promotion after smoke tests pass
- **Production**: Manual approval + deployment window + 10% canary release

### Automated Rollback

\`\`\`yaml
# Rollback template
steps:
  - script: |
      HEALTH_CHECK=$(curl -s -o /dev/null -w "%{http_code}" https://\$ENDPOINT/health)
      if [ "\$HEALTH_CHECK" != "200" ]; then
        echo "##vso[task.logissue type=error]Health check failed, initiating rollback"
        kubectl rollout undo deployment/\$SERVICE_NAME -n \$NAMESPACE
        exit 1
      fi
    displayName: 'Post-deployment health check'
\`\`\`

## Results

| Metric | Before | After |
|--------|--------|-------|
| Pipeline onboarding time | 2 days | 30 minutes |
| Configuration drift | 60% | < 5% |
| Deployment-related incidents | 12/month | 2/month |
| Mean deployment time | 45 min | 12 min |

## Lessons Learned

1. **Version your templates**: Semantic tags prevent a single template change from breaking 400 pipelines simultaneously
2. **Pipeline observability**: Centralized dashboards with DORA metrics are essential
3. **Self-service with guardrails**: Teams should configure their pipelines within defined boundaries
4. **Automate governance**: Manual validations do not scale`,
      pt: `# Pipelines CI/CD em Escala: Orquestrando mais de 400 Pipelines

## O Desafio

Gerenciar mais de 400 pipelines CI/CD em uma organização enterprise não é simplesmente "mais do mesmo". Os problemas que surgem em escala são qualitativamente diferentes: drift de configuração, tempo de manutenção exponencial e falta de visibilidade sobre o estado global dos deploys.

## Arquitetura de Templates YAML

### Biblioteca de Templates Centralizada

A chave foi criar uma **biblioteca de templates YAML** versionada como repositório independente:

\`\`\`yaml
# templates/build/dotnet-build.yml
parameters:
  - name: projectPath
    type: string
  - name: configuration
    type: string
    default: 'Release'
  - name: runTests
    type: boolean
    default: true

steps:
  - task: DotNetCoreCLI@2
    displayName: 'Restore packages'
    inputs:
      command: 'restore'
      projects: '\${{ parameters.projectPath }}/**/*.csproj'

  - task: DotNetCoreCLI@2
    displayName: 'Build solution'
    inputs:
      command: 'build'
      projects: '\${{ parameters.projectPath }}/**/*.csproj'
      arguments: '--configuration \${{ parameters.configuration }} --no-restore'

  - \${{ if eq(parameters.runTests, true) }}:
    - task: DotNetCoreCLI@2
      displayName: 'Run unit tests'
      inputs:
        command: 'test'
        projects: '\${{ parameters.projectPath }}/**/*Tests.csproj'
        arguments: '--configuration \${{ parameters.configuration }} --collect:"XPlat Code Coverage"'
\`\`\`

### Composição de Pipelines

Cada projeto consome os templates de forma declarativa:

\`\`\`yaml
# azure-pipelines.yml de um microsserviço
resources:
  repositories:
    - repository: templates
      type: git
      name: DevOps/pipeline-templates
      ref: refs/tags/v2.5.0

extends:
  template: pipelines/microservice.yml@templates
  parameters:
    serviceName: 'order-service'
    deployEnvironments: ['dev', 'staging', 'production']
    requireApproval: true
\`\`\`

## Governança e Quality Gates

### Escaneamento de Segurança Integrado

Cada pipeline passa por gates obrigatórios antes do deploy:

1. **SAST** (SonarQube): Análise estática com limiar de cobertura de 80%
2. **SCA** (WhiteSource/Mend): Escaneamento de dependências e licenças
3. **Container Scanning** (Trivy): Vulnerabilidades em imagens Docker
4. **Secrets Detection** (GitLeaks): Prevenção de vazamento de credenciais

### Política de Branching

\`\`\`yaml
# Regra de branch policy automatizada
trigger:
  branches:
    include:
      - main
      - release/*

pr:
  branches:
    include:
      - main
  autoCancel: true
  drafts: false
\`\`\`

## Deploys Multi-Ambiente

### Padrão de Promoção

Implementamos um modelo de promoção sequencial com validações automáticas:

- **Dev**: Deploy automático a cada commit na main
- **Staging**: Promoção automática após passar nos smoke tests
- **Production**: Aprovação manual + janela de deploy + canary release de 10%

### Rollback Automatizado

\`\`\`yaml
# Template de rollback
steps:
  - script: |
      HEALTH_CHECK=$(curl -s -o /dev/null -w "%{http_code}" https://\$ENDPOINT/health)
      if [ "\$HEALTH_CHECK" != "200" ]; then
        echo "##vso[task.logissue type=error]Health check failed, initiating rollback"
        kubectl rollout undo deployment/\$SERVICE_NAME -n \$NAMESPACE
        exit 1
      fi
    displayName: 'Post-deployment health check'
\`\`\`

## Resultados

| Métrica | Antes | Depois |
|---------|-------|--------|
| Tempo de onboarding de pipeline | 2 dias | 30 minutos |
| Drift de configuração | 60% | < 5% |
| Incidentes por deploys | 12/mês | 2/mês |
| Tempo médio de deploy | 45 min | 12 min |

## Lições Aprendidas

1. **Versione seus templates**: Tags semânticas evitam que uma mudança no template quebre 400 pipelines simultaneamente
2. **Observabilidade de pipelines**: Dashboards centralizados com métricas DORA são indispensáveis
3. **Self-service com guardrails**: As equipes devem poder configurar seus pipelines dentro de limites definidos
4. **Automatize a governança**: Validações manuais não escalam`
    },
    author: "Gabriel Contreras",
    date: "2024-08-20",
    readTime: 12,
    tags: ["cicd", "azure-devops", "github-actions", "automation", "pipelines"],
    category: "DevOps",
    featured: true,
    published: true
  },
  {
    id: 5,
    title: {
      es: "Agentes IA en el SDLC: Delegando Tareas a Jules, Claude Code y GitHub Agents",
      en: "AI Agents in the SDLC: Delegating Tasks to Jules, Claude Code & GitHub Agents",
      pt: "Agentes IA no SDLC: Delegando Tarefas para Jules, Claude Code e GitHub Agents"
    },
    slug: "ai-agents-sdlc",
    excerpt: {
      es: "Cómo integrar agentes de IA en cada fase del ciclo de desarrollo para automatizar revisiones de código, delegación de tareas y mantener el control humano en los flujos críticos.",
      en: "How to integrate AI agents into every phase of the development lifecycle to automate code reviews, task delegation, and maintain human oversight in critical workflows.",
      pt: "Como integrar agentes de IA em cada fase do ciclo de desenvolvimento para automatizar revisões de código, delegação de tarefas e manter o controle humano nos fluxos críticos."
    },
    content: {
      es: `# Agentes IA en el SDLC: Delegando Tareas a Jules, Claude Code y GitHub Agents

## Por qué Agentes IA en el Desarrollo

La adopción de agentes IA no se trata de reemplazar desarrolladores, sino de **multiplicar la capacidad del equipo** eliminando tareas repetitivas y acelerando los ciclos de feedback. En nuestra organización, la integración de agentes redujo el tiempo de revisión de PRs en un 65%.

## Mapa de Agentes por Fase del SDLC

### Planificación y Diseño
- **Claude Code**: Generación de ADRs (Architecture Decision Records) a partir de requisitos
- **GitHub Copilot**: Prototipado rápido de interfaces y contratos de API

### Desarrollo
- **Claude Code**: Implementación de features con contexto del codebase completo
- **Jules (Google)**: Tareas de refactoring y migración automatizada

### Revisión de Código
- **GitHub Agents**: Revisión automatizada de PRs con reglas personalizadas

\`\`\`yaml
# .github/workflows/ai-pr-review.yml
name: AI PR Review
on:
  pull_request:
    types: [opened, synchronize]

jobs:
  ai-review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: AI Code Review
        uses: github/ai-review-action@v1
        with:
          model: 'gpt-4o'
          rules: |
            - Check for security vulnerabilities
            - Verify error handling patterns
            - Ensure test coverage for new code
            - Flag breaking API changes
          severity_threshold: 'medium'
\`\`\`

## Patrones de Delegación de Tareas

### Regla de los Tres Niveles

Clasificamos las tareas por complejidad para asignarlas al agente adecuado:

| Nivel | Tipo de Tarea | Agente | Supervisión |
|-------|---------------|--------|-------------|
| L1 | Formateo, linting, docs | GitHub Actions Bot | Ninguna |
| L2 | Refactoring, tests, PRs simples | Jules / Claude Code | Revisión async |
| L3 | Arquitectura, features complejas | Claude Code + Humano | Pair programming |

### Integración con Jira

\`\`\`javascript
// Webhook handler para delegación automática
async function handleJiraTicket(ticket) {
  const complexity = await analyzeComplexity(ticket);

  if (complexity.level === 'L1' || complexity.level === 'L2') {
    await delegateToAgent({
      agent: complexity.level === 'L1' ? 'github-bot' : 'claude-code',
      ticket: ticket.key,
      branch: \\\`feature/\\\${ticket.key.toLowerCase()}\\\`,
      instructions: ticket.description,
      constraints: {
        maxFiles: 10,
        requireTests: true,
        notifyOnCompletion: ticket.assignee.slack
      }
    });
  }
}
\`\`\`

## Human-in-the-Loop: Controles Críticos

### Quality Gates con IA

No toda tarea delegada puede mergearse automáticamente. Implementamos gates:

1. **Auto-merge**: Solo para L1 (formateo, typos, dependencias menores)
2. **Review simplificado**: L2 requiere aprobación de 1 reviewer humano
3. **Review completo**: L3 sigue el flujo estándar de PR con 2 aprobaciones

### Slack Notifications para Supervisión

\`\`\`javascript
// Notificación cuando un agente completa una tarea
const notifyCompletion = async (task) => {
  await slack.chat.postMessage({
    channel: task.teamChannel,
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: \\\`*Agente \\\${task.agent}* completó *\\\${task.ticketId}*\\n\\\`
            + \\\`PR: \\\${task.prUrl}\\nArchivos modificados: \\\${task.filesChanged}\\\`
        }
      },
      {
        type: 'actions',
        elements: [
          { type: 'button', text: { type: 'plain_text', text: 'Aprobar' }, action_id: 'approve_pr' },
          { type: 'button', text: { type: 'plain_text', text: 'Revisar' }, action_id: 'review_pr' }
        ]
      }
    ]
  });
};
\`\`\`

## Métricas de Adopción

Tras 6 meses de uso:

- **65%** reducción en tiempo de revisión de PRs
- **40%** más PRs mergeados por sprint
- **90%** de tareas L1 resueltas sin intervención humana
- **Satisfacción del equipo**: 4.2/5 en encuestas internas

## Lecciones Clave

1. **Empezá por L1**: No intentes automatizar todo al inicio
2. **Feedback loops cortos**: Los agentes mejoran con retroalimentación constante
3. **Transparencia**: Cada acción del agente debe ser auditable
4. **Límites claros**: Definí qué puede y qué NO puede hacer cada agente`,
      en: `# AI Agents in the SDLC: Delegating Tasks to Jules, Claude Code & GitHub Agents

## Why AI Agents in Development

Adopting AI agents is not about replacing developers—it's about **multiplying team capacity** by eliminating repetitive tasks and accelerating feedback loops. In our organization, agent integration reduced PR review time by 65%.

## Agent Map by SDLC Phase

### Planning and Design
- **Claude Code**: Generating ADRs (Architecture Decision Records) from requirements
- **GitHub Copilot**: Rapid prototyping of interfaces and API contracts

### Development
- **Claude Code**: Feature implementation with full codebase context
- **Jules (Google)**: Automated refactoring and migration tasks

### Code Review
- **GitHub Agents**: Automated PR reviews with custom rules

\`\`\`yaml
# .github/workflows/ai-pr-review.yml
name: AI PR Review
on:
  pull_request:
    types: [opened, synchronize]

jobs:
  ai-review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: AI Code Review
        uses: github/ai-review-action@v1
        with:
          model: 'gpt-4o'
          rules: |
            - Check for security vulnerabilities
            - Verify error handling patterns
            - Ensure test coverage for new code
            - Flag breaking API changes
          severity_threshold: 'medium'
\`\`\`

## Task Delegation Patterns

### The Three-Tier Rule

We classify tasks by complexity to assign them to the right agent:

| Tier | Task Type | Agent | Oversight |
|------|-----------|-------|-----------|
| L1 | Formatting, linting, docs | GitHub Actions Bot | None |
| L2 | Refactoring, tests, simple PRs | Jules / Claude Code | Async review |
| L3 | Architecture, complex features | Claude Code + Human | Pair programming |

### Jira Integration

\`\`\`javascript
// Webhook handler for automatic delegation
async function handleJiraTicket(ticket) {
  const complexity = await analyzeComplexity(ticket);

  if (complexity.level === 'L1' || complexity.level === 'L2') {
    await delegateToAgent({
      agent: complexity.level === 'L1' ? 'github-bot' : 'claude-code',
      ticket: ticket.key,
      branch: \\\`feature/\\\${ticket.key.toLowerCase()}\\\`,
      instructions: ticket.description,
      constraints: {
        maxFiles: 10,
        requireTests: true,
        notifyOnCompletion: ticket.assignee.slack
      }
    });
  }
}
\`\`\`

## Human-in-the-Loop: Critical Controls

### Quality Gates with AI

Not every delegated task can be auto-merged. We implemented gates:

1. **Auto-merge**: Only for L1 (formatting, typos, minor dependencies)
2. **Simplified review**: L2 requires approval from 1 human reviewer
3. **Full review**: L3 follows the standard PR flow with 2 approvals

### Slack Notifications for Oversight

\`\`\`javascript
// Notification when an agent completes a task
const notifyCompletion = async (task) => {
  await slack.chat.postMessage({
    channel: task.teamChannel,
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: \\\`*Agent \\\${task.agent}* completed *\\\${task.ticketId}*\\n\\\`
            + \\\`PR: \\\${task.prUrl}\\nFiles changed: \\\${task.filesChanged}\\\`
        }
      },
      {
        type: 'actions',
        elements: [
          { type: 'button', text: { type: 'plain_text', text: 'Approve' }, action_id: 'approve_pr' },
          { type: 'button', text: { type: 'plain_text', text: 'Review' }, action_id: 'review_pr' }
        ]
      }
    ]
  });
};
\`\`\`

## Adoption Metrics

After 6 months of usage:

- **65%** reduction in PR review time
- **40%** more PRs merged per sprint
- **90%** of L1 tasks resolved without human intervention
- **Team satisfaction**: 4.2/5 in internal surveys

## Key Lessons

1. **Start with L1**: Don't try to automate everything at once
2. **Short feedback loops**: Agents improve with constant feedback
3. **Transparency**: Every agent action must be auditable
4. **Clear boundaries**: Define what each agent can and cannot do`,
      pt: `# Agentes IA no SDLC: Delegando Tarefas para Jules, Claude Code e GitHub Agents

## Por que Agentes IA no Desenvolvimento

A adoção de agentes IA não se trata de substituir desenvolvedores, mas de **multiplicar a capacidade da equipe** eliminando tarefas repetitivas e acelerando os ciclos de feedback. Na nossa organização, a integração de agentes reduziu o tempo de revisão de PRs em 65%.

## Mapa de Agentes por Fase do SDLC

### Planejamento e Design
- **Claude Code**: Geração de ADRs (Architecture Decision Records) a partir de requisitos
- **GitHub Copilot**: Prototipação rápida de interfaces e contratos de API

### Desenvolvimento
- **Claude Code**: Implementação de features com contexto completo do codebase
- **Jules (Google)**: Tarefas de refatoração e migração automatizada

### Revisão de Código
- **GitHub Agents**: Revisão automatizada de PRs com regras personalizadas

\`\`\`yaml
# .github/workflows/ai-pr-review.yml
name: AI PR Review
on:
  pull_request:
    types: [opened, synchronize]

jobs:
  ai-review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: AI Code Review
        uses: github/ai-review-action@v1
        with:
          model: 'gpt-4o'
          rules: |
            - Check for security vulnerabilities
            - Verify error handling patterns
            - Ensure test coverage for new code
            - Flag breaking API changes
          severity_threshold: 'medium'
\`\`\`

## Padrões de Delegação de Tarefas

### Regra dos Três Níveis

Classificamos as tarefas por complexidade para atribuí-las ao agente adequado:

| Nível | Tipo de Tarefa | Agente | Supervisão |
|-------|----------------|--------|------------|
| L1 | Formatação, linting, docs | GitHub Actions Bot | Nenhuma |
| L2 | Refatoração, testes, PRs simples | Jules / Claude Code | Revisão assíncrona |
| L3 | Arquitetura, features complexas | Claude Code + Humano | Pair programming |

### Integração com Jira

\`\`\`javascript
// Webhook handler para delegação automática
async function handleJiraTicket(ticket) {
  const complexity = await analyzeComplexity(ticket);

  if (complexity.level === 'L1' || complexity.level === 'L2') {
    await delegateToAgent({
      agent: complexity.level === 'L1' ? 'github-bot' : 'claude-code',
      ticket: ticket.key,
      branch: \\\`feature/\\\${ticket.key.toLowerCase()}\\\`,
      instructions: ticket.description,
      constraints: {
        maxFiles: 10,
        requireTests: true,
        notifyOnCompletion: ticket.assignee.slack
      }
    });
  }
}
\`\`\`

## Human-in-the-Loop: Controles Críticos

### Quality Gates com IA

Nem toda tarefa delegada pode ser mergeada automaticamente. Implementamos gates:

1. **Auto-merge**: Somente para L1 (formatação, typos, dependências menores)
2. **Revisão simplificada**: L2 requer aprovação de 1 revisor humano
3. **Revisão completa**: L3 segue o fluxo padrão de PR com 2 aprovações

### Notificações Slack para Supervisão

\`\`\`javascript
// Notificação quando um agente completa uma tarefa
const notifyCompletion = async (task) => {
  await slack.chat.postMessage({
    channel: task.teamChannel,
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: \\\`*Agente \\\${task.agent}* concluiu *\\\${task.ticketId}*\\n\\\`
            + \\\`PR: \\\${task.prUrl}\\nArquivos alterados: \\\${task.filesChanged}\\\`
        }
      },
      {
        type: 'actions',
        elements: [
          { type: 'button', text: { type: 'plain_text', text: 'Aprovar' }, action_id: 'approve_pr' },
          { type: 'button', text: { type: 'plain_text', text: 'Revisar' }, action_id: 'review_pr' }
        ]
      }
    ]
  });
};
\`\`\`

## Métricas de Adoção

Após 6 meses de uso:

- **65%** de redução no tempo de revisão de PRs
- **40%** mais PRs mergeados por sprint
- **90%** das tarefas L1 resolvidas sem intervenção humana
- **Satisfação da equipe**: 4.2/5 em pesquisas internas

## Lições Fundamentais

1. **Comece pelo L1**: Não tente automatizar tudo no início
2. **Loops de feedback curtos**: Os agentes melhoram com retroalimentação constante
3. **Transparência**: Cada ação do agente deve ser auditável
4. **Limites claros**: Defina o que cada agente pode e o que NÃO pode fazer`
    },
    author: "Gabriel Contreras",
    date: "2024-11-10",
    readTime: 10,
    tags: ["ai-agents", "sdlc", "automation", "claude", "github-agents", "jules"],
    category: "AI Engineering",
    featured: true,
    published: true
  },
  {
    id: 6,
    title: {
      es: "Optimización de Costos en la Nube: Logrando una Reducción del 40%",
      en: "Cloud Cost Optimization: Achieving 40% Reduction",
      pt: "Otimização de Custos na Nuvem: Alcançando Redução de 40%"
    },
    slug: "cloud-cost-optimization",
    excerpt: {
      es: "Estrategias prácticas de FinOps que aplicamos para reducir un 40% los costos cloud: right-sizing, autoscaling inteligente, instancias reservadas y cultura de cost-awareness.",
      en: "Practical FinOps strategies we applied to reduce cloud costs by 40%: right-sizing, intelligent autoscaling, reserved instances, and a cost-awareness culture.",
      pt: "Estratégias práticas de FinOps que aplicamos para reduzir 40% dos custos cloud: right-sizing, autoscaling inteligente, instâncias reservadas e cultura de cost-awareness."
    },
    content: {
      es: `# Optimización de Costos en la Nube: Logrando una Reducción del 40%

## El Problema

Nuestra factura mensual de Azure había crecido un 300% en 18 meses sin un incremento proporcional en tráfico o funcionalidades. La causa raíz era clara: **falta de governance en el consumo cloud**. No había ownership de costos, los recursos se creaban sin restricciones de tamaño y los entornos de desarrollo consumían tanto como producción.

## Pilar 1: Right-Sizing de VMs y Bases de Datos

### Análisis de Utilización

Usamos Azure Advisor y métricas de Azure Monitor para identificar recursos sobredimensionados:

\`\`\`bash
# Script para identificar VMs subutilizadas (< 20% CPU promedio en 30 días)
az monitor metrics list \\
  --resource-type "Microsoft.Compute/virtualMachines" \\
  --metric "Percentage CPU" \\
  --aggregation Average \\
  --interval P30D \\
  --query "[?average < 20]" \\
  --output table
\`\`\`

### Resultados del Right-Sizing

| Recurso | SKU Anterior | SKU Nuevo | Ahorro Mensual |
|---------|-------------|-----------|----------------|
| API Gateway VMs | D8s_v3 (8 vCPU) | D4s_v3 (4 vCPU) | $1,200 |
| SQL Databases | P4 (500 DTU) | P2 (250 DTU) | $2,800 |
| Redis Cache | C3 Premium | C2 Standard | $600 |
| AKS Node Pool | D16s_v3 | D8s_v3 | $3,400 |

## Pilar 2: Autoscaling Inteligente

### Configuración de VMSS con Métricas Personalizadas

\`\`\`json
{
  "autoscaleSettings": {
    "profiles": [
      {
        "name": "business-hours",
        "capacity": { "minimum": "3", "maximum": "12", "default": "3" },
        "rules": [
          {
            "metricTrigger": {
              "metricName": "requests/count",
              "operator": "GreaterThan",
              "threshold": 500,
              "timeAggregation": "Average",
              "timeWindow": "PT5M"
            },
            "scaleAction": {
              "direction": "Increase",
              "value": "2",
              "cooldown": "PT5M"
            }
          }
        ],
        "recurrence": {
          "schedule": {
            "timeZone": "America/Argentina/Buenos_Aires",
            "days": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
            "hours": [8], "minutes": [0]
          }
        }
      },
      {
        "name": "off-hours",
        "capacity": { "minimum": "1", "maximum": "3", "default": "1" },
        "recurrence": {
          "schedule": {
            "timeZone": "America/Argentina/Buenos_Aires",
            "days": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
            "hours": [20], "minutes": [0]
          }
        }
      }
    ]
  }
}
\`\`\`

## Pilar 3: Reserved Instances vs Spot VMs

### Estrategia Híbrida

- **Reserved Instances (1 año)**: Para cargas base predecibles (bases de datos, APIs core) — ahorro del 35%
- **Spot VMs**: Para batch processing, jobs de CI/CD y cargas tolerantes a interrupciones — ahorro del 70%
- **Pay-as-you-go**: Solo para entornos efímeros de testing

## Pilar 4: Estrategia de Tagging

### Taxonomía de Tags Obligatorios

\`\`\`bash
# Política de Azure para requerir tags obligatorios
az policy assignment create \\
  --name "require-cost-tags" \\
  --policy "require-tag-and-its-value" \\
  --params '{
    "tagName": { "value": "cost-center" },
    "tagValue": { "value": "" }
  }' \\
  --scope "/subscriptions/\${SUBSCRIPTION_ID}"
\`\`\`

Tags obligatorios implementados:
- \`cost-center\`: Centro de costos del equipo
- \`environment\`: dev / staging / production
- \`owner\`: Email del responsable
- \`project\`: Nombre del proyecto
- \`auto-shutdown\`: true/false para entornos no-productivos

## Pilar 5: Cultura FinOps

### Dashboards de Costo por Equipo

Cada equipo tiene visibilidad sobre su consumo con dashboards en Azure Cost Management, con alertas automáticas cuando superan el 80% del presupuesto mensual.

### Reunión Mensual de Costos

Implementamos una reunión mensual de 30 minutos donde cada tech lead revisa los costos de sus servicios y propone optimizaciones.

## Resultados Consolidados

| Categoría | Ahorro Mensual | % del Total |
|-----------|---------------|-------------|
| Right-sizing | $8,000 | 35% |
| Autoscaling | $4,500 | 20% |
| Reserved Instances | $6,200 | 27% |
| Spot VMs | $2,800 | 12% |
| Eliminación de recursos huérfanos | $1,500 | 6% |
| **Total** | **$23,000** | **40%** |

## Lecciones Aprendidas

1. **Medí antes de cortar**: Sin datos de utilización real, el right-sizing es adivinación
2. **Automatizá el apagado**: Los entornos dev/staging no necesitan correr 24/7
3. **Ownership distribuido**: Cada equipo debe ser responsable de sus costos
4. **Reservas con cautela**: Solo reservar cuando la carga es predecible por al menos 6 meses`,
      en: `# Cloud Cost Optimization: Achieving 40% Reduction

## The Problem

Our monthly Azure bill had grown 300% over 18 months without a proportional increase in traffic or features. The root cause was clear: **lack of cloud consumption governance**. There was no cost ownership, resources were created without size constraints, and development environments consumed as much as production.

## Pillar 1: Right-Sizing VMs and Databases

### Utilization Analysis

We used Azure Advisor and Azure Monitor metrics to identify oversized resources:

\`\`\`bash
# Script to identify underutilized VMs (< 20% average CPU over 30 days)
az monitor metrics list \\
  --resource-type "Microsoft.Compute/virtualMachines" \\
  --metric "Percentage CPU" \\
  --aggregation Average \\
  --interval P30D \\
  --query "[?average < 20]" \\
  --output table
\`\`\`

### Right-Sizing Results

| Resource | Previous SKU | New SKU | Monthly Savings |
|----------|-------------|---------|-----------------|
| API Gateway VMs | D8s_v3 (8 vCPU) | D4s_v3 (4 vCPU) | $1,200 |
| SQL Databases | P4 (500 DTU) | P2 (250 DTU) | $2,800 |
| Redis Cache | C3 Premium | C2 Standard | $600 |
| AKS Node Pool | D16s_v3 | D8s_v3 | $3,400 |

## Pillar 2: Intelligent Autoscaling

### VMSS Configuration with Custom Metrics

\`\`\`json
{
  "autoscaleSettings": {
    "profiles": [
      {
        "name": "business-hours",
        "capacity": { "minimum": "3", "maximum": "12", "default": "3" },
        "rules": [
          {
            "metricTrigger": {
              "metricName": "requests/count",
              "operator": "GreaterThan",
              "threshold": 500,
              "timeAggregation": "Average",
              "timeWindow": "PT5M"
            },
            "scaleAction": {
              "direction": "Increase",
              "value": "2",
              "cooldown": "PT5M"
            }
          }
        ],
        "recurrence": {
          "schedule": {
            "timeZone": "America/New_York",
            "days": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
            "hours": [8], "minutes": [0]
          }
        }
      },
      {
        "name": "off-hours",
        "capacity": { "minimum": "1", "maximum": "3", "default": "1" },
        "recurrence": {
          "schedule": {
            "timeZone": "America/New_York",
            "days": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
            "hours": [20], "minutes": [0]
          }
        }
      }
    ]
  }
}
\`\`\`

## Pillar 3: Reserved Instances vs Spot VMs

### Hybrid Strategy

- **Reserved Instances (1 year)**: For predictable baseline workloads (databases, core APIs) — 35% savings
- **Spot VMs**: For batch processing, CI/CD jobs, and interruption-tolerant workloads — 70% savings
- **Pay-as-you-go**: Only for ephemeral testing environments

## Pillar 4: Tagging Strategy

### Mandatory Tag Taxonomy

\`\`\`bash
# Azure Policy to require mandatory tags
az policy assignment create \\
  --name "require-cost-tags" \\
  --policy "require-tag-and-its-value" \\
  --params '{
    "tagName": { "value": "cost-center" },
    "tagValue": { "value": "" }
  }' \\
  --scope "/subscriptions/\${SUBSCRIPTION_ID}"
\`\`\`

Mandatory tags implemented:
- \`cost-center\`: Team cost center
- \`environment\`: dev / staging / production
- \`owner\`: Responsible person's email
- \`project\`: Project name
- \`auto-shutdown\`: true/false for non-production environments

## Pillar 5: FinOps Culture

### Cost Dashboards per Team

Each team has visibility into their consumption through Azure Cost Management dashboards, with automatic alerts when they exceed 80% of their monthly budget.

### Monthly Cost Review

We implemented a 30-minute monthly meeting where each tech lead reviews their service costs and proposes optimizations.

## Consolidated Results

| Category | Monthly Savings | % of Total |
|----------|----------------|------------|
| Right-sizing | $8,000 | 35% |
| Autoscaling | $4,500 | 20% |
| Reserved Instances | $6,200 | 27% |
| Spot VMs | $2,800 | 12% |
| Orphaned resource cleanup | $1,500 | 6% |
| **Total** | **$23,000** | **40%** |

## Lessons Learned

1. **Measure before you cut**: Without real utilization data, right-sizing is guesswork
2. **Automate shutdowns**: Dev/staging environments don't need to run 24/7
3. **Distributed ownership**: Each team must own their costs
4. **Reserve with caution**: Only reserve when workloads are predictable for at least 6 months`,
      pt: `# Otimização de Custos na Nuvem: Alcançando Redução de 40%

## O Problema

Nossa fatura mensal do Azure tinha crescido 300% em 18 meses sem um aumento proporcional em tráfego ou funcionalidades. A causa raiz era clara: **falta de governança no consumo cloud**. Não havia ownership de custos, os recursos eram criados sem restrições de tamanho e os ambientes de desenvolvimento consumiam tanto quanto produção.

## Pilar 1: Right-Sizing de VMs e Bancos de Dados

### Análise de Utilização

Utilizamos o Azure Advisor e métricas do Azure Monitor para identificar recursos superdimensionados:

\`\`\`bash
# Script para identificar VMs subutilizadas (< 20% CPU médio em 30 dias)
az monitor metrics list \\
  --resource-type "Microsoft.Compute/virtualMachines" \\
  --metric "Percentage CPU" \\
  --aggregation Average \\
  --interval P30D \\
  --query "[?average < 20]" \\
  --output table
\`\`\`

### Resultados do Right-Sizing

| Recurso | SKU Anterior | Novo SKU | Economia Mensal |
|---------|-------------|----------|-----------------|
| API Gateway VMs | D8s_v3 (8 vCPU) | D4s_v3 (4 vCPU) | $1.200 |
| SQL Databases | P4 (500 DTU) | P2 (250 DTU) | $2.800 |
| Redis Cache | C3 Premium | C2 Standard | $600 |
| AKS Node Pool | D16s_v3 | D8s_v3 | $3.400 |

## Pilar 2: Autoscaling Inteligente

### Configuração de VMSS com Métricas Personalizadas

\`\`\`json
{
  "autoscaleSettings": {
    "profiles": [
      {
        "name": "business-hours",
        "capacity": { "minimum": "3", "maximum": "12", "default": "3" },
        "rules": [
          {
            "metricTrigger": {
              "metricName": "requests/count",
              "operator": "GreaterThan",
              "threshold": 500,
              "timeAggregation": "Average",
              "timeWindow": "PT5M"
            },
            "scaleAction": {
              "direction": "Increase",
              "value": "2",
              "cooldown": "PT5M"
            }
          }
        ],
        "recurrence": {
          "schedule": {
            "timeZone": "America/Sao_Paulo",
            "days": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
            "hours": [8], "minutes": [0]
          }
        }
      },
      {
        "name": "off-hours",
        "capacity": { "minimum": "1", "maximum": "3", "default": "1" },
        "recurrence": {
          "schedule": {
            "timeZone": "America/Sao_Paulo",
            "days": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
            "hours": [20], "minutes": [0]
          }
        }
      }
    ]
  }
}
\`\`\`

## Pilar 3: Instâncias Reservadas vs Spot VMs

### Estratégia Híbrida

- **Instâncias Reservadas (1 ano)**: Para cargas base previsíveis (bancos de dados, APIs core) — economia de 35%
- **Spot VMs**: Para processamento em lote, jobs de CI/CD e cargas tolerantes a interrupções — economia de 70%
- **Pay-as-you-go**: Somente para ambientes efêmeros de teste

## Pilar 4: Estratégia de Tagging

### Taxonomia de Tags Obrigatórios

\`\`\`bash
# Azure Policy para exigir tags obrigatórios
az policy assignment create \\
  --name "require-cost-tags" \\
  --policy "require-tag-and-its-value" \\
  --params '{
    "tagName": { "value": "cost-center" },
    "tagValue": { "value": "" }
  }' \\
  --scope "/subscriptions/\${SUBSCRIPTION_ID}"
\`\`\`

Tags obrigatórios implementados:
- \`cost-center\`: Centro de custos da equipe
- \`environment\`: dev / staging / production
- \`owner\`: Email do responsável
- \`project\`: Nome do projeto
- \`auto-shutdown\`: true/false para ambientes não-produtivos

## Pilar 5: Cultura FinOps

### Dashboards de Custo por Equipe

Cada equipe tem visibilidade sobre seu consumo através de dashboards no Azure Cost Management, com alertas automáticos quando ultrapassam 80% do orçamento mensal.

### Reunião Mensal de Custos

Implementamos uma reunião mensal de 30 minutos onde cada tech lead revisa os custos dos seus serviços e propõe otimizações.

## Resultados Consolidados

| Categoria | Economia Mensal | % do Total |
|-----------|----------------|------------|
| Right-sizing | $8.000 | 35% |
| Autoscaling | $4.500 | 20% |
| Instâncias Reservadas | $6.200 | 27% |
| Spot VMs | $2.800 | 12% |
| Limpeza de recursos órfãos | $1.500 | 6% |
| **Total** | **$23.000** | **40%** |

## Lições Aprendidas

1. **Meça antes de cortar**: Sem dados reais de utilização, right-sizing é adivinhação
2. **Automatize o desligamento**: Ambientes dev/staging não precisam rodar 24/7
3. **Ownership distribuído**: Cada equipe deve ser responsável pelos seus custos
4. **Reserve com cautela**: Só reserve quando a carga é previsível por pelo menos 6 meses`
    },
    author: "Gabriel Contreras",
    date: "2024-04-05",
    readTime: 11,
    tags: ["cloud", "azure", "cost-optimization", "finops", "autoscaling"],
    category: "Cloud",
    featured: false,
    published: true
  },
  {
    id: 7,
    title: {
      es: "Observabilidad y SRE: De Monitoreo Reactivo a Proactivo",
      en: "Observability & SRE: From Reactive to Proactive Monitoring",
      pt: "Observabilidade e SRE: De Monitoramento Reativo a Proativo"
    },
    slug: "observability-sre-practices",
    excerpt: {
      es: "Cómo implementamos prácticas SRE que redujeron los incidentes en un 80%: PagerDuty, ELK Stack, Azure Monitor, Apdex scoring y gestión de alert fatigue.",
      en: "How we implemented SRE practices that reduced incidents by 80%: PagerDuty, ELK Stack, Azure Monitor, Apdex scoring, and alert fatigue management.",
      pt: "Como implementamos práticas SRE que reduziram os incidentes em 80%: PagerDuty, ELK Stack, Azure Monitor, Apdex scoring e gestão de alert fatigue."
    },
    content: {
      es: `# Observabilidad y SRE: De Monitoreo Reactivo a Proactivo

## Estado Inicial: El Caos Reactivo

Cuando asumí la responsabilidad de observabilidad, la situación era crítica:

- **200+ alertas diarias** sin priorización — el equipo ignoraba la mayoría
- **MTTD (Mean Time to Detect)**: 45 minutos
- **MTTR (Mean Time to Recover)**: 3.5 horas
- Sin correlación entre logs, métricas y traces
- Cada equipo usaba herramientas distintas para monitoreo

## Arquitectura de Observabilidad

### Los Tres Pilares

Implementamos una arquitectura basada en los tres pilares de observabilidad:

1. **Métricas**: Azure Monitor + Prometheus para métricas de infraestructura y aplicación
2. **Logs**: ELK Stack (Elasticsearch, Logstash, Kibana) centralizado
3. **Traces**: Application Insights con correlación distribuida

### Configuración del ELK Stack

\`\`\`yaml
# docker-compose.yml para ELK Stack
version: '3.8'
services:
  elasticsearch:
    image: docker.elastic.co/elasticsearch/elasticsearch:8.11.0
    environment:
      - discovery.type=single-node
      - xpack.security.enabled=true
      - "ES_JAVA_OPTS=-Xms4g -Xmx4g"
    volumes:
      - esdata:/usr/share/elasticsearch/data
    ports:
      - "9200:9200"

  logstash:
    image: docker.elastic.co/logstash/logstash:8.11.0
    volumes:
      - ./logstash/pipeline:/usr/share/logstash/pipeline
    depends_on:
      - elasticsearch

  kibana:
    image: docker.elastic.co/kibana/kibana:8.11.0
    environment:
      ELASTICSEARCH_HOSTS: '["http://elasticsearch:9200"]'
    ports:
      - "5601:5601"
\`\`\`

### Pipeline de Logstash para Normalización

\`\`\`ruby
# logstash/pipeline/main.conf
input {
  beats { port => 5044 }
  tcp { port => 5000 codec => json }
}

filter {
  if [fields][service] {
    mutate { add_field => { "service_name" => "%{[fields][service]}" } }
  }

  if [message] =~ /^\\{/ {
    json { source => "message" target => "parsed" }
  }

  # Enriquecimiento con datos de negocio
  if [parsed][userId] {
    elasticsearch {
      hosts => ["elasticsearch:9200"]
      index => "users-metadata"
      query => "userId:%{[parsed][userId]}"
      fields => { "team" => "user_team" }
    }
  }
}

output {
  elasticsearch {
    hosts => ["elasticsearch:9200"]
    index => "logs-%{service_name}-%{+YYYY.MM.dd}"
  }
}
\`\`\`

## Integración con PagerDuty

### Política de Escalamiento

\`\`\`json
{
  "escalation_policy": {
    "name": "Production Services",
    "escalation_rules": [
      {
        "escalation_delay_in_minutes": 5,
        "targets": [{ "type": "schedule_reference", "id": "on-call-primary" }]
      },
      {
        "escalation_delay_in_minutes": 15,
        "targets": [{ "type": "schedule_reference", "id": "on-call-secondary" }]
      },
      {
        "escalation_delay_in_minutes": 30,
        "targets": [{ "type": "user_reference", "id": "engineering-manager" }]
      }
    ]
  }
}
\`\`\`

### Clasificación de Severidad

| Severidad | Criterio | Respuesta | Ejemplo |
|-----------|----------|-----------|---------|
| P1 - Critical | Servicio caído, impacto total | Respuesta inmediata, war room | API principal no responde |
| P2 - High | Degradación significativa | 15 min para acknowledge | Latencia > 5s en checkout |
| P3 - Medium | Degradación menor | 1 hora para acknowledge | Un microservicio con errores intermitentes |
| P4 - Low | Sin impacto en usuarios | Siguiente día hábil | Disco al 75% de capacidad |

## Apdex Scoring

### Implementación del Apdex

El **Application Performance Index** nos permitió medir la satisfacción del usuario de forma objetiva:

\`\`\`javascript
// Cálculo de Apdex Score
function calculateApdex(responseTimes, threshold = 500) {
  const satisfied = responseTimes.filter(t => t <= threshold).length;
  const tolerating = responseTimes.filter(t => t > threshold && t <= threshold * 4).length;
  const total = responseTimes.length;

  return (satisfied + (tolerating / 2)) / total;
}

// Ejemplo: Apdex con threshold de 500ms
// Satisfied: <= 500ms | Tolerating: 500ms-2000ms | Frustrated: > 2000ms
\`\`\`

### Dashboards en Azure Monitor

Configuramos dashboards con KQL para monitoreo en tiempo real:

\`\`\`kusto
// KQL - Apdex por servicio en la última hora
requests
| where timestamp > ago(1h)
| summarize
    satisfied = countif(duration <= 500),
    tolerating = countif(duration > 500 and duration <= 2000),
    total = count()
  by cloud_RoleName
| extend apdex = round((satisfied + (tolerating / 2.0)) / total, 2)
| project cloud_RoleName, apdex, total
| order by apdex asc
\`\`\`

## Gestión de Alert Fatigue

### De 200 a 25 Alertas Diarias

El proceso de reducción de alertas:

1. **Eliminación de duplicados**: Consolidamos alertas del mismo servicio en ventanas de 5 minutos
2. **Alertas basadas en síntomas**: En vez de alertar por CPU > 80%, alertamos por latencia > SLO
3. **Supresión inteligente**: Durante despliegues programados, suprimimos alertas por 15 minutos
4. **Agrupación por servicio**: Un incidente por servicio, no una alerta por instancia

## Resultados Después de 12 Meses

| Métrica | Antes | Después | Mejora |
|---------|-------|---------|--------|
| Alertas diarias | 200+ | 25 | -87% |
| MTTD | 45 min | 5 min | -89% |
| MTTR | 3.5 hrs | 35 min | -83% |
| Incidentes P1/mes | 8 | 1.5 | -81% |
| Apdex promedio | 0.72 | 0.94 | +30% |
| Satisfacción del equipo on-call | 2.1/5 | 4.3/5 | +105% |`,
      en: `# Observability & SRE: From Reactive to Proactive Monitoring

## Initial State: Reactive Chaos

When I took over observability responsibilities, the situation was critical:

- **200+ daily alerts** with no prioritization — the team ignored most of them
- **MTTD (Mean Time to Detect)**: 45 minutes
- **MTTR (Mean Time to Recover)**: 3.5 hours
- No correlation between logs, metrics, and traces
- Each team used different monitoring tools

## Observability Architecture

### The Three Pillars

We implemented an architecture based on the three pillars of observability:

1. **Metrics**: Azure Monitor + Prometheus for infrastructure and application metrics
2. **Logs**: Centralized ELK Stack (Elasticsearch, Logstash, Kibana)
3. **Traces**: Application Insights with distributed correlation

### ELK Stack Configuration

\`\`\`yaml
# docker-compose.yml for ELK Stack
version: '3.8'
services:
  elasticsearch:
    image: docker.elastic.co/elasticsearch/elasticsearch:8.11.0
    environment:
      - discovery.type=single-node
      - xpack.security.enabled=true
      - "ES_JAVA_OPTS=-Xms4g -Xmx4g"
    volumes:
      - esdata:/usr/share/elasticsearch/data
    ports:
      - "9200:9200"

  logstash:
    image: docker.elastic.co/logstash/logstash:8.11.0
    volumes:
      - ./logstash/pipeline:/usr/share/logstash/pipeline
    depends_on:
      - elasticsearch

  kibana:
    image: docker.elastic.co/kibana/kibana:8.11.0
    environment:
      ELASTICSEARCH_HOSTS: '["http://elasticsearch:9200"]'
    ports:
      - "5601:5601"
\`\`\`

### Logstash Pipeline for Normalization

\`\`\`ruby
# logstash/pipeline/main.conf
input {
  beats { port => 5044 }
  tcp { port => 5000 codec => json }
}

filter {
  if [fields][service] {
    mutate { add_field => { "service_name" => "%{[fields][service]}" } }
  }

  if [message] =~ /^\\{/ {
    json { source => "message" target => "parsed" }
  }

  # Enrichment with business data
  if [parsed][userId] {
    elasticsearch {
      hosts => ["elasticsearch:9200"]
      index => "users-metadata"
      query => "userId:%{[parsed][userId]}"
      fields => { "team" => "user_team" }
    }
  }
}

output {
  elasticsearch {
    hosts => ["elasticsearch:9200"]
    index => "logs-%{service_name}-%{+YYYY.MM.dd}"
  }
}
\`\`\`

## PagerDuty Integration

### Escalation Policy

\`\`\`json
{
  "escalation_policy": {
    "name": "Production Services",
    "escalation_rules": [
      {
        "escalation_delay_in_minutes": 5,
        "targets": [{ "type": "schedule_reference", "id": "on-call-primary" }]
      },
      {
        "escalation_delay_in_minutes": 15,
        "targets": [{ "type": "schedule_reference", "id": "on-call-secondary" }]
      },
      {
        "escalation_delay_in_minutes": 30,
        "targets": [{ "type": "user_reference", "id": "engineering-manager" }]
      }
    ]
  }
}
\`\`\`

### Severity Classification

| Severity | Criteria | Response | Example |
|----------|----------|----------|---------|
| P1 - Critical | Service down, total impact | Immediate response, war room | Main API unresponsive |
| P2 - High | Significant degradation | 15 min to acknowledge | Latency > 5s on checkout |
| P3 - Medium | Minor degradation | 1 hour to acknowledge | Microservice with intermittent errors |
| P4 - Low | No user impact | Next business day | Disk at 75% capacity |

## Apdex Scoring

### Apdex Implementation

The **Application Performance Index** allowed us to objectively measure user satisfaction:

\`\`\`javascript
// Apdex Score Calculation
function calculateApdex(responseTimes, threshold = 500) {
  const satisfied = responseTimes.filter(t => t <= threshold).length;
  const tolerating = responseTimes.filter(t => t > threshold && t <= threshold * 4).length;
  const total = responseTimes.length;

  return (satisfied + (tolerating / 2)) / total;
}

// Example: Apdex with 500ms threshold
// Satisfied: <= 500ms | Tolerating: 500ms-2000ms | Frustrated: > 2000ms
\`\`\`

### Azure Monitor Dashboards

We configured dashboards with KQL for real-time monitoring:

\`\`\`kusto
// KQL - Apdex per service in the last hour
requests
| where timestamp > ago(1h)
| summarize
    satisfied = countif(duration <= 500),
    tolerating = countif(duration > 500 and duration <= 2000),
    total = count()
  by cloud_RoleName
| extend apdex = round((satisfied + (tolerating / 2.0)) / total, 2)
| project cloud_RoleName, apdex, total
| order by apdex asc
\`\`\`

## Managing Alert Fatigue

### From 200 to 25 Daily Alerts

The alert reduction process:

1. **Duplicate elimination**: Consolidated alerts from the same service within 5-minute windows
2. **Symptom-based alerts**: Instead of alerting on CPU > 80%, alert on latency > SLO
3. **Smart suppression**: During scheduled deployments, suppress alerts for 15 minutes
4. **Service grouping**: One incident per service, not one alert per instance

## Results After 12 Months

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Daily alerts | 200+ | 25 | -87% |
| MTTD | 45 min | 5 min | -89% |
| MTTR | 3.5 hrs | 35 min | -83% |
| P1 incidents/month | 8 | 1.5 | -81% |
| Average Apdex | 0.72 | 0.94 | +30% |
| On-call team satisfaction | 2.1/5 | 4.3/5 | +105% |`,
      pt: `# Observabilidade e SRE: De Monitoramento Reativo a Proativo

## Estado Inicial: O Caos Reativo

Quando assumi a responsabilidade pela observabilidade, a situação era crítica:

- **200+ alertas diários** sem priorização — a equipe ignorava a maioria
- **MTTD (Mean Time to Detect)**: 45 minutos
- **MTTR (Mean Time to Recover)**: 3,5 horas
- Sem correlação entre logs, métricas e traces
- Cada equipe usava ferramentas diferentes de monitoramento

## Arquitetura de Observabilidade

### Os Três Pilares

Implementamos uma arquitetura baseada nos três pilares de observabilidade:

1. **Métricas**: Azure Monitor + Prometheus para métricas de infraestrutura e aplicação
2. **Logs**: ELK Stack (Elasticsearch, Logstash, Kibana) centralizado
3. **Traces**: Application Insights com correlação distribuída

### Configuração do ELK Stack

\`\`\`yaml
# docker-compose.yml para ELK Stack
version: '3.8'
services:
  elasticsearch:
    image: docker.elastic.co/elasticsearch/elasticsearch:8.11.0
    environment:
      - discovery.type=single-node
      - xpack.security.enabled=true
      - "ES_JAVA_OPTS=-Xms4g -Xmx4g"
    volumes:
      - esdata:/usr/share/elasticsearch/data
    ports:
      - "9200:9200"

  logstash:
    image: docker.elastic.co/logstash/logstash:8.11.0
    volumes:
      - ./logstash/pipeline:/usr/share/logstash/pipeline
    depends_on:
      - elasticsearch

  kibana:
    image: docker.elastic.co/kibana/kibana:8.11.0
    environment:
      ELASTICSEARCH_HOSTS: '["http://elasticsearch:9200"]'
    ports:
      - "5601:5601"
\`\`\`

### Pipeline do Logstash para Normalização

\`\`\`ruby
# logstash/pipeline/main.conf
input {
  beats { port => 5044 }
  tcp { port => 5000 codec => json }
}

filter {
  if [fields][service] {
    mutate { add_field => { "service_name" => "%{[fields][service]}" } }
  }

  if [message] =~ /^\\{/ {
    json { source => "message" target => "parsed" }
  }

  # Enriquecimento com dados de negócio
  if [parsed][userId] {
    elasticsearch {
      hosts => ["elasticsearch:9200"]
      index => "users-metadata"
      query => "userId:%{[parsed][userId]}"
      fields => { "team" => "user_team" }
    }
  }
}

output {
  elasticsearch {
    hosts => ["elasticsearch:9200"]
    index => "logs-%{service_name}-%{+YYYY.MM.dd}"
  }
}
\`\`\`

## Integração com PagerDuty

### Política de Escalação

\`\`\`json
{
  "escalation_policy": {
    "name": "Production Services",
    "escalation_rules": [
      {
        "escalation_delay_in_minutes": 5,
        "targets": [{ "type": "schedule_reference", "id": "on-call-primary" }]
      },
      {
        "escalation_delay_in_minutes": 15,
        "targets": [{ "type": "schedule_reference", "id": "on-call-secondary" }]
      },
      {
        "escalation_delay_in_minutes": 30,
        "targets": [{ "type": "user_reference", "id": "engineering-manager" }]
      }
    ]
  }
}
\`\`\`

### Classificação de Severidade

| Severidade | Critério | Resposta | Exemplo |
|------------|----------|----------|---------|
| P1 - Crítico | Serviço fora, impacto total | Resposta imediata, war room | API principal não responde |
| P2 - Alto | Degradação significativa | 15 min para acknowledge | Latência > 5s no checkout |
| P3 - Médio | Degradação menor | 1 hora para acknowledge | Microsserviço com erros intermitentes |
| P4 - Baixo | Sem impacto nos usuários | Próximo dia útil | Disco em 75% da capacidade |

## Apdex Scoring

### Implementação do Apdex

O **Application Performance Index** nos permitiu medir a satisfação do usuário de forma objetiva:

\`\`\`javascript
// Cálculo do Apdex Score
function calculateApdex(responseTimes, threshold = 500) {
  const satisfied = responseTimes.filter(t => t <= threshold).length;
  const tolerating = responseTimes.filter(t => t > threshold && t <= threshold * 4).length;
  const total = responseTimes.length;

  return (satisfied + (tolerating / 2)) / total;
}

// Exemplo: Apdex com threshold de 500ms
// Satisfied: <= 500ms | Tolerating: 500ms-2000ms | Frustrated: > 2000ms
\`\`\`

### Dashboards no Azure Monitor

Configuramos dashboards com KQL para monitoramento em tempo real:

\`\`\`kusto
// KQL - Apdex por serviço na última hora
requests
| where timestamp > ago(1h)
| summarize
    satisfied = countif(duration <= 500),
    tolerating = countif(duration > 500 and duration <= 2000),
    total = count()
  by cloud_RoleName
| extend apdex = round((satisfied + (tolerating / 2.0)) / total, 2)
| project cloud_RoleName, apdex, total
| order by apdex asc
\`\`\`

## Gestão de Alert Fatigue

### De 200 para 25 Alertas Diários

O processo de redução de alertas:

1. **Eliminação de duplicatas**: Consolidamos alertas do mesmo serviço em janelas de 5 minutos
2. **Alertas baseados em sintomas**: Em vez de alertar por CPU > 80%, alertamos por latência > SLO
3. **Supressão inteligente**: Durante deploys programados, suprimimos alertas por 15 minutos
4. **Agrupamento por serviço**: Um incidente por serviço, não um alerta por instância

## Resultados Após 12 Meses

| Métrica | Antes | Depois | Melhoria |
|---------|-------|--------|----------|
| Alertas diários | 200+ | 25 | -87% |
| MTTD | 45 min | 5 min | -89% |
| MTTR | 3,5 hrs | 35 min | -83% |
| Incidentes P1/mês | 8 | 1,5 | -81% |
| Apdex médio | 0,72 | 0,94 | +30% |
| Satisfação da equipe on-call | 2,1/5 | 4,3/5 | +105% |`
    },
    author: "Gabriel Contreras",
    date: "2024-09-15",
    readTime: 13,
    tags: ["sre", "observability", "pagerduty", "elk", "azure-monitor", "apdex"],
    category: "SRE",
    featured: false,
    published: true
  },
  {
    id: 8,
    title: {
      es: "Prompt Engineering y Optimización de Tokens para Aplicaciones LLM",
      en: "Prompt Engineering & Token Optimization for LLM Applications",
      pt: "Prompt Engineering e Otimização de Tokens para Aplicações LLM"
    },
    slug: "prompt-engineering-token-optimization",
    excerpt: {
      es: "Técnicas avanzadas para reducir costos en aplicaciones LLM: optimización JSONB, compresión de contexto, patrones few-shot y selección de modelos con principios SOLID.",
      en: "Advanced techniques to reduce LLM application costs: JSONB optimization, context compression, few-shot patterns, and model selection using SOLID principles.",
      pt: "Técnicas avançadas para reduzir custos em aplicações LLM: otimização JSONB, compressão de contexto, padrões few-shot e seleção de modelos com princípios SOLID."
    },
    content: {
      es: `# Prompt Engineering y Optimización de Tokens para Aplicaciones LLM

## El Costo Real de los LLMs en Producción

Cuando escalamos nuestra aplicación de IA a 50.000 requests diarios, la factura de API pasó de $500 a $8.000 mensuales. El problema no era el modelo en sí, sino **cómo lo estábamos usando**: prompts redundantes, payloads excesivos y falta de estrategia en la selección de modelos.

## Optimización JSONB para Reducir Payload

### El Problema: Requests Inflados

Muchos developers envían datos en formato expandido sin considerar que cada token tiene costo:

\`\`\`javascript
// ANTES: Payload inflado (aprox. 450 tokens)
const badRequest = {
  user_information: {
    first_name: "Gabriel",
    last_name: "Contreras",
    email_address: "gabriel@example.com",
    date_of_birth: "1990-01-15",
    account_creation_date: "2023-06-01",
    subscription_type: "premium",
    preferred_language: "es"
  },
  request_details: {
    question: "¿Cómo configuro un pipeline?",
    category: "technical_support",
    priority_level: "medium"
  }
};

// DESPUÉS: Payload JSONB optimizado (aprox. 120 tokens)
const optimizedRequest = {
  u: { n: "Gabriel C.", t: "premium", l: "es" },
  q: "¿Cómo configuro un pipeline?",
  c: "tech",
  p: 2
};
\`\`\`

### Middleware de Compresión

\`\`\`javascript
// Middleware para comprimir requests antes de enviar al LLM
class TokenOptimizer {
  static fieldMap = {
    user_information: 'u', first_name: 'n', subscription_type: 't',
    preferred_language: 'l', question: 'q', category: 'c', priority_level: 'p'
  };

  static compress(payload) {
    return Object.entries(payload).reduce((acc, [key, value]) => {
      const shortKey = this.fieldMap[key] || key;
      acc[shortKey] = typeof value === 'object' && !Array.isArray(value)
        ? this.compress(value)
        : value;
      return acc;
    }, {});
  }

  static estimateTokens(text) {
    // Aproximación: 1 token ≈ 4 caracteres en inglés, 3 en español
    return Math.ceil(JSON.stringify(text).length / 3.5);
  }
}
\`\`\`

## Compresión de Contexto

### Técnicas de Reducción

1. **Summarization progresiva**: Resumir conversaciones largas manteniendo los puntos clave
2. **Sliding window**: Mantener solo los últimos N mensajes relevantes
3. **Embedding-based retrieval**: Traer solo el contexto relevante via RAG

\`\`\`javascript
// Sistema de contexto con sliding window + summarization
class ContextManager {
  constructor(maxTokens = 4000) {
    this.maxTokens = maxTokens;
    this.messages = [];
    this.summary = '';
  }

  async addMessage(message) {
    this.messages.push(message);
    const totalTokens = this.estimateTokens();

    if (totalTokens > this.maxTokens) {
      // Resumir los mensajes más antiguos
      const oldMessages = this.messages.splice(0, Math.floor(this.messages.length / 2));
      this.summary = await this.summarize(this.summary, oldMessages);
    }
  }

  buildContext() {
    return [
      ...(this.summary ? [{ role: 'system', content: \\\`Resumen previo: \\\${this.summary}\\\` }] : []),
      ...this.messages
    ];
  }
}
\`\`\`

## Patrones Few-Shot Eficientes

### Estructura Optimizada

En vez de incluir 5 ejemplos completos, usamos ejemplos mínimos pero representativos:

\`\`\`javascript
// Few-shot optimizado: ejemplos compactos
const systemPrompt = \\\`Clasifica tickets de soporte.
Ejemplos:
IN: "no puedo loguearme" -> OUT: {"cat":"auth","pri":1,"team":"identity"}
IN: "el reporte tarda mucho" -> OUT: {"cat":"perf","pri":2,"team":"backend"}
IN: "quiero cambiar mi plan" -> OUT: {"cat":"billing","pri":3,"team":"sales"}

Responde SOLO con el JSON.\\\`;
\`\`\`

## Selección de Modelos con Principios SOLID

### Single Responsibility por Modelo

Aplicamos el principio de **responsabilidad única**: cada modelo resuelve un tipo específico de tarea.

\`\`\`javascript
// Router de modelos basado en complejidad
class ModelRouter {
  static routes = {
    classification: { model: 'gpt-4o-mini', maxTokens: 100 },    // Simple: $0.15/1M tokens
    extraction: { model: 'gpt-4o-mini', maxTokens: 500 },         // Simple: $0.15/1M tokens
    generation: { model: 'gpt-4o', maxTokens: 2000 },             // Complejo: $2.50/1M tokens
    reasoning: { model: 'claude-3-5-sonnet', maxTokens: 4000 },   // Avanzado: $3.00/1M tokens
    code_review: { model: 'claude-3-5-sonnet', maxTokens: 3000 }  // Avanzado: $3.00/1M tokens
  };

  static selectModel(taskType, complexity) {
    const route = this.routes[taskType];

    // Override para tareas de alta complejidad
    if (complexity === 'high' && route.model.includes('mini')) {
      return { ...route, model: 'gpt-4o', maxTokens: route.maxTokens * 3 };
    }

    return route;
  }

  static async execute(taskType, prompt, complexity = 'normal') {
    const { model, maxTokens } = this.selectModel(taskType, complexity);

    return await llmClient.complete({
      model,
      messages: [{ role: 'user', content: prompt }],
      max_tokens: maxTokens,
      temperature: taskType === 'classification' ? 0 : 0.7
    });
  }
}
\`\`\`

### Resultados del Model Routing

| Tarea | Modelo Anterior | Modelo Actual | Ahorro |
|-------|----------------|---------------|--------|
| Clasificación de tickets | GPT-4 | GPT-4o-mini | 94% |
| Extracción de datos | GPT-4 | GPT-4o-mini | 94% |
| Generación de reportes | GPT-4 | GPT-4o | 40% |
| Revisión de código | GPT-4 | Claude 3.5 Sonnet | Mejor calidad, mismo costo |

## Tradeoffs Costo-Rendimiento

### Framework de Decisión

\`\`\`
Latencia < 200ms + Tarea simple  → GPT-4o-mini (streaming)
Latencia < 2s + Tarea compleja   → GPT-4o
Calidad máxima + Sin urgencia     → Claude 3.5 Sonnet (batch)
Alto volumen + Predecible         → Fine-tuned model
\`\`\`

## Resultados Consolidados

Tras implementar todas las optimizaciones:

- **Reducción de tokens**: 65% menos tokens por request promedio
- **Costo mensual**: De $8.000 a $2.400 (-70%)
- **Latencia promedio**: De 3.2s a 1.1s (-66%)
- **Calidad de respuestas**: Mantenida o mejorada (medida por evaluación humana)

## Lecciones Clave

1. **No uses GPT-4 para todo**: El 70% de las tareas se resuelven con modelos lightweight
2. **Cada token cuenta**: La optimización de payload tiene ROI inmediato
3. **Mide antes de optimizar**: Instrumentá tus llamadas a LLM como cualquier otro servicio
4. **El caching es tu amigo**: Respuestas idénticas para inputs idénticos deben cachearse`,
      en: `# Prompt Engineering & Token Optimization for LLM Applications

## The Real Cost of LLMs in Production

When we scaled our AI application to 50,000 daily requests, the API bill went from $500 to $8,000 monthly. The problem wasn't the model itself, but **how we were using it**: redundant prompts, excessive payloads, and no strategy for model selection.

## JSONB Optimization to Reduce Payload

### The Problem: Bloated Requests

Many developers send data in expanded format without considering that every token has a cost:

\`\`\`javascript
// BEFORE: Bloated payload (approx. 450 tokens)
const badRequest = {
  user_information: {
    first_name: "Gabriel",
    last_name: "Contreras",
    email_address: "gabriel@example.com",
    date_of_birth: "1990-01-15",
    account_creation_date: "2023-06-01",
    subscription_type: "premium",
    preferred_language: "en"
  },
  request_details: {
    question: "How do I configure a pipeline?",
    category: "technical_support",
    priority_level: "medium"
  }
};

// AFTER: Optimized JSONB payload (approx. 120 tokens)
const optimizedRequest = {
  u: { n: "Gabriel C.", t: "premium", l: "en" },
  q: "How do I configure a pipeline?",
  c: "tech",
  p: 2
};
\`\`\`

### Compression Middleware

\`\`\`javascript
// Middleware to compress requests before sending to the LLM
class TokenOptimizer {
  static fieldMap = {
    user_information: 'u', first_name: 'n', subscription_type: 't',
    preferred_language: 'l', question: 'q', category: 'c', priority_level: 'p'
  };

  static compress(payload) {
    return Object.entries(payload).reduce((acc, [key, value]) => {
      const shortKey = this.fieldMap[key] || key;
      acc[shortKey] = typeof value === 'object' && !Array.isArray(value)
        ? this.compress(value)
        : value;
      return acc;
    }, {});
  }

  static estimateTokens(text) {
    // Approximation: 1 token ~ 4 chars in English, 3 in Spanish
    return Math.ceil(JSON.stringify(text).length / 3.5);
  }
}
\`\`\`

## Context Compression

### Reduction Techniques

1. **Progressive summarization**: Summarize long conversations while keeping key points
2. **Sliding window**: Keep only the last N relevant messages
3. **Embedding-based retrieval**: Pull only relevant context via RAG

\`\`\`javascript
// Context system with sliding window + summarization
class ContextManager {
  constructor(maxTokens = 4000) {
    this.maxTokens = maxTokens;
    this.messages = [];
    this.summary = '';
  }

  async addMessage(message) {
    this.messages.push(message);
    const totalTokens = this.estimateTokens();

    if (totalTokens > this.maxTokens) {
      // Summarize older messages
      const oldMessages = this.messages.splice(0, Math.floor(this.messages.length / 2));
      this.summary = await this.summarize(this.summary, oldMessages);
    }
  }

  buildContext() {
    return [
      ...(this.summary ? [{ role: 'system', content: \\\`Previous summary: \\\${this.summary}\\\` }] : []),
      ...this.messages
    ];
  }
}
\`\`\`

## Efficient Few-Shot Patterns

### Optimized Structure

Instead of including 5 full examples, we use minimal but representative ones:

\`\`\`javascript
// Optimized few-shot: compact examples
const systemPrompt = \\\`Classify support tickets.
Examples:
IN: "can't log in" -> OUT: {"cat":"auth","pri":1,"team":"identity"}
IN: "report is too slow" -> OUT: {"cat":"perf","pri":2,"team":"backend"}
IN: "want to change my plan" -> OUT: {"cat":"billing","pri":3,"team":"sales"}

Respond ONLY with JSON.\\\`;
\`\`\`

## Model Selection with SOLID Principles

### Single Responsibility per Model

We apply the **single responsibility principle**: each model solves a specific type of task.

\`\`\`javascript
// Model router based on complexity
class ModelRouter {
  static routes = {
    classification: { model: 'gpt-4o-mini', maxTokens: 100 },    // Simple: $0.15/1M tokens
    extraction: { model: 'gpt-4o-mini', maxTokens: 500 },         // Simple: $0.15/1M tokens
    generation: { model: 'gpt-4o', maxTokens: 2000 },             // Complex: $2.50/1M tokens
    reasoning: { model: 'claude-3-5-sonnet', maxTokens: 4000 },   // Advanced: $3.00/1M tokens
    code_review: { model: 'claude-3-5-sonnet', maxTokens: 3000 }  // Advanced: $3.00/1M tokens
  };

  static selectModel(taskType, complexity) {
    const route = this.routes[taskType];

    // Override for high-complexity tasks
    if (complexity === 'high' && route.model.includes('mini')) {
      return { ...route, model: 'gpt-4o', maxTokens: route.maxTokens * 3 };
    }

    return route;
  }

  static async execute(taskType, prompt, complexity = 'normal') {
    const { model, maxTokens } = this.selectModel(taskType, complexity);

    return await llmClient.complete({
      model,
      messages: [{ role: 'user', content: prompt }],
      max_tokens: maxTokens,
      temperature: taskType === 'classification' ? 0 : 0.7
    });
  }
}
\`\`\`

### Model Routing Results

| Task | Previous Model | Current Model | Savings |
|------|---------------|---------------|---------|
| Ticket classification | GPT-4 | GPT-4o-mini | 94% |
| Data extraction | GPT-4 | GPT-4o-mini | 94% |
| Report generation | GPT-4 | GPT-4o | 40% |
| Code review | GPT-4 | Claude 3.5 Sonnet | Better quality, same cost |

## Cost-Performance Tradeoffs

### Decision Framework

\`\`\`
Latency < 200ms + Simple task  → GPT-4o-mini (streaming)
Latency < 2s + Complex task    → GPT-4o
Max quality + No urgency       → Claude 3.5 Sonnet (batch)
High volume + Predictable      → Fine-tuned model
\`\`\`

## Consolidated Results

After implementing all optimizations:

- **Token reduction**: 65% fewer tokens per average request
- **Monthly cost**: From $8,000 to $2,400 (-70%)
- **Average latency**: From 3.2s to 1.1s (-66%)
- **Response quality**: Maintained or improved (measured by human evaluation)

## Key Lessons

1. **Don't use GPT-4 for everything**: 70% of tasks can be handled by lightweight models
2. **Every token counts**: Payload optimization has immediate ROI
3. **Measure before optimizing**: Instrument your LLM calls like any other service
4. **Caching is your friend**: Identical responses for identical inputs should be cached`,
      pt: `# Prompt Engineering e Otimização de Tokens para Aplicações LLM

## O Custo Real dos LLMs em Produção

Quando escalamos nossa aplicação de IA para 50.000 requests diários, a fatura da API passou de $500 para $8.000 mensais. O problema não era o modelo em si, mas **como estávamos usando**: prompts redundantes, payloads excessivos e falta de estratégia na seleção de modelos.

## Otimização JSONB para Reduzir Payload

### O Problema: Requests Inflados

Muitos desenvolvedores enviam dados em formato expandido sem considerar que cada token tem custo:

\`\`\`javascript
// ANTES: Payload inflado (aprox. 450 tokens)
const badRequest = {
  user_information: {
    first_name: "Gabriel",
    last_name: "Contreras",
    email_address: "gabriel@example.com",
    date_of_birth: "1990-01-15",
    account_creation_date: "2023-06-01",
    subscription_type: "premium",
    preferred_language: "pt"
  },
  request_details: {
    question: "Como configuro um pipeline?",
    category: "technical_support",
    priority_level: "medium"
  }
};

// DEPOIS: Payload JSONB otimizado (aprox. 120 tokens)
const optimizedRequest = {
  u: { n: "Gabriel C.", t: "premium", l: "pt" },
  q: "Como configuro um pipeline?",
  c: "tech",
  p: 2
};
\`\`\`

### Middleware de Compressão

\`\`\`javascript
// Middleware para comprimir requests antes de enviar ao LLM
class TokenOptimizer {
  static fieldMap = {
    user_information: 'u', first_name: 'n', subscription_type: 't',
    preferred_language: 'l', question: 'q', category: 'c', priority_level: 'p'
  };

  static compress(payload) {
    return Object.entries(payload).reduce((acc, [key, value]) => {
      const shortKey = this.fieldMap[key] || key;
      acc[shortKey] = typeof value === 'object' && !Array.isArray(value)
        ? this.compress(value)
        : value;
      return acc;
    }, {});
  }

  static estimateTokens(text) {
    // Aproximação: 1 token ≈ 4 caracteres em inglês, 3 em espanhol
    return Math.ceil(JSON.stringify(text).length / 3.5);
  }
}
\`\`\`

## Compressão de Contexto

### Técnicas de Redução

1. **Sumarização progressiva**: Resumir conversas longas mantendo os pontos-chave
2. **Sliding window**: Manter somente as últimas N mensagens relevantes
3. **Embedding-based retrieval**: Trazer apenas o contexto relevante via RAG

\`\`\`javascript
// Sistema de contexto com sliding window + sumarização
class ContextManager {
  constructor(maxTokens = 4000) {
    this.maxTokens = maxTokens;
    this.messages = [];
    this.summary = '';
  }

  async addMessage(message) {
    this.messages.push(message);
    const totalTokens = this.estimateTokens();

    if (totalTokens > this.maxTokens) {
      // Resumir as mensagens mais antigas
      const oldMessages = this.messages.splice(0, Math.floor(this.messages.length / 2));
      this.summary = await this.summarize(this.summary, oldMessages);
    }
  }

  buildContext() {
    return [
      ...(this.summary ? [{ role: 'system', content: \\\`Resumo anterior: \\\${this.summary}\\\` }] : []),
      ...this.messages
    ];
  }
}
\`\`\`

## Padrões Few-Shot Eficientes

### Estrutura Otimizada

Em vez de incluir 5 exemplos completos, usamos exemplos mínimos mas representativos:

\`\`\`javascript
// Few-shot otimizado: exemplos compactos
const systemPrompt = \\\`Classifique tickets de suporte.
Exemplos:
IN: "não consigo fazer login" -> OUT: {"cat":"auth","pri":1,"team":"identity"}
IN: "o relatório está lento" -> OUT: {"cat":"perf","pri":2,"team":"backend"}
IN: "quero trocar meu plano" -> OUT: {"cat":"billing","pri":3,"team":"sales"}

Responda APENAS com JSON.\\\`;
\`\`\`

## Seleção de Modelos com Princípios SOLID

### Responsabilidade Única por Modelo

Aplicamos o princípio de **responsabilidade única**: cada modelo resolve um tipo específico de tarefa.

\`\`\`javascript
// Router de modelos baseado em complexidade
class ModelRouter {
  static routes = {
    classification: { model: 'gpt-4o-mini', maxTokens: 100 },    // Simples: $0.15/1M tokens
    extraction: { model: 'gpt-4o-mini', maxTokens: 500 },         // Simples: $0.15/1M tokens
    generation: { model: 'gpt-4o', maxTokens: 2000 },             // Complexo: $2.50/1M tokens
    reasoning: { model: 'claude-3-5-sonnet', maxTokens: 4000 },   // Avançado: $3.00/1M tokens
    code_review: { model: 'claude-3-5-sonnet', maxTokens: 3000 }  // Avançado: $3.00/1M tokens
  };

  static selectModel(taskType, complexity) {
    const route = this.routes[taskType];

    // Override para tarefas de alta complexidade
    if (complexity === 'high' && route.model.includes('mini')) {
      return { ...route, model: 'gpt-4o', maxTokens: route.maxTokens * 3 };
    }

    return route;
  }

  static async execute(taskType, prompt, complexity = 'normal') {
    const { model, maxTokens } = this.selectModel(taskType, complexity);

    return await llmClient.complete({
      model,
      messages: [{ role: 'user', content: prompt }],
      max_tokens: maxTokens,
      temperature: taskType === 'classification' ? 0 : 0.7
    });
  }
}
\`\`\`

### Resultados do Model Routing

| Tarefa | Modelo Anterior | Modelo Atual | Economia |
|--------|----------------|-------------|----------|
| Classificação de tickets | GPT-4 | GPT-4o-mini | 94% |
| Extração de dados | GPT-4 | GPT-4o-mini | 94% |
| Geração de relatórios | GPT-4 | GPT-4o | 40% |
| Revisão de código | GPT-4 | Claude 3.5 Sonnet | Melhor qualidade, mesmo custo |

## Tradeoffs Custo-Desempenho

### Framework de Decisão

\`\`\`
Latência < 200ms + Tarefa simples  → GPT-4o-mini (streaming)
Latência < 2s + Tarefa complexa    → GPT-4o
Qualidade máxima + Sem urgência     → Claude 3.5 Sonnet (batch)
Alto volume + Previsível            → Fine-tuned model
\`\`\`

## Resultados Consolidados

Após implementar todas as otimizações:

- **Redução de tokens**: 65% menos tokens por request médio
- **Custo mensal**: De $8.000 para $2.400 (-70%)
- **Latência média**: De 3,2s para 1,1s (-66%)
- **Qualidade das respostas**: Mantida ou melhorada (medida por avaliação humana)

## Lições Fundamentais

1. **Não use GPT-4 para tudo**: 70% das tarefas podem ser resolvidas com modelos lightweight
2. **Cada token conta**: A otimização de payload tem ROI imediato
3. **Meça antes de otimizar**: Instrumente suas chamadas a LLM como qualquer outro serviço
4. **Cache é seu amigo**: Respostas idênticas para inputs idênticos devem ser cacheadas`
    },
    author: "Gabriel Contreras",
    date: "2025-01-20",
    readTime: 9,
    tags: ["prompt-engineering", "llm", "tokens", "optimization", "jsonb", "solid"],
    category: "AI Engineering",
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
