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

export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

export interface Project {
  id: string;
  title: string;
  period: string;
  kind: string;
  summary: string;
  /** Where the work sits: project, partners, motivation. */
  context: string;
  /** What I actually did, one line each. */
  highlights: string[];
  detail: string;
  stack: string[];
  metrics?: Metric[];
  images?: ProjectImage[];
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
    images: [
      { src: "/projects/easy-hardware.jpg", alt: "The EASY prototype: a Raspberry Pi 4 with a camera HAT, two RGB cameras, a thermal sensor and a cooling fan", caption: "The laboratory prototype used for every measurement: Raspberry Pi 4, two RGB cameras, FLIR Lepton thermal sensor.", width: 1600, height: 1200 },
      { src: "/projects/easy-node.jpg", alt: "The integrated node design study: cameras and thermal sensor on a rigid bar above an enclosed Raspberry Pi", caption: "Target integrated node, a design study with a rigid sensor mount. It was not used for the reported measurements.", width: 1600, height: 1200 },
    ],
    summary:
      "A low-cost edge platform on a Raspberry Pi 4 with stereo RGB and an on-demand FLIR Lepton thermal sensor, running ONNX inference on the CPU and turning maritime observations into governed, reproducible data.",
    context:
      "Part of EASY (Environmental Awareness by the Sea and beYond) at the University of Naples Parthenope, supervised by Prof. Raffaele Montella. The question: can a cheap embedded node give citizen-contributed maritime observations a reproducible, governable path from sensor to data?",
    highlights: [
      "Architected a service-oriented runtime in which live and replayed sources share one code path, with a React dashboard and REST API on top.",
      "Profiled the pipeline stage by stage and found that persistence and request coordination, not the model, dominated latency.",
      "Found sequence-level leakage in my own first YOLOv8n split (mAP50 0.94), documented it and rebuilt the split leak-free: 0.627 deployed, 0.678 at 960 px.",
      "Kept every observation traceable: source, session, capture time, device state, model configuration and per-stage timings.",
    ],
    detail:
      "All figures are laboratory results on the prototype; thermal fusion and field deployment are the next step.",
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
    images: [
      { src: "/projects/globo-communication.png", alt: "Diagram of GLOBO communication before, with point-to-point messages, and after, with MPI collective operations", caption: "Before and after: point-to-point exchanges replaced by collective operations.", width: 1600, height: 991 },
      { src: "/projects/globo-scaling.png", alt: "Line chart of best execution time per resolution, collective against point-to-point", caption: "Best execution time per resolution. At 39 km the collective version needs 3,939 s against 6,736 s.", width: 1600, height: 922 },
      { src: "/projects/globo-pressure.png", alt: "Two world maps of surface pressure simulated by GLOBO at 312 km and 39 km resolution", caption: "Surface pressure simulated by GLOBO at 312 km (left) and 39 km (right).", width: 1800, height: 771 },
    ],
    summary:
      "Refactoring the communication layer of a global weather model so it scales across nodes, and preparing it for GPUs and the cloud.",
    context:
      "GLOBO is the global, hydrostatic atmospheric model of CNR-ISAC, derived from BOLAM. It produces daily 7-day forecasts and a weekly 40-member ensemble for sub-seasonal prediction. GLOWPP (GLObal Weather model Prototype now and Production in the future) is led by the University of Naples Parthenope with ISAC-CNR, FIDES Consulting and ITDM, to make it run on HPC clusters and on cloud platforms.",
    highlights: [
      "Replaced root-driven MPI_Isend/MPI_Irecv loops followed by MPI_Wait with MPI_Bcast, MPI_Scatterv, MPI_Sendrecv and MPI_Reduce, removing sequential bottlenecks and simplifying the code.",
      "Measured four resolutions from 312 km to 39 km. At coarse grids both versions match; at 78 km the collectives stay stable up to 192 processes; at 39 km the run drops from 6,736 s to 3,939 s.",
      "Planned dynamic memory allocation and introduced the first OpenACC directives, after profiling the hotspots and restructuring data movement.",
      "Built validation and regression workflows so numerical results stay correct after every refactor.",
    ],
    detail: "Presented as a poster at IEEE eScience 2025 in Chicago.",
    stack: ["Fortran", "MPI", "OpenACC", "SLURM", "Profiling"],
    metrics: [
      { value: 40, suffix: "%", label: "shorter runtime at 39 km, multi-node" },
      { value: 3939, suffix: " s", label: "high-resolution run, down from 6,736 s" },
      { value: 192, label: "processes with stable scaling at 78 km" },
    ],
    links: [
      { label: "GLOWPP project", href: "https://www.glowpp-project.org/", external: true },
      { label: "Source", href: "https://git.isac.cnr.it/montella/globone-glowpp", external: true },
      { label: "Poster (PDF)", href: "/publication/eScience25_POSTER_Global_Weather_model_Prototype_now_and_Production_in_the_future.pdf", download: true },
    ],
  },
  {
    id: "certamen",
    title: "Certamen Artificialis Intelligentia",
    period: "2024 — 2025",
    kind: "LLM evaluation · Research",
    summary:
      "What happens when language models solve programming exercises written by other language models? A closed-loop benchmark that generates, solves and scores them.",
    context:
      "Part of FGPE++ (Gamified Programming Learning at Scale), an Erasmus+ project coordinated by the University of Szczecin with Parthenope, Porto, Kaunas and Aalborg. Earlier studies tested models as generators or as solvers; this one tests both roles together.",
    highlights: [
      "Built the pipeline in which one model generates an exercise with a structured prompt and another writes, compiles and runs the solution, then compares the output with the generator's expected result.",
      "Ran four models (GPT-4, DeepSeek-R1, Qwen-Turbo, Gemini 2.0 Flash) over four rotations of 20 exercises each, solved in Python, Java and JavaScript.",
      "Scored every generator and solver pair with syntax error, logical error and total error rates.",
      "Found that every model stayed below 10% total error, with ChatGPT leading as generator (5.9%) and as solver (6.8%); Gemini was the weakest generator (8.6%) and Qwen the weakest solver (8.9%).",
    ],
    detail:
      "The paper is explicit about limits: no human review of the exercises and no systematic bias analysis yet. Presented at ISD 2025 in Belgrade.",
    stack: ["Python", "LLM APIs", "Prompt design", "Static analysis", "Benchmarking"],
    metrics: [
      { value: 4, label: "language models, each as generator and solver" },
      { value: 3, label: "programming languages" },
      { value: 5.9, decimals: 1, suffix: "%", label: "total error rate of the best generator" },
    ],
    links: [
      { label: "Repository", href: "https://github.com/carminecoppola/Certamen-AI-Exercises", external: true },
      {
        label: "Paper (PDF)",
        href: "/publication/AIED2025_Certamen_Artificialis_Intelligentia__evaluating_how_AI_behaves_in_solving_AI_generated_gamified_programming_exercises.pdf",
        download: true,
      },
      { label: "Poster (PDF)", href: "/publication/Poster_Certamen_Artificialis_Intelligentia.pdf", download: true },
    ],
  },
  {
    id: "rl-enhance",
    title: "Adaptive RL for underwater image enhancement",
    period: "2026",
    kind: "Reinforcement learning · Vision",
    summary:
      "A Double-DQN agent in PyTorch that learns short, interpretable sequences of image-processing actions to restore degraded underwater photos.",
    context:
      "An independent implementation inspired by earlier underwater reinforcement-learning work, trained on paired images from the UIEB dataset. The policy sees the current image and the step number and picks one of four deterministic actions: white balance, contrast up, sharpen, or stop.",
    highlights: [
      "Designed the environment, reward shaping and acceptance gates, and checkpointed on mean PSNR gain instead of reward.",
      "Ran five controlled experiments, each changing one thing: a longer horizon helped in-domain, an eight-action set lost too much quality, and global LAB statistics hurt out-of-domain results. I rejected the last two.",
      "Compared the policy against fixed baselines and analysed which actions it chooses.",
      "Evaluated out of domain on 60 challenging images with no reference. The deltas are negative, and I report them as unresolved.",
    ],
    detail:
      "Reproducible by design: each run stores its configuration, splits, checkpoints, evaluations and a generated report, with unit tests, linting and Slurm launchers.",
    stack: ["Python", "PyTorch", "DDQN", "Gymnasium", "Slurm"],
    metrics: [
      { value: 1.55, decimals: 2, suffix: " dB", label: "mean PSNR gain, in-domain" },
      { value: 0.83, decimals: 2, label: "output SSIM" },
      { value: 5, label: "single-change experiments" },
    ],
    agents: true,
    links: [
      { label: "Repository", href: "https://github.com/carminecoppola/adaptive-rl-image-enhancement", external: true },
    ],
  },
  {
    id: "uniparthenope",
    title: "app@uniparthenope",
    period: "2024 — 2026",
    kind: "Mobile",
    summary:
      "The university's official app for students and faculty, on Android and iOS: career, courses, fees, exam booking, calendar, room booking and weather.",
    context:
      "Built in Flutter with Provider for state, against the university's REST services. Published as an official institutional release. Developed with Raffaele Montella.",
    highlights: [
      "Biometric sign-in with local authentication and secure credential storage.",
      "Exam booking flow, calendar, fee status with receipt download, and a digital student pass.",
      "Faculty tools for rooms, events and office hours, plus students with more than one career.",
      "In 2026 I modernised the whole codebase, redesigning the student and faculty interface and adding 30 test files that cover authentication, booking, calendar, fees and localisation.",
    ],
    detail: "",
    stack: ["Flutter", "Dart", "Provider", "REST", "Testing"],
    metrics: [{ value: 30, label: "test files, from auth to booking" }],
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
    id: "api-gateway",
    title: "UniParthenope API v3 gateway",
    period: "2026",
    kind: "Backend",
    summary:
      "A backend gateway that gives the university app a new /v3 API while keeping all 91 operations of the legacy API unchanged, so existing clients do not notice.",
    context:
      "A FastAPI service in Docker behind a reverse proxy. It exposes the new v3 namespace and mirrors the legacy routes at the same paths, forwarding them to the real upstream.",
    highlights: [
      "Built it from scratch, with a contract that preserves every legacy operation.",
      "Ran a pre-deploy security audit and hardened it before deployment on the cluster.",
      "Added an automated test suite, and used the gateway to fix real problems of the app, such as exam bookings, receipts and profile photos.",
    ],
    detail: "The repository is private.",
    stack: ["FastAPI", "Docker", "API design", "Security audit", "Testing"],
    metrics: [{ value: 91, label: "legacy operations kept intact" }],
    agents: true,
    links: [],
  },
  {
    id: "hiwefai",
    title: "Hi-WeFAI tutorial",
    period: "2025",
    kind: "AI · Hydrometeorology",
    summary:
      "The operational tutorial for an AI nowcasting workflow, from radar data to flood-risk maps, with reproducible Docker deployment.",
    context:
      "Hi-WeFAI (High-performance computing for Weather nowcasting with Federated Artificial Intelligence) combines HPC, federated AI and heterogeneous sensors, X-band radar and weather stations, to improve short-term rain forecasting and flood nowcasting. The pilot area is the metropolitan area of Naples.",
    highlights: [
      "Wrote the end-to-end guide: radar ingestion, a transformer-based precipitation model, coupling with the PERFECT-M hydrological model, and warning generation.",
      "Packaged it in Docker with three cooperating services: a WebSocket server, an inference client and a download server.",
      "Documented the pipeline: 36 radar images become 18 inputs, 6 predictions and 12 NetCDF flood-risk outputs, in about 43 minutes.",
      "Specified the data and the model weights, about 8 GB of geospatial layers, and the resources needed to reproduce the run.",
    ],
    detail: "Written so a researcher can reproduce the workflow on an HPC host without help.",
    stack: ["Python", "Docker", "Nowcasting", "NetCDF", "HPC"],
    metrics: [
      { value: 43, suffix: " min", label: "from radar images to flood-risk maps" },
      { value: 12, label: "NetCDF flood-risk outputs per run" },
    ],
    links: [
      { label: "Hi-WeFAI project", href: "https://www.hiwefai-project.org/", external: true },
      { label: "Tutorial", href: "https://github.com/carminecoppola/Hi-WeFAI_tutorial", external: true },
    ],
  },
  {
    id: "diachronic",
    title: "Diachronic text analysis",
    period: "Open source",
    kind: "NLP",
    images: [
      { src: "/projects/diachronic-dispersion.png", alt: "Line chart of the semantic dispersion of nearest neighbours across decades from 1900 to 2010", caption: "Semantic dispersion of nearest neighbours across decades, measured as cosine similarity.", width: 1280, height: 960 },
    ],
    summary:
      "How word meaning drifts across a century, measured with CBOW embeddings trained per decade on Google Books n-grams.",
    context:
      "The pipeline covers 1900 to 2019. The textbook example is “computer”: a person who calculates in the 1930s, an electronic device by the 1990s.",
    highlights: [
      "Preprocessing and vocabulary building, then one CBOW model per decade, trained on SLURM.",
      "Embedding spaces aligned with orthogonal Procrustes, using anchor words.",
      "Local and global drift from cosine similarity, plus trajectories and nearest neighbours.",
      "PCA and t-SNE views, documented step by step.",
    ],
    detail: "A course project with a protected main branch and pull requests.",
    stack: ["Python", "PyTorch", "scikit-learn", "SLURM"],
    links: [
      { label: "Repository", href: "https://github.com/carminecoppola/diachronic_text_analysis", external: true },
    ],
  },
  {
    id: "pyspark",
    title: "PySpark SMS spam classifier",
    period: "Open source",
    kind: "Big data",
    summary: "A scalable spam classifier built as Spark ML pipelines and deployed on a Hadoop cluster.",
    context:
      "Billions of SMS messages are sent every day, so spam filtering has to scale. Inspired by an open Spark course, it uses HDFS and YARN for storage and resources, and MLlib for the model.",
    highlights: [
      "A one-command setup script that unpacks the project, creates the environment and asks whether to run plain Python or spark-submit.",
      "Tested on a managed Hadoop and Spark cluster.",
    ],
    detail: "A course project on distributed machine learning.",
    stack: ["PySpark", "MLlib", "Hadoop", "YARN"],
    links: [
      { label: "Repository", href: "https://github.com/carminecoppola/pyspark-sms-spam-detector", external: true },
    ],
  },
  {
    id: "openusage",
    title: "OpenUsage for VS Code",
    period: "Open source",
    kind: "Developer tools",
    summary: "A VS Code extension that shows spend, limits and usage of AI coding tools without leaving the editor.",
    context:
      "OpenUsage runs in the macOS menu bar; many developers live in VS Code. The extension reads its local usage endpoint and shows it where the work happens.",
    highlights: [
      "Status bar summary, plus an executive dashboard and a compact one.",
      "Provider tabs, limit bars, reset countdowns and usage trends.",
      "Configurable endpoint and refresh interval, packaged as a VSIX by GitHub Actions.",
    ],
    detail: "It does not collect data itself: it needs the OpenUsage app running.",
    stack: ["TypeScript", "VS Code API", "GitHub Actions"],
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
