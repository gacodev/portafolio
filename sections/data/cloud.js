const currentYear = new Date().getFullYear();
const awsExp = currentYear - 2024; // ~2 years by 2026
const azureExp = currentYear - 2021; // ~5 years by 2026
const gcpExp = currentYear - 2023; // ~3 years by 2026

export const cloudProviders = [
  {
    name: "Amazon Web Services",
    logo: "/images/aws.svg",
    experience: awsExp,
    skills: [
      // Identity & Security
      { name: "IAM & Permissions", category: "Security & Identity" },
      { name: "CloudWatch & SNS/SQS", category: "Security & Identity" }, // Monitoring/Security
      // Networking & Edge
      { name: "VPC (Networking)", category: "Networking & Edge" },
      { name: "Load Balancers (ALB/NLB)", category: "Networking & Edge" },
      { name: "API Gateway", category: "Networking & Edge" },
      { name: "Route 53 & CloudFront", category: "Networking & Edge" },
      // Compute
      { name: "EC2 (Virtual Machines)", category: "Compute & Serverless" },
      { name: "AWS Lambda (Functions)", category: "Compute & Serverless" },
      { name: "AWS Fargate", category: "Compute & Serverless" },
      // Containers
      { name: "Elastic Kubernetes Service (EKS)", category: "Containers" },
      { name: "Containers (ECS & ECR)", category: "Containers" },
      // Storage & Databases
      { name: "S3 (Buckets)", category: "Storage & DBs" },
      { name: "RDS Aurora", category: "Storage & DBs" },
      // Management & DevOps
      { name: "CloudFormation", category: "Management & DevOps" },
      { name: "AWS CLI", category: "Management & DevOps" },
      { name: "AWS SDKs", category: "Management & DevOps" }
    ]
  },
  {
    name: "Azure Cloud",
    logo: "/images/azure.svg",
    experience: azureExp,
    skills: [
      // Identity & Security
      { name: "Microsoft Entra ID / RBAC (IAM)", category: "Security & Identity" },
      { name: "Workload Identity Federation (WIF) / Zero Trust", category: "Security & Identity" },
      { name: "Key Vault", category: "Security & Identity" },
      // Networking & Edge
      { name: "Azure VNets (Networking)", category: "Networking & Edge" },
      { name: "Azure Application Gateway & Load Balancers", category: "Networking & Edge" },
      { name: "Azure API Management", category: "Networking & Edge" },
      // Compute
      { name: "Azure Virtual Machines, VMSS & Scale Sets", category: "Compute & Serverless" },
      { name: "Azure Functions", category: "Compute & Serverless" },
      { name: "Azure App Services & Web Apps", category: "Compute & Serverless" },
      // Containers
      { name: "Azure Kubernetes Service (AKS)", category: "Containers" },
      { name: "Azure Container Registry (ACR) / Container Apps", category: "Containers" },
      // Storage & Databases
      { name: "Blob Storage (Buckets)", category: "Storage & DBs" },
      { name: "Azure SQL Databases", category: "Storage & DBs" },
      { name: "Azure Redis Cache", category: "Storage & DBs" },
      // Management & DevOps
      { name: "Azure DevOps", category: "Management & DevOps" },
      { name: "Azure Monitor & Logic Apps", category: "Management & DevOps" },
      { name: "Azure Cost Management", category: "Management & DevOps" },
      { name: "Azure CLI", category: "Management & DevOps" },
      { name: "Azure SDKs", category: "Management & DevOps" }
    ]
  },
  {
    name: "Google Cloud",
    logo: "/images/gcp.svg",
    experience: gcpExp,
    skills: [
      // Identity & Security
      { name: "Cloud IAM & Workload Identity (WIF) / Zero Trust", category: "Security & Identity" },
      // Networking & Edge
      { name: "VPC Networking", category: "Networking & Edge" },
      { name: "Cloud Load Balancing", category: "Networking & Edge" },
      { name: "API Gateway", category: "Networking & Edge" },
      { name: "Cloud DNS & CDN", category: "Networking & Edge" },
      // Compute
      { name: "Compute Engine (VMs)", category: "Compute & Serverless" },
      { name: "Cloud Functions", category: "Compute & Serverless" },
      // Containers
      { name: "Google Kubernetes Engine (GKE)", category: "Containers" },
      { name: "Cloud Run & Pub/Sub", category: "Containers" },
      { name: "Containers & Artifact Registry", category: "Containers" },
      // Storage & Databases
      { name: "Cloud Storage (Buckets)", category: "Storage & DBs" },
      { name: "Cloud SQL", category: "Storage & DBs" },
      // Management & DevOps
      { name: "Cloud Build & Repositories", category: "Management & DevOps" },
      { name: "Cloud Deployment Manager", category: "Management & DevOps" },
      { name: "gcloud CLI", category: "Management & DevOps" },
      { name: "GCP SDKs", category: "Management & DevOps" }
    ]
  }
];

export const iacTools = [
  {
    name: "Terraform",
    logo: "/iac/terraform.svg",
    url: "https://www.terraform.io/docs",
    experience: 4
  },
  {
    name: "Pulumi",
    logo: "/iac/pulumi.svg",
    url: "https://www.pulumi.com/docs/",
    experience: 2
  }
];