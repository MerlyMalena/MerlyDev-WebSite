<div align="center">

  # 🍯 `MerlyDev`
  ### *Portafolio Web*

  <p align="center">
    <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Honeybee.png" alt="Honeybee" width="70" height="70" />
  </p>

  <p align="center">
    <strong>Portafolio personal interactivo.</strong>
  </p>

  <p align="center">
    <a href="#-características">Características</a> •
    <a href="#-stack-tecnológico">Stack Tecnológico</a> •
    <a href="#-secciones">Secciones</a> •
    <a href="#-instalación-y-uso">Instalación</a> •
    <a href="#-estructura">Estructura</a> •
    <a href="#-contacto">Contacto</a>
  </p>

  <!-- Badges con la paleta de colores del portafolio (#85984e, #e59828, #323e11) -->
  <p align="center">
    <img src="https://img.shields.io/badge/React_18-85984e?style=for-the-badge&logo=react&logoColor=white" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-323e11?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-e59828?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Framer_Motion-6c7c39?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/Vite-f3dc99?style=for-the-badge&logo=vite&logoColor=323e11" alt="Vite" />
  </p>

</div>

---

> 🐝 *"Al igual que el proceso natural de una abeja que construye su colmena celda por celda, desarrollo cada proyecto cuidando la estructura, la legibilidad y la experiencia de quien lo utiliza."*

---

## 🌻 Características Principales

- 🎨 **Estética Visual Cálida y Única:** Fondo paisajístico en acuarela (*Watercolor Meadow*), marcos hexagonales dorados y una paleta inspirada en verde oliva, salvia, miel y bosque.
- ⏳ **Pantalla de Carga Temática:** Celda de colmena animada con la frase *"Cargando ideas..."*.
- 🐝 **Hero Interactivo:** Abeja en *Pixel Art* animada con efecto de escritura tipo terminal consola (`> MerlyDev.init()`).
- 🏆 **Carrusel de Retos & Hackatones:** 
  - Ciclo automático de 10 segundos con transición suave en *fade* y barra de progreso dorada.
  - Marco fotográfico en forma de celda hexagonal con efecto zoom.
  - Créditos a entidades organizadoras, nombre de equipo (*Mecaflow*, *Equipo Pulse*) y cantidad de participantes.
- 📄 **Páginas de Detalle Dedicadas:** Vistas completas e independientes para Proyectos, Artículos del Blog y Competencias (con lista individual de integrantes y reconocimientos).
- 🎵 **Reproductor Lo-Fi Integrado:** Música ambiental relajante permanente con controles de audio accesibles.
- 📱 **Diseño 100% Responsivo:** Adaptado con precisión milimétrica para móviles, tablets y monitores ultrawide.
- ⚡ **Rendimiento Ultrarrápido:** Compilado con Vite, TypeScript estricto y animaciones fluidas a 60 FPS con Framer Motion.

---

## 🛠️ Stack Tecnológico

| Capa | Tecnologías |
| :--- | :--- |
| **Frontend Framework** | [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| **Estilos & UI** | [Tailwind CSS](https://tailwindcss.com/) + CSS Grid + SVG Shapes |
| **Animaciones & Transiciones** | [Framer Motion](https://www.framer.com/motion/) |
| **Iconografía** | [Lucide React](https://lucide.dev/) |
| **Bundler & Tooling** | [Vite](https://vitejs.dev/) + PostCSS + ESLint |
| **Música & Audio** | HTML5 Audio API con estado persistente |

---

## 🧭 Secciones de la Colmena

```text
🍯 MerlyDev
 ├── 1. 🐝 Inicio (Hero)               ──> Comando terminal interactivo & Pixel Bee
 ├── 2. 📖 Sobre Mí (About)            ──> Tarjeta de identidad, bio y fotografía
 ├── 3. ✍️ Blog & Publicaciones        ──> Artículos técnicos con páginas de lectura
 ├── 4. 💻 Portafolio de Proyectos     ──> Catálogo con filtros y vistas detalladas
 ├── 5. 🏆 Hackatones & Competencias   ──> Carrusel hexagonal & fichas de retos y equipos
 ├── 6. ⚡ Habilidades Técnicas        ──> Dominio en C#, Java, SQL Server, Git y Cloud
 └── 7. 📬 Contacto & Redes            ──> Canales directos y formulario
```

##  Estructura del Código

```text
MerlyDev/
├── public/
│   └── images/                     # 📸 Imágenes locales del portafolio
│       ├── competencias/           # Fotos de hackatones (Defensor del Pueblo, etc.)
│       ├── proyectos/              # Capturas de tus proyectos
│       └── merly.jpg               # Tu foto de perfil en "Sobre Mí"
├── src/
│   ├── components/                 # Componentes visuales modulares
│   │   ├── About.tsx               # Tarjeta bio + foto
│   │   ├── AudioPlayer.tsx         # Reproductor de música Lo-Fi
│   │   ├── CompetitionsCarousel.tsx# Carrusel de competencias con celda hexagonal
│   │   ├── Hero.tsx                # Hero con PixelBee y efecto terminal
│   │   ├── HoneycombIcon.tsx       # Icono SVG de celda de colmena
│   │   ├── LoadingScreen.tsx       # Pantalla de carga animada
│   │   ├── Navbar.tsx              # Barra de navegación flotante in-page
│   │   └── Skills.tsx              # Lista de habilidades técnicas
│   ├── data/                       # 🗃️ Datos desacoplados (fácil de editar)
│   │   ├── blogs.ts                # Artículos y publicaciones
│   │   ├── competitions.ts         # Hackatones, equipos y premios
│   │   └── projects.ts             # Proyectos de portafolio
│   ├── pages/                      # Páginas y vistas completas
│   │   ├── Home.tsx                # Página principal
│   │   ├── BlogDetailPage.tsx      # Lectura de artículo
│   │   ├── CompetitionDetailPage.tsx # Vista de reto, equipo y reconocimientos
│   │   └── ProjectDetailPage.tsx   # Ficha completa del proyecto
│   ├── types/                      # Definiciones de TypeScript
│   └── App.tsx                     # Enrutador hash y estructura global
```


## 📬 Contacto & Conexión

<div align="center">

  **¿Tienes una idea, un proyecto o una invitación a un hackatón? ¡Hablemos!**

  [![LinkedIn](https://img.shields.io/badge/LinkedIn-Merly-85984e?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com)
  [![GitHub](https://img.shields.io/badge/GitHub-MerlyDev-323e11?style=for-the-badge&logo=github&logoColor=white)](https://github.com)
  [![Email](https://img.shields.io/badge/Email-contacto-e59828?style=for-the-badge&logo=gmail&logoColor=white)](mailto:contacto@merlymalena2303@hotmail.com)

  <br/>
  
  <sub>Diseñado y desarrollado con dedicación por <strong>Merly</strong> 🐝 • 2026</sub>

</div>
