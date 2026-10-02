/**
 * Single source of truth for the portfolio content.
 * Kept in line with the current CV (public/CV_Coppola_Carmine.pdf).
 */

export interface Link {
  label: string;
  href: string;
  /** Opens in a new tab and is announced as external. */
  external?: boolean;
  /** Triggers a file download instead of navigation. */
  download?: boolean;
}

export interface Metric {
  value: number;
  /** Digits after the decimal point. */
  decimals?: number;
  suffix?: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  period: string;
  kind: string;
  summary: string;
  detail: string;
  stack: string[];
  metrics?: Metric[];
  note?: string;
  /** Built with coding agents; architecture, validation, tests and review are mine. */
  agents?: boolean;
  links: Link[];
}

export interface Publication {
  id: string;
  year: number;
  title: string;
  venue: string;
  kind: "Paper" | "Poster" | "Institutional";
  note?: string;
  links: Link[];
}

export interface Role {
  period: string;
  title: string;
  org: string;
  detail: string;
}

export interface SkillLevel {
  level: string;
  items: string;
}

export const profile = {
  name: "Carmine Coppola",
  role: "ML/AI engineer and researcher",
  location: "Naples, Italy",
  timeZone: "Europe/Rome",
  email: "carminecoppola917@gmail.com",
  github: "https://github.com/carminecoppola",
  linkedin: "https://www.linkedin.com/in/carmine-coppola-9079b9261",
  cv: "/CV_Coppola_Carmine.pdf",
  availability: "Open to research and engineering roles",
  intro:
    "I work between AI and systems: efficient on-device inference, HPC for scientific models, and rigorous evaluation of language models. From prototype to something measured, tested and published.",
};

export const about = [
  "ML/AI engineer and researcher, finishing an MSc in Machine Learning and Big Data at the University of Naples Parthenope (expected March 2027). My work sits between AI and systems, and I like to take an idea all the way to something measured, tested and published.",
  "Right now I am a research fellow on the EASY project, where I built an edge node that records RGB and thermal imagery on a Raspberry Pi and keeps every observation traceable. Before that I modernised parts of the GLOBO atmospheric model for HPC systems and built a pipeline in which language models generate and solve programming exercises.",
  "I care about measurements more than adjectives. If a result looks too good, I check the split before I celebrate.",
];

export const projects: Project[] = [
  {
    id: "easy",
    title: "EASY edge node",
    period: "2025 — 2026",
    kind: "Edge AI · Research",
    summary:
      "A low-cost edge platform on a Raspberry Pi 4 with stereo RGB and an on-demand FLIR Lepton thermal sensor, running ONNX inference on the CPU and turning maritime observations into governed, reproducible data.",
    detail:
      "A service-oriented runtime lets live and replayed sources share one code path, with a React dashboard and REST API on top. Profiling the pipeline stage by stage showed that persistence and request coordination, not the model, dominated latency. My first YOLOv8n split leaked frames between train and test (mAP50 0.94); I documented it and rebuilt the split leak-free. All figures are laboratory results on the prototype; thermal fusion and field deployment are next. Parts were built with Codex and Claude Code.",
    stack: ["Python", "YOLOv8", "ONNX Runtime", "Raspberry Pi", "FLIR Lepton", "React", "REST", "CI"],
    metrics: [
      { value: 2, suffix: " h", label: "concurrent RGB and thermal acquisition" },
      { value: 1.08, decimals: 2, suffix: " s", label: "mean end-to-end inference request" },
      { value: 77.4, decimals: 1, suffix: " °C", label: "peak under full CPU stress, no throttling" },
      { value: 0.627, decimals: 3, label: "mAP50 on a leak-free split" },
    ],
    note: "Best Poster Award, IEEE eScience 2026 (participants' selection).",
    agents: true,
    links: [
      {
        label: "Dashboard and runtime",
        href: "https://github.com/carminecoppola/EASY-Maritime-Awareness-Dashboard",
        external: true,
      },
      {
        label: "Detection model",
        href: "https://github.com/carminecoppola/easy-maritime-awareness",
        external: true,
      },
      {
        label: "Paper (PDF)",
        href: "/materials/INSTIL2026-edge-node-citizen-maritime-observations-paper.pdf",
        download: true,
      },
    ],
  },
  {
    id: "globo",
    title: "GLOBO modernisation",
    period: "2024 — 2025",
    kind: "HPC · Scientific computing",
    summary:
      "Refactoring legacy Fortran in the GLOBO atmospheric model so it ports across HPC environments and is ready for GPUs.",
    detail:
      "Part of GLOwPP, with ISAC-CNR. I replaced point-to-point MPI calls with collective routines to cut inter-node synchronisation overhead, identified hotspots and restructured data movement for OpenACC, and built validation and regression workflows that guard numerical correctness.",
    stack: ["Fortran", "MPI", "OpenACC", "SLURM", "Profiling"],
    links: [
      { label: "Source", href: "https://git.isac.cnr.it/montella/globone-glowpp", external: true },
      { label: "Paper", href: "https://ieeexplore.ieee.org/document/11181550", external: true },
    ],
  },
  {
    id: "certamen",
    title: "Certamen Artificialis Intelligentia",
    period: "2024 — 2025",
    kind: "LLM evaluation · Research",
    summary:
      "A closed loop in which language models generate programming exercises, solve and evaluate them, and iterate on difficulty and correctness.",
    detail:
      "Static analysis, test-case execution and scoring check each exercise. I benchmarked ChatGPT, DeepSeek, Qwen and Gemini on Python, Java and JavaScript. Presented at ISD 2025 in Belgrade.",
    stack: ["Python", "LLMs", "Static analysis", "Benchmarking"],
    links: [
      { label: "Repository", href: "https://github.com/carminecoppola/Certamen-AI-Exercises", external: true },
      {
        label: "Paper (PDF)",
        href: "/publication/AIED2025_Certamen_Artificialis_Intelligentia__evaluating_how_AI_behaves_in_solving_AI_generated_gamified_programming_exercises.pdf",
        download: true,
      },
    ],
  },
  {
    id: "rl-enhance",
    title: "Adaptive RL for underwater image enhancement",
    period: "2026",
    kind: "Reinforcement learning · Vision",
    summary:
      "A Double-DQN agent in PyTorch that learns short, interpretable sequences of image-processing actions.",
    detail:
      "On paired in-domain images the official run gains 1.55 dB PSNR on average, with SSIM 0.83, and passes its behavioural acceptance gates. Robustness out of domain is negative, and I report it as unresolved. Developed with Codex and Claude Code.",
    stack: ["Python", "PyTorch", "DDQN", "Gymnasium"],
    metrics: [
      { value: 1.55, decimals: 2, suffix: " dB", label: "mean PSNR gain, in-domain" },
      { value: 0.83, decimals: 2, label: "SSIM" },
    ],
    agents: true,
    links: [
      { label: "Repository", href: "https://github.com/carminecoppola/adaptive-rl-image-enhancement", external: true },
    ],
  },
  {
    id: "api-gateway",
    title: "UniParthenope API v3 gateway",
    period: "2026",
    kind: "Backend",
    summary:
      "A backend gateway built from scratch that keeps all 91 operations of the legacy API unchanged, so the existing app does not notice the refactoring.",
    detail:
      "Pre-deploy security audit, hardening and deployment on the cluster, with an automated test suite. The repository is private. Developed with Codex and Claude Code.",
    stack: ["API design", "Security audit", "Testing", "Deployment"],
    agents: true,
    links: [],
  },
  {
    id: "uniparthenope",
    title: "app@uniparthenope",
    period: "2024 — 2026",
    kind: "Mobile",
    summary:
      "The university's official student app for Android and iOS: careers, courses, fees, weather and biometric login.",
    detail:
      "Flutter app published as an official institutional release. In 2026 I modernised the whole codebase with Codex and Claude Code, backed by unit tests for authentication and career state.",
    stack: ["Flutter", "Dart", "REST", "Testing"],
    agents: true,
    links: [
      { label: "App Store", href: "https://apps.apple.com/us/app/app-uniparthenope/id1524040409", external: true },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=it.uniparthenope.app&hl=en",
        external: true,
      },
    ],
  },
  {
    id: "hiwefai",
    title: "Hi-WeFAI tutorial",
    period: "2025",
    kind: "AI · Hydrometeorology",
    summary:
      "The operational tutorial for an AI nowcasting workflow, from radar data to flood warnings.",
    detail:
      "Covers radar ingestion, transformer-based precipitation nowcasting, coupling with the PERFECT-M hydrological model, and reproducible Docker and HPC deployment guides.",
    stack: ["Python", "Nowcasting", "Docker", "HPC"],
    links: [
      { label: "Tutorial", href: "https://github.com/carminecoppola/Hi-WeFAI_tutorial", external: true },
    ],
  },
  {
    id: "diachronic",
    title: "Diachronic text analysis",
    period: "Open source",
    kind: "NLP",
    summary:
      "Semantic drift of Italian across decades: CBOW embeddings per decade on Google Books n-grams, aligned with Procrustes.",
    detail: "Training runs on SLURM; drift metrics and PCA and t-SNE views make the shifts readable.",
    stack: ["Python", "PyTorch", "SLURM"],
    links: [
      { label: "Repository", href: "https://github.com/carminecoppola/diachronic_text_analysis", external: true },
    ],
  },
  {
    id: "pyspark",
    title: "PySpark SMS spam classifier",
    period: "Open source",
    kind: "Big data",
    summary: "A scalable spam classifier built as PySpark ML pipelines and benchmarked on a Hadoop cluster.",
    detail: "Deployed and benchmarked on a Hadoop cluster to compare how the pipeline scales.",
    stack: ["PySpark", "Hadoop", "ML pipelines"],
    links: [
      { label: "Repository", href: "https://github.com/carminecoppola/pyspark-sms-spam-detector", external: true },
    ],
  },
  {
    id: "openusage",
    title: "OpenUsage for VS Code",
    period: "Open source",
    kind: "Developer tools",
    summary: "A VS Code extension that shows spend, limits and usage of AI coding tools.",
    detail: "Ships with CI packaging.",
    stack: ["TypeScript", "VS Code API", "CI"],
    links: [
      { label: "Repository", href: "https://github.com/carminecoppola/openusage-vscode-monitor", external: true },
    ],
  },
];

export const publications: Publication[] = [
  {
    id: "instil-2026",
    year: 2026,
    kind: "Paper",
    title: "An Edge Node for Citizen-Contributed Maritime Observations",
    venue: "INSTIL Workshop, IEEE eScience 2026, Naples",
    note: "Coppola, Bucciero, Perrotta, Montella.",
    links: [
      {
        label: "Paper",
        href: "/materials/INSTIL2026-edge-node-citizen-maritime-observations-paper.pdf",
        download: true,
      },
      { label: "Slides", href: "/materials/INSTIL2026-edge-node-slides.pdf", download: true },
    ],
  },
  {
    id: "escience-2026-poster",
    year: 2026,
    kind: "Poster",
    title: "An Instrumented Edge Node for Dual-Sensor Maritime Safety Monitoring",
    venue: "IEEE eScience 2026, Naples. Poster #312",
    note: "Best Poster Award, participants' selection.",
    links: [
      {
        label: "Poster",
        href: "/materials/eScience2026-instrumented-edge-node-poster.pdf",
        download: true,
      },
      { label: "Award", href: "/materials/eScience2026-best-poster-award.pdf", download: true },
    ],
  },
  {
    id: "isd-2025",
    year: 2025,
    kind: "Paper",
    title: "Certamen Artificialis Intelligentia: Evaluating AI in Solving AI-Generated Programming Exercises",
    venue: "33rd International Conference on Information Systems Development (ISD 2025), Belgrade",
    links: [
      {
        label: "Paper",
        href: "/publication/AIED2025_Certamen_Artificialis_Intelligentia__evaluating_how_AI_behaves_in_solving_AI_generated_gamified_programming_exercises.pdf",
        download: true,
      },
      { label: "Poster", href: "/publication/Poster_Certamen_Artificialis_Intelligentia.pdf", download: true },
    ],
  },
  {
    id: "escience-2025",
    year: 2025,
    kind: "Poster",
    title: "Preserving and Improving the Legacy of eScience: the GLOBO Experience",
    venue: "21st IEEE International Conference on eScience, Chicago",
    links: [
      {
        label: "Poster",
        href: "/publication/eScience25_POSTER_Global_Weather_model_Prototype_now_and_Production_in_the_future.pdf",
        download: true,
      },
      { label: "GLOwPP poster", href: "/publication/Poster GLOWPP.pdf", download: true },
    ],
  },
  {
    id: "cini-2025",
    year: 2025,
    kind: "Poster",
    title: "Directed Acyclic Graph on Cross-Application Programmable I/O",
    venue: "CINI HPC Summer School, Naples",
    note: "Co-author. Perrotta et al.",
    links: [],
  },
  {
    id: "app-2024",
    year: 2024,
    kind: "Institutional",
    title: "app@uniparthenope: architecture and deployment of the official Android and iOS app",
    venue: "Institutional publication",
    note: "Coppola et al.",
    links: [],
  },
];

export const dissemination = [
  { year: "2026", name: "IEEE eScience 2026", place: "Naples, 28 Sep — 2 Oct", detail: "INSTIL workshop paper and Poster #312. Best Poster Award, awarded 1 October." },
  { year: "2025", name: "ISD 2025", place: "Belgrade, 3 — 5 Sep", detail: "Paper on LLMs solving AI-generated programming exercises." },
  { year: "2025", name: "IEEE eScience 2025", place: "Chicago", detail: "Poster on the modernisation of the GLOBO model." },
  { year: "2025", name: "CINI Summer School on HPC", place: "Naples, 16 — 20 Jun", detail: "Co-author of a poster on cross-application programmable I/O." },
];

export const roles: Role[] = [
  {
    period: "May — Nov 2026",
    title: "Research Fellow, EASY project",
    org: "University of Naples Parthenope",
    detail:
      "Post-lauream fellowship on multimodal tools for marine-environment awareness, supervised by Prof. Raffaele Montella. Built and validated the edge prototype end to end and took it to IEEE eScience 2026.",
  },
  {
    period: "2024 — 2026",
    title: "Teaching Assistant, Computer Architecture",
    org: "University of Naples Parthenope",
    detail: "Instruction-set architectures, pipelines, cache hierarchies and assembly-level programming.",
  },
  {
    period: "2024 — 2025",
    title: "Research Fellow, FGPE project",
    org: "University of Naples Parthenope",
    detail:
      "Designed and implemented a component that generates gamified programming exercises with LLMs, with evaluation pipelines and dataset benchmarks. It led to the ISD 2025 paper.",
  },
  {
    period: "2024 — 2025",
    title: "Instructor, seminar on AI and ML with Python",
    org: "University of Naples Parthenope",
    detail: "A full machine learning workflow with scikit-learn and PyTorch on real datasets.",
  },
  {
    period: "2023 — 2024",
    title: "Front-End Web Developer",
    org: "AC Software, Lamezia Terme",
    detail: "Responsive web applications with Angular, HTML, CSS and JavaScript in an agile team.",
  },
];

export const education = [
  {
    period: "2024 — 2027",
    title: "MSc, Machine Learning and Big Data",
    org: "University of Naples Parthenope. Expected March 2027.",
  },
  {
    period: "2020 — 2024",
    title: "BSc, Computer Science",
    org: "University of Naples Parthenope. Graduated 25 June 2024, 97/110.",
  },
  {
    period: "2015 — 2020",
    title: "Technical Diploma, Electrotechnics",
    org: "I.T.I.S. Eugenio Barsanti.",
  },
];

export const certifications = [
  "English B2, certified",
  "AWS Academy Cloud Foundations (2024–25) and AWS Educator Accreditation",
  "Kaggle Learn: Python, Intro and Intermediate ML, ML Explainability",
  "iOS Development Basic Course, Parthenope (2022)",
];

export const skillLevels: SkillLevel[] = [
  {
    level: "Strong",
    items:
      "Python, PyTorch, LLM pipelines and evaluation, ONNX edge inference, performance instrumentation, agentic engineering with Codex and Claude Code, scientific writing in LaTeX",
  },
  {
    level: "Working knowledge",
    items:
      "MPI and OpenACC, C and C++, scikit-learn, XGBoost, reinforcement learning (DDQN), PySpark, Raspberry Pi and V4L2 cameras, React, Next.js and TypeScript, Angular, Flutter, Docker, GitHub Actions, SLURM and HPC clusters, AWS (EC2, S3, IAM, VPC), MongoDB, MySQL",
  },
  {
    level: "Basic",
    items: "Fortran (HPC legacy refactoring), Swift, Kotlin, Java, Node.js, OpenCV, n8n",
  },
];

export const materials: Link[] = [
  { label: "Curriculum vitae", href: "/CV_Coppola_Carmine.pdf", download: true },
  {
    label: "INSTIL 2026 paper",
    href: "/materials/INSTIL2026-edge-node-citizen-maritime-observations-paper.pdf",
    download: true,
  },
  { label: "INSTIL 2026 slides", href: "/materials/INSTIL2026-edge-node-slides.pdf", download: true },
  {
    label: "eScience 2026 poster",
    href: "/materials/eScience2026-instrumented-edge-node-poster.pdf",
    download: true,
  },
];

export const recognition = {
  title: "Best Poster Award",
  org: "IEEE eScience 2026, participants' selection",
  detail: "An Instrumented Edge Node for Dual-Sensor Maritime Safety Monitoring.",
  year: "October 2026",
};
