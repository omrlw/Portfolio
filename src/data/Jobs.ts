/**
 * Interface representing work experience details.
 *
 * @property {string} title - The job title of the position.
 * @property {string} startDate - The start date of the position in the format YYYY-MM-DD.
 * @property {string} [endDate] - The end date of the position in the format YYYY-MM-DD.
 *                                Optional, can be omitted if the position is current.
 * @property {string} company - The name of the company where the position was held.
 * @property {string} location - The geographic location of the company (e.g., city, state, country).
 * @property {string} description - A brief description of the roles and responsibilities
 *                                   associated with the position.
 * @property {string[]} goals - A list of professional goals achieved or targeted during the position.
 * @property {boolean} currentJob - Indicates whether the position is the current job.
 */
interface WorkExperience {
    title: string;
    startDate: string;
    endDate?: string;
    company: string;
    location: string;
    description: string;
    goals: string[];
    currentJob: boolean;
}

/**
 * Represents an array of work experiences.
 *
 * Each work experience object contains details about
 * a job position including the title, start and end dates,
 * company name, job location, description of the role,
 * a list of goals or achievements, and a flag indicating
 * if it is the current job.
 *
 * @type {Array<Object>}
 * @property {string} title - The job title.
 * @property {string} startDate - The start date of the job in YYYY-MM-DD format.
 * @property {string} [endDate] - The end date of the job in YYYY-MM-DD format. Optional for current jobs.
 * @property {string} company - The name of the company.
 * @property {string} location - The location of the job.
 * @property {string} description - A brief description of the job responsibilities.
 * @property {Array<string>} goals - A list of goals or achievements within the job.
 * @property {boolean} currentJob - A flag indicating if the job is the current one.
 */
const workExperience:WorkExperience[] = [
    {
        title: "Fundador / Desarrolladorr",
        startDate: "2024-03-10",
        company: "Simple Web Peru",
        location: "Arequipa",
        description: "Developed and maintained web applications using React, NextJs, and Tailwind CSS.",
        goals: [
            "Implementación de sitios WordPress + Elementor/WooCommercepara MYPES, con WhatsApp Business, Yape/Plin, formularios y SEO local.",
            "Desarrollo de CRM propio (React 18 + Vite + Tailwind · Node/Express · PostgreSQL · JWT) con endpoints REST y roles básicos.",
            "DevOps: AWS Lightsail, Nginx (reverse proxy), PM2, certificados SSL,gestión de dominios y DNS. Monitoreo y respaldo.",
        ],
        currentJob: true,
    },
    {
        title: "Técnico Auxiliar / Ventas",
        startDate: "2025-02-05",
        endDate: "2025-05-10",
        company: "R Store Perú",
        location: "Arequipa",
        description: "Developed and maintained web applications using React, NodeJs, and MongoDB.",
        goals: [
            "Atención al cliente, configuración inicial de equipos y soporte postventa."
        ],
        currentJob: false,
    },
    {
        title: "Técnico Informático",
        startDate: "2022-04-06",
        endDate: "2025-05-10",
        company: "Independiente",
        location: "Arequipa",
        description: "Developed and maintained web applications using React, NodeJs, and MongoDB.",
        goals: [
            "Soporte TI: instalación y afinamiento de Windows 10/11, MacOS yUbuntu, ofimática (O365/Google Workspace), impresoras yperiféricos."
        ],
        currentJob: true,
    },
];
export default workExperience;