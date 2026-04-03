export type SkillCategory = {
  labelEs: string;
  labelEn: string;
  items: string[];
  variant: "accent" | "gold" | "muted";
};

export type ITTool = {
  name: string;
  category: "BI" | "Analytics" | "CRM" | "ETL" | "ERP" | "PM" | "LLM";
};

export const skillCategories: SkillCategory[] = [
  {
    labelEs: "Visualización de Datos",
    labelEn: "Data Visualization",
    items: ["Power BI", "DAX", "Tableau", "Matplotlib", "Seaborn"],
    variant: "accent",
  },
  {
    labelEs: "Python & Análisis",
    labelEn: "Python & Analysis",
    items: ["Pandas", "NumPy", "SciPy", "Statsmodels", "Jupyter Notebook"],
    variant: "gold",
  },
  {
    labelEs: "Analítica Comercial",
    labelEn: "Commercial Analytics",
    items: ["KPIs", "Forecasting", "Statistical Analysis", "Reporting Ejecutivo"],
    variant: "muted",
  },
  {
    labelEs: "Soft Skills",
    labelEn: "Soft Skills",
    items: [
      "Storytelling con datos",
      "Comunicación ejecutiva",
      "Resolución de problemas",
      "Trabajo en equipo",
    ],
    variant: "muted",
  },
];

export const itTools: ITTool[] = [
  { name: "Power BI", category: "BI" },
  { name: "Python + Pandas", category: "Analytics" },
  { name: "Salesforce", category: "CRM" },
  { name: "Excel", category: "Analytics" },
  { name: "Power Query", category: "ETL" },
  { name: "SAP Ariba", category: "ERP" },
  { name: "Jira", category: "PM" },
  { name: "ChatGPT · Claude · Gemini", category: "LLM" },
];

export const categoryColors: Record<ITTool["category"], string> = {
  BI: "#06D6A0",
  Analytics: "#F7B731",
  CRM: "#60A5FA",
  ETL: "#A78BFA",
  ERP: "#FB923C",
  PM: "#F472B6",
  LLM: "#A3E635",
};
