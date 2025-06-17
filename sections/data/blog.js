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
