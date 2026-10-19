// ============================================================================
// Datos del portafolio. Edita aquí para actualizar el contenido del sitio
// sin tocar los componentes.
// ============================================================================

export const profile = {
  name: "Conde Palomino Brayan",
  shortName: "Brayan Conde",
  role: "Desarrollador Full Stack",
  roles: [
    "Desarrollador Full Stack",
    "Ingeniero de Sistemas en formación",
    "Diseñador de bases de datos",
  ],
  location: "Lima, Perú",
  email: "StardustB28@hotmail.com",
  whatsapp: "+51933233888",
  whatsappLink: "https://wa.me/+51933233888",
  github: "https://github.com/stardustb28-2003",
  linkedin:
    "https://www.linkedin.com/in/brayan-aldair-conde-palomino-292a5b399/",
  lead: "Especializado en el desarrollo full-stack y gestión de bases de datos, con enfoque en la ingeniería de software y la preparación de datos para inteligencia de negocio.",
};

export type Project = {
  n: string;
  title: string;
  tech: string;
  desc: string;
  link?: string;
};

export const projects: Project[] = [
  {
    n: "01",
    title: "Sistema de gestión para boticas",
    tech: "Next.js · Supabase (Postgres, Realtime) · JWT · Zod",
    desc: "Punto de venta, inventario por lotes, roles y permisos, caja y créditos, alertas de stock y vencimientos, analítica y un dashboard en tiempo real.",
  },
  {
    n: "02",
    title: "Sistema web para clínica dental",
    tech: "HTML · CSS · JavaScript · Chatbot propio",
    desc: "Rediseño completo de la web pública de una clínica dental: identidad visual, cita en línea por WhatsApp, chatbot de atención al paciente, mapa de sede y accesibilidad cuidada.",
  },
  {
    n: "03",
    title: "Landing page profesional",
    tech: "HTML · CSS · JavaScript · Leaflet · Formspree",
    desc: "Landing para una profesional independiente: formulario de contacto, mapa de zonas de atención con datos geográficos abiertos, y diseño responsive con foco en accesibilidad y privacidad de datos.",
    link: "https://maricela-palomino-medina-qf.vercel.app",
  },
  {
    n: "04",
    title: "María Luisa Nutricionista",
    tech: "Next.js · Supabase · TypeScript",
    desc: "Plataforma web comercial para servicios de nutrición preventiva, con tienda, reservas y autenticación segura.",
  },
  {
    n: "05",
    title: "Asistente virtual con IA (en desarrollo)",
    tech: "Python · PySide6 · Claude API · Whisper · Edge TTS",
    desc: "Asistente de escritorio con IA: conversación por voz y texto, control de aplicaciones y música, memoria de largo plazo entre sesiones y un sistema de permisos por niveles para las acciones que ejecuta en el equipo.",
  },
];

export type Skill = {
  icon: "code" | "database" | "layout" | "server" | "git" | "cloud";
  title: string;
  level: string;
  items: string[];
};

export const skills: Skill[] = [
  {
    icon: "layout",
    title: "Frontend",
    level: "Nivel intermedio",
    items: ["Next.js / React", "TypeScript", "JavaScript (vanilla)", "Tailwind CSS"],
  },
  {
    icon: "database",
    title: "Bases de datos",
    level: "Nivel intermedio",
    items: ["Supabase (Postgres, Realtime, Storage)", "Firebase", "Modelado relacional/NoSQL"],
  },
  {
    icon: "server",
    title: "Backend",
    level: "Nivel intermedio",
    items: ["Node.js", "Python", "APIs REST", "Autenticación con JWT", "Validación con Zod", "Integración con APIs de IA"],
  },
  {
    icon: "git",
    title: "Herramientas",
    level: "Nivel intermedio",
    items: ["Git / GitHub", "Vercel", "Power BI", "Leaflet / mapas", "Formspree"],
  },
];

export type TimelineItem = {
  date: string;
  title: string;
  org: string;
  points: string[];
};

export const education: TimelineItem[] = [
  {
    date: "En curso",
    title: "Ingenieria de Sistemas",
    org: "Universidad Autónoma del Perú",
    points: [
      "Reemplaza esto con tus cursos o líneas destacadas.",
      "Ej: bases de datos, arquitectura de software, ingeniería de datos.",
    ],
  },
];

export const experience: TimelineItem[] = [
  {
    date: "2026",
    title: "Desarrollador Freelance",
    org: "Proyectos independientes",
    points: [
      "Diseño y desarrollo de sistemas de gestión a medida (ventas, inventario, roles y permisos) y landing pages profesionales para clientes reales, de principio a fin: base de datos, backend y frontend.",
      "Atención al detalle en seguridad y privacidad de datos (autenticación, minimización de datos personales, buenas prácticas de protección de datos).",
      "Comunicación directa con clientes no técnicos: traducir sus necesidades del negocio en requerimientos claros y entregas funcionales.",
      "Capacidad de adaptar rápidamente una misma base de código a distintos rubros (salud, nutrición, retail) sin perder calidad ni orden.",
    ],
  },
];