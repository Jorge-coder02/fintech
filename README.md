# 📌🎨 Growbit (Diseño moderno fintech)

[![Growbit](https://img.shields.io/badge/Status-Complete-green)](https://github.com/Jorge-coder02/fintech)
[![Licencia](https://img.shields.io/badge/License-MIT-blue)](LICENSE)

🔗 **Visitar:** [Ver en vivo](https://growbit.netlify.app/)

## 🚀 Tecnologías Principales
![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-06B6D4?logo=tailwind-css)

## ✨ Características Destacadas
- ✅ Uso de Styled Components
- ✅ Optimización automática de imágenes (WebP)
- ✅ Loading spinner de carga en peticiones al back
- ✅ Diseño responsive con Tailwind CSS

## 📦 Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/Jorge-coder02/fintech.git
cd fintech
```

2. **Instalar dependencias**
 ```bash
 npm install
```
o si usas Yarn
```bash
yarn install
 ```

3. **Ejecutar en modo desarrollo**
  ```bash
  npm run dev
  ```
  ## El servidor estará disponible en:
  ## http://localhost:3000


## 🗂️ Estructura del Proyecto

```plaintext
📦 root
├── 📁 public/                    # Assets estáticos
│   └── 📁 img/                   # 🖼️ Imágenes globales (favicon, banners)
│
├── 📁 src/                       # Código fuente principal
│   ├── 📁 components/            # ⚛️ Componentes reutilizables (UI)
│   │
│   ├── 📁 pages/                 # 🌐 Sistema de rutas
│   │   ├── 📁 pageData/          # 📂 Contenido estático para páginas dinámicas
│   │   └── GenericPage.tsx       # 🖼️ Layout base (genera páginas automáticamente)
│   │
│   └── 📁 utility/               # 🛠️ Utilidades avanzadas
│       ├── CustomScrollRestoration.tsx  # 🔄 Control de scroll al navegar
│       └── PageTitleUpdater.tsx         # ✏️ Actualiza títulos dinámicamente
│
├── 🎨 tailwind.config.js         # ⚙️ Configuración de Tailwind CSS
└── 📜 README.md                  # 📄 Documentación técnica
```


# Versiones

- React: `19.0.0`
- Tailwind CSS: `3.4.17`
- Styled Componentes: `6.1.17`
- React Router: `7.5.1`


## Dependencias de desarrollo:

- postcss: `8.3.0`
- eslint: `9.19.0`
- vite: `6.1.0`


# Funcionalidades en detalle

### /Utility

- ScrollRestoration:
  Componente de lógica que fuerza el scroll al inicio (0, 0) al cambiar de ruta.
  Se utiliza en App.tsx antes de las <Routes>

- PageTitleUpdater:
  Componente de lógica que actualiza el título de la página al cambiar de ruta.
  Contiene un objeto con la '/ruta: Título'

### /pages

- GenericPage:
  Componente que guarda la estructura/plantilla de una página que posteriormente la usará como _layout_.
  Esta nueva página que usará la plantilla también podrá añadir nuevo contenido fuera de este Layout.
  Se utiliza para la generación de múltiples páginas en poco tiempo, guardando una estructura parecida.


### Otras funcionalidades:

**AOS (animaciones)**<br>
**Styled Components**<br>
**Login Modal**<br>
**MenuMobile (responsive)**<br>
**Figuras flotantes (visuales)**<br>
**React Suspense (lazy load de componentes)**<br>
