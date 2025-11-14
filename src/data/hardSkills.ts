interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "JavaScript",
    description: "Lenguaje principal que utilizo para desarrollo frontend y backend.",
    icon: "javascript"
  },
  {
    name: "React",
    description: "Desarrollo de interfaces modernas y componentes reutilizables.",
    icon: "react"
  },
  {
    name: "Node.js / Express",
    description: "Construcción de APIs REST, autenticación y lógica backend.",
    icon: "nodejs"
  },
  {
    name: "PostgreSQL",
    description: "Base de datos relacional que uso en producción en mi CRM.",
    icon: "postgresql"
  },
  {
    name: "AWS Lightsail",
    description: "Despliegue de aplicaciones, gestión de VPS, dominios y SSL.",
    icon: "aws"
  },
  {
    name: "Nginx",
    description: "Reverse proxy, configuración de dominios y rutas en producción.",
    icon: "nginx"
  },
  {
    name: "Linux",
    description: "Administración básica de servidores Ubuntu, permisos y procesos.",
    icon: "linux"
  },
  {
    name: "WordPress / Elementor",
    description: "Desarrollo de sitios para MYPES con WooCommerce y SEO local.",
    icon: "wordpress"
  },
  {
    name: "Git & GitHub",
    description: "Control de versiones, ramas y despliegues.",
    icon: "github-fill"
  }
];
export default hardSkills;