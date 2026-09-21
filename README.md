# ✨ MerlyDev — Sitio Web y Portafolio Creativo

Espacio web personal moderno, interactivo y organizado, diseñado con **React 18**, **TypeScript**, **Vite**, **Tailwind CSS** y **Framer Motion**.

---

## 🚀 Comandos Rápidos

```bash
# Iniciar servidor de desarrollo en local
npm run dev

# Compilar para producción
npm run build

# Previsualizar la compilación de producción
npm run preview
```

---

## 📁 Cómo Organizar y Subir Nuevos Proyectos

Todo el contenido del portafolio está **desacoplado de la interfaz**, lo que te permite actualizarlo sin necesidad de modificar el código visual:

1. Abre el archivo [`src/data/projects.ts`](./src/data/projects.ts).
2. Añade un nuevo bloque con los datos de tu proyecto siguiendo la interfaz:

```typescript
{
  id: 'mi-nuevo-proyecto',
  title: 'Nombre de tu Proyecto',
  shortDescription: 'Descripción breve para la tarjeta principal.',
  fullDescription: 'Descripción detallada que aparecerá al abrir el modal.',
  category: 'frontend', // Opciones: 'frontend' | 'fullstack' | 'mobile' | 'tools'
  image: 'https://...', // URL de imagen o captura
  tags: ['React', 'TypeScript', 'Tailwind CSS'],
  githubUrl: 'https://github.com/tu-usuario/tu-repo',
  liveUrl: 'https://tu-demo.vercel.app',
  featured: true,
  date: '2026',
  highlights: [
    'Punto destacado 1',
    'Punto destacado 2'
  ]
}
```

---

## 🛠️ Cómo Actualizar Habilidades (Tech Stack)

Abre [`src/data/skills.ts`](./src/data/skills.ts) y edita o agrega tus tecnologías por categoría (*Frontend*, *Backend*, *Bases de Datos*, *Herramientas*).

---

## 🌐 Cómo Desplegar Gratis en Vercel

1. Sube tu código a un repositorio en **GitHub**.
2. Ve a [Vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub.
3. Haz clic en **"Add New Project"** e importa tu repositorio `MerlyDev`.
4. Vercel detectará automáticamente que es un proyecto **Vite** y lo desplegará en segundos con enlace HTTPS gratuito y despliegues continuos cada vez que hagas `git push`.

