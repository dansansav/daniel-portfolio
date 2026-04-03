export type Certificate = {
  id: string;
  name: string;
  institution: string;
  year: number;
  credentialUrl?: string;
  badgeImage?: string; // ruta en /public/images/certificates/
  category: "BI" | "Analytics" | "Python" | "Management" | "Other";
};

export const certificates: Certificate[] = [
  {
    id: "ia-generativa-udemy",
    name: "Curso Completo de IA Generativa: ChatGPT, Midjourney",
    institution: "Udemy",
    year: 2026,
    credentialUrl: "/images/certificates/curso-udemy-ia.pdf",
    category: "Other",
  },
  {
    id: "ai-associate-salesforce",
    name: "AI Associate",
    institution: "Salesforce",
    year: 2026,
    credentialUrl: "/images/certificates/ai-associate-salesforce.pdf",
    category: "Other",
  },
];
