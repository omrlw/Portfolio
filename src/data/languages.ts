interface Language {
    name: string;
    level: string;
    description: string;
    show: boolean;
}

const languages: Language[] = [
  {
    name: "Español",
    level: "Nativo",
    description: "Habla y escritura fluida a nivel nativo.",
    show: true
  },
  {
    name: "Inglés",
    level: "Intermedio (B1)",
    description: "Comprensión, lectura y comunicación conversacional certificada por Duolingo English Test.",
    show: true
  }
];
export default languages;