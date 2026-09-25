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
  role: string;
  year: string;
  desc: string;
  link?: string;
};

export const projects: Project[] = [
  {
    n: "01",
    title: "Sistema de gestión para boticas",
    role: "Full-stack · Base de datos · Tiempo real",
    year: "2026",
    desc: "Sistema privado para un cliente real: punto de venta, inventario por lotes, roles y permisos, caja y créditos, alertas de stock/vencimientos, analítica y un dashboard en tiempo real.",
  },
  {
    n: "02",
    title: "María Luisa Nutricionista",
    role: "Frontend · Backend · Base de datos",
    year: "2026",
    desc: "Plataforma web comercial para servicios de nutrición preventiva, con tienda, reservas y autenticación segura.",
    link: "https://nutricionistamarialuisa.vercel.app/",
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
    items: ["Next.js / React", "TypeScript", "Tailwind CSS"],
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
    items: ["Node.js", "APIs REST", "Autenticación con JWT", "Validación con Zod"],
  },
  {
    icon: "git",
    title: "Herramientas",
    level: "Nivel intermedio",
    items: ["Git / GitHub", "Vercel", "Power BI"],
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
    title: "Nombre del proyecto o puesto",
    org: "Cliente o empresa",
    points: [
      "Describe brevemente qué hiciste y con qué tecnologías.",
      "Puedes agregar más líneas o más entradas en app/lib/data.ts.",
    ],
  },
];