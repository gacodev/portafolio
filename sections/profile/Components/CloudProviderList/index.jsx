import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';

const cloudProviders = [
  {
    name: "Amazon Web Services",
    logo: "/images/aws.svg",
    skills: [
      "EC2", "S3", "IAM", "RDS Aurora", "Route 53", "CloudFront", "AWS Lambda",
      "CloudWatch", "CloudFormation", "AWS Lightsail", "SNS", "SQS", "ECS"
    ]
  },
  {
    name: "Azure Cloud",
    logo: "/images/azure.svg",
    skills: [
      "Azure SQL Databases", "Microsoft Entra ID (B2B,B2C)", "Azure IAM", "API Management",
      "Azure Functions", "Cost Management", "Azure Virtual Machines", "Azure Blob Storage",
      "Key Vault", "Azure DevOps", "App Service", "Azure Kubernetes Service (AKS)",
      "Azure Monitor", "Azure Logic Apps", "Azure Event Grid", "Azure Service Bus",
      "Azure Container Instances", "Azure Container Apps", "Virtual Machine Scale Sets", 
      "Private DNS Zones", "Private Link", "Azure Application Gateway", "Traffic Manager",
      "Azure Front Door"
    ]
  },
  {
    name: "Google Cloud",
    logo: "/images/gcp.svg",
    skills: [
      "Compute Engine", "Cloud Storage", "Cloud Functions", "Cloud SQL",
      "Cloud DNS", "Cloud CDN", "Cloud Build", "Cloud Source Repositories",
      "Cloud IAM", "Cloud Deployment Manager", "Cloud Pub/Sub", "Cloud Run", "Maps API"
    ]
  }
];

const iacTools = [
  {
    name: "Terraform",
    logo: "/iac/terraform.svg",
    url: "https://www.terraform.io/docs"
  },
  {
    name: "Pulumi",
    logo: "/iac/pulumi.svg",
    url: "https://www.pulumi.com/docs/"
  }
];

export const CloudProviderList = ({ lang }) => {
  const title = lang === "en" ? "Cloud Experience" : "Experiencia en nube";
  const iacTitle = lang === "en" ? "Infrastructure as Code" : "Infraestructura como Código";
  const paragraph = lang === "en"
    ? "My preference for Infrastructure as Code (IaC) tools like Terraform and Pulumi enhances my productivity and enables more consistent, fault-tolerant deliveries. This approach allows me to represent infrastructure in code, facilitating progressive growth and better management. By adopting cutting-edge cloud technologies such as Docker, Vagrant, and Ansible, I streamline processes and reduce repetitive tasks, which is crucial in challenging situations and leads to more efficient and reliable cloud solutions."
    : "Mi preferencia por herramientas de Infraestructura como Código (IaC) como Terraform y Pulumi mejora mi productividad y permite entregas más consistentes y tolerantes a fallos. Este enfoque me permite representar la infraestructura en código, facilitando un crecimiento progresivo y una mejor gestión. Al adoptar tecnologías de vanguardia en la nube como Docker, Vagrant y Ansible, optimizo procesos y reduzco tareas repetitivas, lo cual es crucial en situaciones desafiantes y conduce a soluciones en la nube más eficientes y confiables.";

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">{title}</h2>
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
        {cloudProviders.map((provider, index) => (
          <div 
            key={provider.name} 
            className={`bg-white bg-opacity-20 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden flex-1 border border-white border-opacity-30 ${
              index === 1 ? 'md:-mt-4 md:-mb-4 md:shadow-xl' : ''
            }`}
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-center mb-4 text-white">{provider.name}</h3>
              <div className="flex justify-center mb-4">
                <Image
                  src={provider.logo}
                  alt={provider.name}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <ul className="list-disc list-inside space-y-2">
                {provider.skills.map(skill => (
                  <li key={skill} className="text-sm text-white font-semibold list-none">{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      
      <div className="max-w-4xl mx-auto text-center mt-16 mb-12">
        <h3 className="text-2xl font-semibold mb-8 text-white">{iacTitle}</h3>
        <div className="flex justify-center items-center space-x-12 mb-10">
          {iacTools.map((tool) => (
            <motion.a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center transition-all duration-300 hover:bg-opacity-30 hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={tool.logo}
                alt={tool.name}
                width={250}
                height={250}
                className="object-contain mb-4"
              />
              <span className="text-white text-lg font-semibold">{tool.name}</span>
            </motion.a>
          ))}
        </div>
        <p className="text-lg leading-relaxed text-white">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default CloudProviderList;