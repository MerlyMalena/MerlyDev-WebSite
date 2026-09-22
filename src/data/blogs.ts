import { BlogPost } from '../types/blog';

export const BLOGS_DATA: BlogPost[] = [
  {
    id: 'arquitectura-modular-react',
    title: 'Arquitectura Limpia en React: Estructura Modular sin Complicaciones',
    summary: 'Cómo organizar componentes, hooks y servicios para que tu código crezca de manera sostenible sin volverse un laberinto.',
    date: '18 Sep 2026',
    readTime: '5 min de lectura',
    tags: ['React', 'TypeScript', 'Clean Code'],
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80',
    content: `A medida que una aplicación de React crece, es muy fácil caer en la trampa de componentes gigantescos que hacen de todo: llamadas a APIs, lógica de negocio y presentación visual.

### 1. El principio de responsabilidad única
Cada componente debe responder a una sola pregunta: ¿cómo debe verse este fragmento de interfaz? Si un componente tiene más de 150 líneas, es un buen indicador de que necesita extraer lógica a *Custom Hooks*.

### 2. Separar datos de la vista
Tener una carpeta \`services/\` o \`data/\` desacoplada permite que la interfaz sea un reflejo puro del estado, facilitando testing, refactorización y escalabilidad.

### 3. TypeScript como documentación viva
Al tipar estrictamente tus props y modelos, cualquier desarrollador nuevo (¡o tú en 6 meses!) sabrá exactamente qué datos entran y salen.`
  },
  {
    id: 'el-arte-del-css-organico',
    title: 'El Arte del Diseño Web Orgánico: Creando Interfaces con Calidez y Personalidad',
    summary: 'Saliendo de la monotonía de las plantillas genéricas a través de tipografías editoriales, paletas botánicas y micro-interacciones.',
    date: '10 Sep 2026',
    readTime: '4 min de lectura',
    tags: ['UI/UX', 'CSS', 'Diseño'],
    coverImage: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=1000&q=80',
    content: `Durante mucho tiempo la web ha estado dominada por diseños corporativos fríos, grises y predecibles. El diseño orgánico busca devolverle carácter y alma a la experiencia digital.

### La magia de las tipografías con serif redondeadas
Fuentes como **Young Serif** o **Fraunces** evocan calidez, historia y cercanía. Al combinarlas con paletas de tonos tierra, verdes pradera y ocres miel, la experiencia se transforma inmediatamente en un espacio acogedor.

### Micro-interacciones sutiles
No se trata de animar todo en la pantalla, sino de premiar la curiosidad del usuario: una pequeña abeja que flota suavemente, botones con peso táctil y transiciones que respiran.`
  },
  {
    id: 'typescript-estricto-ventajas',
    title: 'TypeScript Estricto: Por qué los Tipos Fuertes te Ahorran Horas de Depuración',
    summary: 'Descubre cómo aprovechar al máximo el compilador de TypeScript para atrapar errores antes de llegar a producción.',
    date: '28 Ago 2026',
    readTime: '6 min de lectura',
    tags: ['TypeScript', 'Desarrollo', 'Buenas Prácticas'],
    coverImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=80',
    content: `Escribir código con \`strict: true\` en TypeScript puede sentirse desafiante al inicio, pero es la mejor inversión para cualquier proyecto a largo plazo.

### Errores en tiempo de compilación vs. en tiempo de ejecución
El costo de arreglar un error tipográfico en tu editor toma 5 segundos. Arreglar un \`undefined is not a function\` en producción puede costar horas de caída de servicio.

### Interfaces vs Types
Aprender a modelar tus entidades con \`interface\` para extensibilidad y \`type\` para uniones de tipos te dará una base arquitectónica impenetrable.`
  },
  {
    id: 'optimizacion-vite-rendimiento',
    title: 'De Cero a 100 con Vite 6: Trucos de Optimización de Carga',
    summary: 'Aprende cómo optimizar bundles, comprimir assets y lograr tiempos de carga por debajo de 1 segundo.',
    date: '15 Ago 2026',
    readTime: '5 min de lectura',
    tags: ['Vite', 'Performance', 'WebDev'],
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80',
    content: `Vite ha revolucionado por completo el desarrollo frontend moderno eliminando la lentitud del empaquetado tradicional.

### Lazy loading y code splitting
Al separar rutas y componentes pesados con \`React.lazy\` y \`Suspense\`, el navegador solo descarga lo que el usuario necesita en la pantalla actual.

### Formatos modernos de imagen
Reemplazar PNGs pesados por SVG y WebP optimizados puede reducir el peso de tu web en un 80% al instante.`
  }
];

