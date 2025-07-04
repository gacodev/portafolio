// AI/ML Experience and Knowledge Data
const aimlData = {
  // Plataformas de AI/ML
  platforms: [
    {
      name: "Azure AI/ML Services",
      logo: "/images/azure-ml.svg",
      category: "Enterprise AI Platform",
      experience: "Proficient",
      description: {
        es: "Arquitectura y despliegue de soluciones IA empresariales usando Azure OpenAI, Azure ML y Cognitive Services para aplicaciones críticas de negocio",
        en: "Enterprise AI solutions architecture and deployment using Azure OpenAI, Azure ML and Cognitive Services for business-critical applications"
      },
      capabilities: [
        "Azure OpenAI", "Azure ML", "Cognitive Services", "MLOps Pipelines", "Model Registry", "Real-time Endpoints"
      ]
    },
    {
      name: "Google Cloud AI",
      logo: "/images/gcp.svg",
      category: "Enterprise AI Platform",
      experience: "Advanced",
      description: {
        es: "Implementación de arquitecturas IA empresariales usando Vertex AI, Document AI y servicios de Google Cloud para procesamiento inteligente de datos",
        en: "Enterprise AI architecture implementation using Vertex AI, Document AI and Google Cloud services for intelligent data processing"
      },
      capabilities: [
        "Vertex AI", "Document AI", "Vision API", "Translation API", "Natural Language AI", "BigQuery ML"
      ]
    },
    {
      name: "OpenAI Platform",
      logo: "/images/openai.svg",
      category: "LLM Platform",
      experience: "Proficient",
      description: {
        es: "Integración empresarial de servicios OpenAI, desarrollo de aplicaciones inteligentes con API avanzadas y prompt engineering estratégico",
        en: "Enterprise OpenAI services integration, intelligent application development with advanced APIs and strategic prompt engineering"
      },
      capabilities: [
        "GPT API", "Embeddings", "Fine-tuning", "Function Calling", "Assistants API", "Vision API"
      ]
    },
    {
      name: "Anthropic Claude",
      logo: "/images/claude.svg",
      category: "LLM Platform",
      experience: "Proficient",
      description: {
        es: "Desarrollo con plataforma Claude de Anthropic, integración en aplicaciones empresariales, análisis de documentos complejos y generación de código",
        en: "Development with Anthropic's Claude platform, enterprise application integration, complex document analysis and code generation"
      },
      capabilities: [
        "Claude API", "Long Context Processing", "Code Analysis", "Document Processing", "Safety Features", "Constitutional AI"
      ]
    }
  ],

  // Tipos de servicios AI
  aiServices: [
    {
      category: "Computer Vision",
      icon: "🖼️",
      services: [
        {
          name: "Image Classification",
          description: {
            es: "Clasificación automática de imágenes usando modelos pre-entrenados y personalizados",
            en: "Automatic image classification using pre-trained and custom models"
          },
          technologies: ["TensorFlow", "PyTorch", "OpenCV", "Azure Vision", "Google Vision API"]
        },
        {
          name: "Object Detection",
          description: {
            es: "Detección y localización de objetos en imágenes y videos en tiempo real",
            en: "Real-time object detection and localization in images and videos"
          },
          technologies: ["YOLO", "R-CNN", "SSD", "Azure Computer Vision", "AWS Rekognition"]
        },
        {
          name: "OCR (Text Recognition)",
          description: {
            es: "Extracción de texto de imágenes y documentos con alta precisión",
            en: "High-precision text extraction from images and documents"
          },
          technologies: ["Tesseract", "Azure Form Recognizer", "Google Cloud Vision", "Amazon Textract"]
        }
      ]
    },
    {
      category: "Natural Language Processing",
      icon: "💬",
      services: [
        {
          name: "Text Analysis",
          description: {
            es: "Análisis de sentimientos, clasificación de texto y extracción de entidades",
            en: "Sentiment analysis, text classification and entity extraction"
          },
          technologies: ["spaCy", "NLTK", "Transformers", "Azure Text Analytics", "Google NLP"]
        },
        {
          name: "Language Translation",
          description: {
            es: "Traducción automática entre múltiples idiomas con alta calidad",
            en: "High-quality automatic translation between multiple languages"
          },
          technologies: ["Google Translate", "Azure Translator", "Amazon Translate", "OpenAI GPT"]
        },
        {
          name: "Chatbots & Assistants",
          description: {
            es: "Desarrollo de chatbots inteligentes y asistentes virtuales",
            en: "Development of intelligent chatbots and virtual assistants"
          },
          technologies: ["Dialogflow", "Bot Framework", "Rasa", "OpenAI API", "Claude API"]
        }
      ]
    },
    {
      category: "Speech & Audio",
      icon: "🎵",
      services: [
        {
          name: "Speech Recognition",
          description: {
            es: "Conversión de voz a texto con soporte multiidioma",
            en: "Speech-to-text conversion with multi-language support"
          },
          technologies: ["Azure Speech", "Google Speech-to-Text", "Amazon Transcribe", "Whisper"]
        },
        {
          name: "Text-to-Speech",
          description: {
            es: "Síntesis de voz natural con voces personalizables",
            en: "Natural speech synthesis with customizable voices"
          },
          technologies: ["Azure Speech", "Google Text-to-Speech", "Amazon Polly", "ElevenLabs"]
        }
      ]
    }
  ],

  // Ciclo de vida ML
  mlLifecycle: [
    {
      phase: "Data Collection",
      icon: "📊",
      description: {
        es: "Recolección y preparación de datos para entrenamiento",
        en: "Data collection and preparation for training"
      },
      tools: ["Pandas", "NumPy", "SQL", "Azure Data Factory", "Apache Airflow"]
    },
    {
      phase: "Data Preprocessing",
      icon: "🔧",
      description: {
        es: "Limpieza, transformación y feature engineering",
        en: "Data cleaning, transformation and feature engineering"
      },
      tools: ["Scikit-learn", "Pandas", "Feature Store", "Azure ML", "Databricks"]
    },
    {
      phase: "Model Training",
      icon: "🧠",
      description: {
        es: "Entrenamiento de modelos con diferentes algoritmos",
        en: "Model training with different algorithms"
      },
      tools: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost", "Azure AutoML"]
    },
    {
      phase: "Model Evaluation",
      icon: "📈",
      description: {
        es: "Evaluación y validación de modelos",
        en: "Model evaluation and validation"
      },
      tools: ["MLflow", "TensorBoard", "Weights & Biases", "Azure ML", "Neptune"]
    },
    {
      phase: "Model Deployment",
      icon: "🚀",
      description: {
        es: "Despliegue de modelos en producción",
        en: "Model deployment to production"
      },
      tools: ["Docker", "Kubernetes", "Azure Container Instances", "FastAPI", "Flask"]
    },
    {
      phase: "Monitoring & Maintenance",
      icon: "📡",
      description: {
        es: "Monitoreo continuo y mantenimiento de modelos",
        en: "Continuous monitoring and model maintenance"
      },
      tools: ["Azure Monitor", "Prometheus", "Grafana", "Data Drift Detection", "Model Versioning"]
    }
  ],

  // SDKs y Frameworks de IA
  aiFrameworks: [
    {
      category: "LLM Orchestration",
      icon: "🔗",
      frameworks: [
        {
          name: "LangChain",
          description: {
            es: "Framework para desarrollo de aplicaciones con LLMs, chains y agents",
            en: "Framework for building applications with LLMs, chains and agents"
          },
          capabilities: ["Chains", "Agents", "Memory", "Vector Stores", "Callbacks"]
        },
        {
          name: "LangGraph",
          description: {
            es: "Framework para construir aplicaciones stateful, multi-actor con LLMs",
            en: "Framework for building stateful, multi-actor applications with LLMs"
          },
          capabilities: ["State Management", "Multi-agent", "Workflow", "Persistence", "Streaming"]
        }
      ]
    },
    {
      category: "Cloud SDKs",
      icon: "☁️",
      frameworks: [
        {
          name: "Azure AI SDK",
          description: {
            es: "SDK oficial de Azure para servicios de IA y ML en Python",
            en: "Official Azure SDK for AI and ML services in Python"
          },
          capabilities: ["azure-ai-ml", "azure-cognitiveservices", "azure-ai-textanalytics", "azure-ai-formrecognizer"]
        },
        {
          name: "Google Cloud AI SDK",
          description: {
            es: "SDK de Google Cloud para servicios de IA y ML en Python",
            en: "Google Cloud SDK for AI and ML services in Python"
          },
          capabilities: ["google-cloud-aiplatform", "google-cloud-vision", "google-cloud-language", "google-cloud-translate"]
        },
        {
          name: "OpenAI Python SDK",
          description: {
            es: "SDK oficial de OpenAI para integración con sus APIs",
            en: "Official OpenAI SDK for API integration"
          },
          capabilities: ["openai", "Async Support", "Streaming", "Function Calling", "Embeddings"]
        },
        {
          name: "Anthropic SDK",
          description: {
            es: "SDK oficial de Anthropic para integración con Claude",
            en: "Official Anthropic SDK for Claude integration"
          },
          capabilities: ["anthropic", "Async Support", "Streaming", "Long Context", "Safety Features"]
        }
      ]
    },
    {
      category: "Automation & Workflows",
      icon: "🔄",
      frameworks: [
        {
          name: "N8N",
          description: {
            es: "Plataforma de automatización visual para workflows de IA y integraciones",
            en: "Visual automation platform for AI workflows and integrations"
          },
          capabilities: ["Visual Workflows", "AI Nodes", "HTTP Requests", "Database Connectors", "Scheduling"]
        }
      ]
    }
  ],

  // Análisis de Sentimientos e Intenciones
  sentimentAnalysis: {
    title: {
      es: "Análisis de Sentimientos e Intenciones",
      en: "Sentiment Analysis & Intent Recognition"
    },
    description: {
      es: "Implementación de sistemas de toma de decisiones basados en análisis de sentimientos, detección de intenciones y procesamiento de lenguaje natural",
      en: "Implementation of decision-making systems based on sentiment analysis, intent detection and natural language processing"
    },
    capabilities: [
      {
        name: "Sentiment Analysis",
        description: {
          es: "Análisis de polaridad emocional en textos para toma de decisiones automatizada",
          en: "Emotional polarity analysis in texts for automated decision-making"
        },
        technologies: ["Azure Text Analytics", "Google Cloud NLP", "VADER", "TextBlob"]
      },
      {
        name: "Intent Recognition",
        description: {
          es: "Detección de intenciones en conversaciones para enrutamiento inteligente",
          en: "Intent detection in conversations for intelligent routing"
        },
        technologies: ["Azure Language Understanding", "Dialogflow", "Rasa NLU", "spaCy"]
      },
      {
        name: "Emotion Detection",
        description: {
          es: "Reconocimiento de emociones para personalización de respuestas",
          en: "Emotion recognition for response personalization"
        },
        technologies: ["Azure Emotion API", "IBM Watson", "Custom Models", "Transformers"]
      }
    ]
  },

  // Capacidades técnicas
  technicalCapabilities: {
    es: [
      "Integración de APIs de IA empresariales",
      "Desarrollo de pipelines MLOps",
      "Implementación de arquitecturas multi-LLM",
      "Optimización de prompts y fine-tuning",
      "Procesamiento de documentos inteligente",
      "Análisis predictivo y forecasting",
      "Desarrollo de agentes conversacionales",
      "Automatización de workflows con N8N",
      "Toma de decisiones basada en sentimientos",
      "Integración con sistemas empresariales"
    ],
    en: [
      "Enterprise AI API integration",
      "MLOps pipeline development",
      "Multi-LLM architecture implementation",
      "Prompt optimization and fine-tuning",
      "Intelligent document processing",
      "Predictive analytics and forecasting",
      "Conversational agent development",
      "Workflow automation with N8N",
      "Sentiment-based decision making",
      "Enterprise system integration"
    ]
  }
};

export default aimlData;