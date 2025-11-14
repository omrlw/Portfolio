interface Education {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
}

const  education: Education[] = [
    {
        title: "Ciencias de la Computación",
        startDate: "2021-03-05",
        endDate: "",
        school: "Universidad Católica San Pablo",
        location: "Arequipa",
        description: "Formación en algoritmos, estructuras de datos, arquitectura de computadoras y desarrollo de software. Complementado con experiencia práctica en desarrollo full-stack y DevOps.",
        currentUni: true,
    },
    {
        title: "Inglés Supertintensivo",
        startDate: "2024-06-04",
        endDate: "2025-02-10",
        school: "Centro Cultural Peruano Norteamericano",
        location: "Arequipa",
        description: "Programa superintensivo enfocado en comunicación avanzada, comprensión auditiva y producción escrita en inglés, alineado al estándar CEFR.",
        currentUni: false,
    },
    {
        title: "Educación Secundaria",
        startDate: "2011-03-05",
        endDate: "2020-12-25",
        school: "Colegio Claret",
        location: "Arequipa",
        description: "Formación secundaria integral con enfoque en ciencias, matemáticas y habilidades personales.",
        currentUni: false,
    },
];

export default education;