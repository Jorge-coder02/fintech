# Funcionalidades que tiene la página

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

**AOS**
**Styled Components**
**Login Modal**
**MenuMobile**
**Figuras flotantes (visuales)**
