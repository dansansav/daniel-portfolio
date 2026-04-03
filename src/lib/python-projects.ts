export type PythonProject = {
  id: string;
  title: string;
  description: { es: string; en: string };
  longDescription: { es: string; en: string };
  tags: string[];
  images: string[];
  techniques: string[];
  libraries: string[];
};

export const pythonProjects: PythonProject[] = [
  {
    id: "eda-countries",
    title: "EDA — Países del Mundo / World Countries",
    description: {
      es: "EDA completo sobre dataset geográfico de 252 países: correlaciones, detección de outliers y comparativas de crecimiento poblacional entre países hispanohablantes.",
      en: "Complete EDA on a geographic dataset of 252 countries: correlations, outlier detection and population growth comparisons among Spanish-speaking countries.",
    },
    longDescription: {
      es: "Exploración sistemática de un dataset con 19 variables geográficas. Análisis de valores nulos, matrices de correlación con heatmap, filtrado de países por idioma, detección de outliers mediante 2σ (identificando Brasil y USA), y visualización mejorada con segmentación por rangos de área.",
      en: "Systematic exploration of a dataset with 19 geographic variables. Analysis of null values, correlation matrices with heatmap, language-based country filtering, outlier detection using 2σ (identifying Brazil and USA), and improved visualization with area range segmentation.",
    },
    tags: ["EDA", "Pandas", "Seaborn", "Matplotlib", "Outlier Detection"],
    images: [
      "/images/python/eda-1.png",
      "/images/python/eda-2.png",
      "/images/python/eda-3.png",
    ],
    techniques: [
      "Correlation Matrix (Heatmap)",
      "Outlier Detection — 2σ method",
      "Population Growth Analysis",
      "Data Filtering & Segmentation",
    ],
    libraries: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Statsmodels"],
  },
  {
    id: "estadistica-felicidad",
    title: "Análisis Estadístico de Felicidad / Happiness Statistical Analysis",
    description: {
      es: "Análisis estadístico inferencial de índices de felicidad segmentado por género y tiempo. Correlaciones de Pearson y Spearman, intervalos de confianza al 95% y estadísticos descriptivos completos.",
      en: "Inferential statistical analysis of happiness indices segmented by gender and time. Pearson and Spearman correlations, 95% confidence intervals and comprehensive descriptive statistics.",
    },
    longDescription: {
      es: "Análisis profundo que calcula media, mediana, varianza, desviación estándar, asimetría, curtosis e intervalos de confianza al 95%. Compara la distribución de felicidad entre hombres y mujeres mediante histogramas, boxplots y scatter plots. Incluye correlaciones de Pearson y Spearman.",
      en: "In-depth analysis calculating mean, median, variance, standard deviation, skewness, kurtosis and 95% confidence intervals. Compares happiness distribution between men and women using histograms, boxplots and scatter plots. Includes Pearson and Spearman correlations.",
    },
    tags: ["Statistics", "SciPy", "Inferential Analysis", "Hypothesis Testing"],
    images: [
      "/images/python/felicidad-0.png",
      "/images/python/felicidad-1.png",
      "/images/python/felicidad-2.png",
      "/images/python/felicidad-3.png",
      "/images/python/felicidad-4.png",
      "/images/python/felicidad-5.png",
      "/images/python/felicidad-6.png",
      "/images/python/felicidad-7.png",
      "/images/python/felicidad-8.png",
    ],
    techniques: [
      "Pearson & Spearman Correlation",
      "Confidence Intervals — 95%",
      "Descriptive Statistics",
      "Distribution Analysis",
    ],
    libraries: ["Pandas", "NumPy", "SciPy", "Seaborn", "Matplotlib"],
  },
];
