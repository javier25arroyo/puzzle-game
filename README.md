# 🧩 Puzzle Game - Rompecabezas

Juego de rompecabezas interactivo desarrollado con Angular 19.

## 🎮 Demo en Vivo

Visita: [https://javier25arroyo.github.io/puzzle-game/](https://javier25arroyo.github.io/puzzle-game/)

## ✨ Características

- 🎨 Múltiples imágenes para elegir
- 🎯 3 niveles de dificultad (3x3, 4x4, 5x5)
- 📊 Contador de movimientos
- 🏆 Detección automática de victoria
- 📱 Diseño responsive para todos los dispositivos
- 🎨 Interfaz moderna y atractiva

## 🚀 Desarrollo Local

### Requisitos Previos

- Node.js 18 o superior
- npm

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/javier25arroyo/puzzle-game.git
cd puzzle-game

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm start
```

La aplicación estará disponible en `http://localhost:4200/`

## 🏗️ Build de Producción

```bash
# Build optimizado para producción
npm run build

# Los archivos se generarán en dist/rompecabezas/browser/
```

## 📦 Deploy Automático

Este proyecto usa GitHub Actions para deploy automático a GitHub Pages:

1. Cada push a la rama `main` dispara el workflow
2. Se compila la aplicación con optimizaciones de producción
3. Se despliega automáticamente en `gh-pages`
4. La página se actualiza en minutos

### Configuración Manual de GitHub Pages

Si es necesario configurar manualmente:

1. Ve a Settings → Pages
2. Source: Deploy from a branch
3. Branch: `gh-pages` / `root`
4. Save

## 🛠️ Tecnologías

- Angular 19
- TypeScript
- SCSS
- RxJS
- GitHub Actions
- GitHub Pages

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👤 Autor

**Javier Arroyo**
- GitHub: [@javier25arroyo](https://github.com/javier25arroyo)

---

¡Disfruta jugando! 🎉
