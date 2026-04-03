export type Dashboard = {
  id: string;
  title: string;
  description: { es: string; en: string };
  tags: string[];
  images: string[];
  coverImage: string;
  highlights: { es: string[]; en: string[] };
  clickHint: { es: string; en: string };
};

export const dashboards: Dashboard[] = [
  {
    id: "commercial-support",
    title: "Analysis of Commercial Support & Servicing",
    description: {
      es: "Dashboard multi-página para análisis de soporte comercial en una aerolínea. Monitorea cumplimiento de SLA, performance de agentes, tasa de reincidencia y la correlación entre ventas y casos de soporte.",
      en: "Multi-page dashboard for commercial support analysis at an airline. Monitors SLA compliance, agent performance, recurrence rate, and the correlation between sales and support cases.",
    },
    tags: ["Power BI", "DAX", "SLA Analysis", "KPIs", "Tecnología", "Servicing", "Marketing"],
    images: [
      "/images/dashboards/commercial-support-1.png",
      "/images/dashboards/commercial-support-2.png",
      "/images/dashboards/commercial-support-3.png",
      "/images/dashboards/commercial-support-4.png",
      "/images/dashboards/commercial-support-5.png",
    ],
    coverImage: "/images/dashboards/commercial-support-1.png",
    highlights: {
      es: [
        "5 páginas interactivas con filtros cruzados por mes, agencia y prioridad",
        "KPIs ejecutivos: SLA 40.5%, CSAT 3.03/5, Tasa Reincidencia 28.7%, $166M en ventas",
        "Scatter plot de Ventas vs. Casos de Soporte para identificar agencias críticas",
      ],
      en: [
        "5 interactive pages with cross-filters by month, agency and priority",
        "Executive KPIs: SLA 40.5%, CSAT 3.03/5, Recurrence Rate 28.7%, $166M in sales",
        "Sales vs. Support Cases scatter plot to identify critical agencies",
      ],
    },
    clickHint: {
      es: "Click en la imagen para ver en pantalla completa",
      en: "Click on the image to view full screen",
    },
  },
  {
    id: "financiero-dizteku",
    title: "Dashboard Financiero — DIZTEKU",
    description: {
      es: "Dashboard de análisis de beneficios financieros para empresa de distribución. Vista General y comparativa LY YTD con drill-down por país, segmento de cliente y marca.",
      en: "Financial benefits analysis dashboard for a distribution company. General view and LY YTD comparison with drill-down by country, customer segment and brand.",
    },
    tags: ["Power BI", "DAX", "Financial Analysis", "YTD", "Benchmarking"],
    images: [
      "/images/dashboards/financiero-dizteku-1.jpg",
      "/images/dashboards/financiero-dizteku-2.jpg",
    ],
    coverImage: "/images/dashboards/financiero-dizteku-1.jpg",
    highlights: {
      es: [
        "$102M ingresos · $18M beneficio neto · 17.11% margen — vistas General y LY YTD",
        "Drill-down por País (Chile, Perú, México, Ecuador, Colombia), Segmento y Marca",
        "Semáforo de margen por fila: verde ≥ objetivo, rojo < objetivo",
      ],
      en: [
        "$102M revenue · $18M net profit · 17.11% margin — General and LY YTD views",
        "Drill-down by Country (Chile, Peru, Mexico, Ecuador, Colombia), Segment and Brand",
        "Row-level margin traffic light: green ≥ target, red < target",
      ],
    },
    clickHint: {
      es: "Click en la imagen para ver en pantalla completa",
      en: "Click on the image to view full screen",
    },
  },
];
