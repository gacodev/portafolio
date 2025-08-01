const projects = [
  {
    company: "Interconexion Electrica S.A",
    url: "https://www.inteia.com.co",
    projects: [
      {
        name: 'AppiMotion+',
        image: "/projects/appimotion+.jpeg",
        url: 'https://www.inteia.com.co',
        role: 'Solutions Architect',
        year: 2024,
        technologies: [
          'Terraform', 'Docker', 'Container Registry', 'SonarCloud', 'OWASP', 
          'Azure Front Door', 'Azure App Services', 'Virtual Network', 'VMSS', 
          'Azure DevOps', 'IaC', 'CI/CD Pipelines', 'Azure Landing Zone'
        ]
      },
      {
        name: 'Carbonlytics',
        url: 'https://www.carbonlytics.com.co',
        role: 'DevOps Engineer',
        year: 2024,
        technologies: [
          'Golang', 'Docker', 'Bash', 'IaC', 'Azure Front Door',
          'Azure App Services', 'Virtual Network', 'VMSS', 'Azure DevOps', 'CI/CD Pipelines', 'Monitoring'
        ]
      },
      {
        name: 'Trackmile',
        url: 'https://www.trackmile.co/',
        role: 'Solutions Architect',
        year: 2024,
        technologies: [
          'Reverse Proxies', 'Docker', 'Bash', 'Ansible', 'IaC',
          'Azure Front Door', 'Containers Orchestration', 'Azure App Services',
          'Virtual Network', 'VMSS', 'Azure DevOps', 'CI/CD Pipelines', 'Prometheus'
        ]
      },
      {
        name: 'Inspira',
        url: 'https://inspira.isa.com.co',
        role: 'DevOps Engineer',
        year: 2024,
        technologies: [
          'Reverse Proxies', 'Docker', 'Terraform', 'Bash', 'IaC',
          'Azure Functions', 'Azure Front Door',
          'Azure App Services', 'Virtual Network', 'VMSS', 'Azure DevOps', 'CI/CD Pipelines', 'Monitoring', 'Azure Landing Zone'
        ]
      },
      {
        name: 'Traffig',
        url: 'https://www.inteia.com.co',
        role: 'Solutions Architect',
        year: 2024,
        technologies: [
          'Kubernetes', 'AKS', 'Docker', 'Container Registry', 'Helm',
          'SonarCloud', 'OWASP', 'Azure Front Door', 'Kubernetes', 'Virtual Network', 'VMSS', 'Azure DevOps', 'Microservices',
          'GitOps', 'IaC', 'CI/CD Pipelines', 'Azure Landing Zone'
        ]
      },
      {
        name: 'Deep',
        url: 'https://www.inteia.com.co',
        role: 'DevOps Engineer',
        year: 2024,
        technologies: [
          'Kubernetes', 'Docker', 'Terraform', 'Bash', 'IaC',
          'Azure Front Door', 'Azure App Services', 'Virtual Network', 'VMSS', 'Azure DevOps', 'CI/CD Pipelines', 'Microservices', 'Azure Landing Zone'
        ]
      },
      {
        name: 'Arpex',
        url: 'https://isa.co/es/',  
        role: 'Solutions Architect',
        year: 2024,
        technologies: [
          'IaC', 'Virtual Machines', 'Terraform',
          'Ansible', 'Virtual Network', 'VMSS', 'Azure DevOps', 'Microservices',
          'CI/CD Pipelines', 'Monitoring', 'Configuration Management', 'Azure Landing Zone'
        ]
      },
      {
        name: 'DCT',
        url: 'https://isa.co/es/',
        role: 'DevOps Engineer',
        year: 2024,
        technologies: [
          'Virtual Network', 'VMSS', 'Azure DevOps', 'Microservices', 'Azure',
          'IaC', 'Terraform', 'CI/CD Pipelines', 'Monitoring', 'Azure Landing Zone'  
        ]
      },
      {
        name: 'Gobierno Nube',
        url: 'https://inteia.com.co',
        role: 'Platform Engineer',
        year: 2024,
        technologies: [
          'Bash', 'Azure DevOps', 'Terraform', 'Python', 'Azure', 'Microservices',
          'Vnets', 'VMSS', 'GitOps', 'IaC', 'CI/CD Pipelines', 'Azure Landing Zone',
          'Cloud Governance', 'Kubernetes', 'policy as code'
        ]
      }
    ]
  },
  {
    company: "Comfama",
    url: "https://www.comfama.com",
    projects: [
      {
        name: "Aula digital comfama",
        image: "/projects/comfama.png",
        url: "https://auladigital.comfama.com",
        role: "Backend & Cloud Engineer",
        year: 2023,
        technologies: ["Linux Servers", "Microservices", "AzureDevops", "Ansible", "IaC", "Azure Portal", "CI/CD Pipelines", "Monitoring", "Shell Scripting", "Cloud Governance"]
      }
    ]
  },
  {
    company: "Newzenda (formerly ITS Colombia)",
    url: "https://www.newzenda.com",
    projects: [
      {
        name: "Mi deber es mi derecho",
        image: "/projects/mideber.png",
        url: "https://www.instagram.com/mideberesmiderecho/?hl=es-la",
        role: "FullStack Developer",
        year: 2022,
        technologies: ["Microservices", "PHP", "NodeJS", "Axios", "MongoDB", "Vercel", "Gitlab", "AWS Lambda", "AWS API Gateway"]
      }
    ]
  },
  {
    company: "Fuerza Aérea Colombiana",
    url: "https://www.fac.mil.co",
    projects: [
      {
        name: "Interescuelas FFMM",
        image: "/projects/interescuelas.png",
        url: "https://www.emavi.edu.co/interescuelas2022",
        role: "FullStack Developer",
        year: 2022,
        technologies: ["Gitlab CI/CD", "Azure", "Linux", "Virtual Machines", "IaC", "Shell Scripting", "Monitoring"]
      }
    ]
  }
];


projects.forEach(company => {
  company.projects.sort((a, b) => b.year - a.year);
});

projects.sort((a, b) => {
  const aLatestYear = Math.max(...a.projects.map(p => p.year));
  const bLatestYear = Math.max(...b.projects.map(p => p.year));
  return bLatestYear - aLatestYear;
});

export default projects;