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
          'REST API', '.NET Framework', 'CosmosDB', 'Virtual Machines', 'Docker',
          'Container Registry', 'React', 'SonarCloud', 'OWASP', 'Azure Front Door',
          'Azure App Services', 'Virtual Network', 'VMSS', 'Azure DevOps Pipelines',
          'Azure Boards', 'Azure Repos'
        ]
      },
      {
        name: 'Carbonlytics',
        url: 'https://www.carbonlytics.com.co',
        role: 'DevOps Engineer',
        year: 2024,
        technologies: [
          'Golang', 'Docker', 'React', 'Bash', 'CosmosDB', 'Azure Front Door',
          'Azure App Services', 'Azure Cognitive Services', 'Virtual Network',
          'VMSS', 'Azure DevOps Pipelines', 'Azure Boards', 'Azure Repos'
        ]
      },
      {
        name: 'Trackmile',
        url: 'https://www.trackmile.co/',
        role: 'Solutions Architect',
        year: 2024,
        technologies: [
          'Reverse Proxies', 'Docker', 'React', 'Python', 'FastAPI', 'Bash',
          'MongoDB', 'Azure Front Door', 'WebSockets', 'Azure App Services',
          'Virtual Network', 'VMSS', 'Azure DevOps Pipelines', 'Azure Boards',
          'Azure Repos'
        ]
      },
      {
        name: 'Inspira',
        url: 'https://inspira.isa.com.co',
        role: 'DevOps Engineer',
        year: 2024,
        technologies: [
          'Reverse Proxies', 'Docker', 'React', 'Python', 'FastAPI', 'Bash',
          'Azure Functions', 'PostgreSQL', 'Azure Front Door', 'WebSockets',
          'Azure App Services', 'Virtual Network', 'VMSS', 'Azure DevOps Pipelines',
          'Azure Boards', 'Azure Repos'
        ]
      },
      {
        name: 'Traffig',
        url: 'https://www.inteia.com.co',
        role: 'Solutions Architect',
        year: 2024,
        technologies: [
          'REST API', '.NET Framework', 'Node.js', 'Express', 'WebRTC', 'RTSP',
          'CosmosDB', 'Virtual Machines', 'Docker', 'Container Registry', 'React',
          'SonarCloud', 'OWASP', 'Azure Front Door', 'Azure App Services', 'AKS',
          'Azure API Management', 'Virtual Network', 'VMSS', 'Azure DevOps Pipelines',
          'Azure Boards', 'Azure Repos'
        ]
      },
      {
        name: 'Deep',
        url: 'https://www.inteia.com.co',
        role: 'DevOps Engineer',
        year: 2024,
        technologies: [
          'Reverse Proxies', 'Docker', 'React', 'Python', 'FastAPI', 'Bash',
          'MongoDB', 'Azure Front Door', 'Azure App Services', 'NVIDIA CUDA',
          'YOLOv5', 'Virtual Network', 'VMSS', 'Azure DevOps Pipelines',
          'Azure Boards', 'Azure Repos'
        ]
      },
      {
        name: 'Arpex',
        url: 'https://isa.co/es/',
        role: 'Solutions Architect',
        year: 2024,
        technologies: [
          'REST API', '.NET Framework', 'CosmosDB', 'Virtual Machines', 'SQL Server',
          'React', 'Virtual Network', 'VMSS', 'Azure DevOps Pipelines',
          'Azure Boards', 'Azure Repos'
        ]
      },
      {
        name: 'DCT',
        url: 'https://isa.co/es/',
        role: 'DevOps Engineer',
        year: 2024,
        technologies: [
          'Virtual Network', 'VMSS', 'Azure DevOps Pipelines', 'Azure Boards',
          'Azure Repos'
        ]
      },
      {
        name: 'Gobierno Nube',
        url: 'https://inteia.com.co',
        role: 'Platform Engineer',
        year: 2024,
        technologies: [
          'Bash', 'Azure DevOps', 'Azure OpenAI GPT-4', 'Python', 'Azure Portal',
          'Virtual Network', 'VMSS', 'Azure DevOps Pipelines', 'Azure Boards',
          'Azure Repos'
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
        technologies: ["MySQL", "PHP", "Moodle", "Docker", "AzureDevops", "JavaScript", "Azure portal", "Linux Servers"]
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
        technologies: ["MySQL", "PHP", "ReactJS", "Styled Components", "Axios", "MongoDB", "Vercel", "Gitlab"]
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
        technologies: ["MySQL", "Laravel", "Psysh", "Styled Components", "ReactJS - INERTIA", "MongoDB", "Gitlab On premise", "Azure Portal"]
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