/**
 * Static portfolio data for Carmine Coppola
 * Edit this file to update projects, publications, skills, and personal information
 */

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  impact?: string;
  links?: {
    github?: string;
    paper?: string;
    report?: string;
    demo?: string;
    apple?: string;
    android?: string;
  };
}

export interface Publication {
  id: string;
  title: string;
  year: number;
  venue?: string;
  description: string;
  link?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface ProfileData {
  name: string;
  title: string;
  positioning: string;
  email: string;
  github: string;
  linkedin: string;
  cv: string;
  socials: {
    label: string;
    url: string;
  }[];
}

export const profile: ProfileData = {
  name: "Carmine Coppola",
  title: "Machine Learning & HPC-oriented Software Engineer",
  positioning: "Computer Science graduate and Machine Learning student focused on AI systems, scientific computing, computer vision, and performance-oriented software engineering.",
  email: "carminecoppola917@gmail.com",
  github: "https://github.com/carminecoppola",
  linkedin: "https://www.linkedin.com/in/carmine-coppola-9079b9261",
  cv: "/CV_Coppola_Carmine.pdf",
  socials: [
    {
      label: "GitHub",
      url: "https://github.com/carminecoppola",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/carmine-coppola-9079b9261",
    },
    {
      label: "Email",
      url: "mailto:carminecoppola917@gmail.com",
    },
  ],
};

export const projects: Project[] = [
  {
    id: "glowpp-globo",
    title: "GLOwPP / GLOBO Model Modernization",
    category: "HPC / Scientific Computing",
    description: "Modernization of legacy Fortran components for the GLOBO atmospheric model. Work involved MPI communication improvements, preparation for GPU acceleration using OpenACC, validation workflows, profiling, and comprehensive testing procedures.",
    technologies: ["Fortran", "MPI", "OpenACC", "HPC", "SLURM", "Performance Profiling"],
    impact: "Enhanced computational efficiency and prepared atmospheric modeling infrastructure for heterogeneous computing architectures.",
    links: {
      github: "https://git.isac.cnr.it/montella/globone-glowpp",
      paper: "https://ieeexplore.ieee.org/document/11181550",
    },
  },
  {
    id: "pneumonia-detection",
    title: "Pneumonia Detection from Chest X-rays",
    category: "Machine Learning / Computer Vision",
    description: "CNN-based biomedical image classification project for pneumonia detection from chest X-ray images. Includes baseline CNN architecture, MobileNetV2 transfer learning, fine-tuning strategies, comprehensive evaluation, error analysis, and Grad-CAM explainability techniques.",
    technologies: ["Python", "TensorFlow", "Keras", "CNN", "Transfer Learning", "Grad-CAM", "OpenCV"],
    impact: "Achieved high-accuracy pneumonia classification with explainable AI techniques for clinical applicability.",
    links: {
      github: "https://github.com/carminecoppola/pneumonia-detection",
    },
  },
  {
    id: "ai-generated-exercises",
    title: "AI-Generated Programming Exercise Framework",
    category: "AI Research / LLM Evaluation",
    description: "Research framework for evaluating large language models on AI-generated programming exercises. Includes dataset design, benchmark creation, automated evaluation pipelines, comprehensive analysis of LLM performance, and insights into educational applications.",
    technologies: ["Python", "LLMs", "Benchmarking", "Automated Evaluation", "Research Methodology"],
    impact: "Established robust evaluation framework for assessing LLM performance in educational contexts and contributed to AI education research.",
    links: {
      github: "https://github.com/carminecoppola/Certamen-AI-Exercises",
      paper: "/publication/AIED2025_Certamen_Artificialis_Intelligentia__evaluating_how_AI_behaves_in_solving_AI_generated_gamified_programming_exercises.pdf",
    },
  },
  {
    id: "hi-wefai-tutorial",
    title: "Hi-WeFAI Tutorial Development",
    category: "AI / Hydrometeorology / HPC Documentation",
    description: "Operational tutorial for the Hi-WeFAI workflow, documenting radar data acquisition, transformer-based precipitation nowcasting, hydrological model coupling, and flood warning generation with reproducible HPC deployment examples.",
    technologies: ["AI Workflows", "Hydrometeorology", "HPC Deployment", "Python", "Technical Documentation"],
    impact: "Created comprehensive reproducible workflows for operational deployment of AI-enhanced hydrological forecasting systems.",
    links: {
      github: "https://github.com/carminecoppola/Hi-WeFAI_tutorial",
    },
  },
  {
    id: "app-uniparthenope",
    title: "app@uniparthenope",
    category: "Mobile Development",
    description: "Official university mobile application project for Android and iOS platforms. Integrates comprehensive student services including course schedules, grades, exam booking, and campus resources with a focus on improving accessibility and user experience across platforms.",
    technologies: ["Flutter", "Dart", "Mobile Development", "Cross-platform Apps", "REST APIs"],
    impact: "Deployed mobile application serving university student population with improved accessibility and service integration.",
    links: {
      github: "https://github.com/carminecoppola/app_uniparthenope",
      apple: "https://apps.apple.com/us/app/app-uniparthenope/id1524040409",
      android: "https://play.google.com/store/apps/details?id=it.uniparthenope.app&hl=it",
    },
  },
  {
    id: "diachronic-text-analysis",
    title: "Diachronic Text Analysis",
    category: "NLP / Semantic Drift / Research",
    description: "Pipeline for diachronic language analysis using CBOW embeddings trained on Google Books N-grams, with Procrustes alignment, semantic drift metrics, and PCA/t-SNE visualizations.",
    technologies: ["Python", "PyTorch", "NumPy", "scikit-learn", "Jupyter", "NLP"],
    impact: "Built a reproducible workflow for tracking how word meaning changes over time across decades.",
    links: {
      github: "https://github.com/carminecoppola/diachronic_text_analysis",
    },
  },
  {
    id: "adaptive-rl-image-enhancement",
    title: "Adaptive RL Image Enhancement",
    category: "Reinforcement Learning / Computer Vision",
    description: "Reinforcement-learning system that learns sequences of image-processing actions to enhance degraded images, with PSNR/SSIM-based evaluation and training diagnostics.",
    technologies: ["Python", "PyTorch", "Gymnasium", "CIFAR-10", "PSNR", "SSIM"],
    impact: "Explored interpretable sequential decision-making for image restoration and quality optimization.",
    links: {
      github: "https://github.com/carminecoppola/adaptive-rl-image-enhancement",
    },
  },
];

export const publications: Publication[] = [
  {
    id: "certamen-ai",
    title: "Certamen Artificialis Intelligentia: Evaluating AI in Solving AI-Generated Programming Exercises",
    year: 2024,
    venue: "AI Education & Research",
    description: "Research on evaluating large language models' capability to solve AI-generated programming exercises, with focus on benchmark design and performance analysis.",
    link: "/publication/AIED2025_Certamen_Artificialis_Intelligentia__evaluating_how_AI_behaves_in_solving_AI_generated_gamified_programming_exercises.pdf",
  },
  {
    id: "globo-escience",
    title: "Preserving and Improving the Legacy of eScience: The GLOBO Experience",
    year: 2024,
    venue: "Scientific Computing & eScience",
    description: "Analysis of modernizing legacy atmospheric modeling systems for contemporary HPC architectures, covering MPI optimization and GPU acceleration preparation.",
    link: "/publication/eScience25_POSTER_Global_Weather_model_Prototype_now_and_Production_in_the_future.pdf",
  },
  {
    id: "app-uniparthenope-pub",
    title: "app@uniparthenope: Enhancing University Services Through Mobile Technology",
    year: 2023,
    venue: "Educational Technology",
    description: "Case study on developing and deploying cross-platform mobile applications for academic institutions, focusing on service integration and user accessibility.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming Languages",
    skills: ["Python", "C", "C++", "Java", "TypeScript", "JavaScript", "Dart", "Fortran"],
  },
  {
    category: "Machine Learning & AI",
    skills: ["CNNs", "Transfer Learning", "Grad-CAM", "TensorFlow/Keras", "OpenCV", "Explainable AI", "Model Evaluation"],
  },
  {
    category: "HPC & Scientific Computing",
    skills: ["MPI", "OpenACC", "Linux HPC Environments", "Performance Profiling", "SLURM", "Fortran 90+"],
  },
  {
    category: "Web & Mobile Development",
    skills: ["Next.js", "React", "Angular", "HTML/CSS", "Flutter", "Swift", "REST APIs"],
  },
  {
    category: "Tools & Methodologies",
    skills: ["Git/GitHub", "Docker", "LaTeX", "Figma", "Notion", "Scientific Computing Workflows"],
  },
];

export const about = {
  intro: "Computer Science graduate with a Master's degree in Machine Learning and Big Data.",
  experience: "Experienced in research and engineering projects spanning machine learning, high-performance computing, computer vision, and scientific computing. Proficient in working across academic research environments and collaborative engineering teams.",
  interests: "Passionate about AI systems, performance-oriented computing, explainable AI, and developing robust solutions at the intersection of research and production.",
};
