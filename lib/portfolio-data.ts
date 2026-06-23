export type Experience = {
  company: string;
  title: string;
  description: string;
  tags: string[];
};

export type Project = {
  title: string;
  technologies: string[];
  description: string;
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

// Update these two profile URLs when you have the exact public links.
export const profileLinks = {
  email: "akulkarni456@gatech.edu",
  phone: "470-586-2849",
  github: "https://github.com/aaryankool19",
  linkedin: "https://www.linkedin.com/in/aaryan-kulkarn1"
};

export const socialLinks = [
  { label: "Resume", href: "/Aaryan_Master.pdf", download: true },
  { label: profileLinks.github ? "GitHub" : "GitHub (add URL)", href: profileLinks.github || "#contact" },
  { label: profileLinks.linkedin ? "LinkedIn" : "LinkedIn (add URL)", href: profileLinks.linkedin || "#contact" },
  { label: "Contact", href: `mailto:${profileLinks.email}` }
];

export const experiences: Experience[] = [
  {
    company: "Cloud Supply Chain Solutions",
    title: "Software Engineering Intern",
    description:
      "Built real-time AI driver safety monitoring with Python, OpenCV, live video processing, a dispatcher dashboard, fatigue-risk detection, alerts, camera metadata, clickable event snapshots, and Ollama-powered local AI summaries.",
    tags: ["Python", "OpenCV", "Video AI", "Dashboards", "Ollama"]
  },
  {
    company: "Georgia Tech Compound Semiconductor Products",
    title: "Incoming Undergraduate Research Assistant",
    description:
      "Supporting compound semiconductor product development through characterization, electrical testing, materials and device physics, lab documentation, and technical reporting.",
    tags: ["Semiconductors", "Testing", "Device Physics", "Research"]
  },
  {
    company: "Vizun",
    title: "Co-Founder",
    description:
      "Co-founded an AR interior visualization startup with 20+ materials and layouts, market validation, financial modeling, $2,700+ seed funding, and 1st place at TiE Atlanta.",
    tags: ["AR", "Product", "Market Validation", "Startup Strategy"]
  }
];

export const projects: Project[] = [
  {
    title: "EvoFabric — Self-Adaptive RISC-V FPGA Compute Fabric",
    technologies: ["SystemVerilog", "RISC-V", "FPGA", "Verification", "GTKWave"],
    description:
      "Simulation-first RISC-V-style FPGA fabric with MMIO accelerator registers, runtime selection, safety fallback logic, performance counters, Popcount, CRC32, FIR, matrix-multiply accelerators, automated testbenches, and fault injection."
  },
  {
    title: "TinyRV32 — Modular RV32I Single-Cycle CPU Core",
    technologies: ["SystemVerilog", "RISC-V", "Digital Design", "Icarus Verilog", "GTKWave"],
    description:
      "Modular RV32I CPU core with PC logic, instruction memory, ALU datapath, register file, branch control, decode/control logic, and waveform-based verification."
  },
  {
    title: "Scooter Distance Warning System",
    technologies: ["Arduino", "C++", "HC-SR04"],
    description:
      "Scooter-mounted obstacle detection prototype with ultrasonic sensing, adaptive buzzer alerts, 2-400 cm distance measurement, and 25+ proximity tests."
  },
  {
    title: "Monte Carlo Engineering Simulation Lab",
    technologies: ["Python", "NumPy", "SciPy", "Matplotlib"],
    description:
      "Monte Carlo simulations for numerical integration, turbine blade reliability, projectile variation, failure probability, convergence behavior, and risk visualization."
  }
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Hardware / RTL",
    skills: [
      "SystemVerilog",
      "Verilog",
      "RISC-V",
      "FPGA architecture",
      "Digital logic",
      "FSMs",
      "MMIO",
      "Testbenches",
      "VCD waveform debug",
      "Icarus Verilog",
      "GTKWave"
    ]
  },
  {
    title: "AI / Software",
    skills: [
      "Python",
      "C++",
      "OpenCV",
      "Real-time video processing",
      "Object detection",
      "NumPy",
      "SciPy",
      "Matplotlib",
      "Ollama"
    ]
  },
  {
    title: "Embedded / Product",
    skills: [
      "Arduino Uno",
      "HC-SR04",
      "Sensor integration",
      "Circuit debugging",
      "Git/GitHub",
      "VS Code",
      "Arduino IDE"
    ]
  },
  {
    title: "Engineering / Business",
    skills: [
      "Market research",
      "Financial modeling",
      "Startup strategy",
      "Product validation",
      "Technical reporting"
    ]
  }
];
