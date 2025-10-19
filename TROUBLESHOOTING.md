# 🔧 Solución: README.md en lugar del Juego

## ❌ Problema
Cuando visitas https://javier25arroyo.github.io/puzzle-game/ ves el README.md en lugar del juego.

## 🎯 Causa
GitHub Pages está configurado para leer de la rama incorrecta o la carpeta incorrecta.

## ✅ Solución (Paso a Paso)

### 1. Verificar Configuración de GitHub Pages

1. Ve a tu repositorio: https://github.com/javier25arroyo/puzzle-game
2. Click en **Settings** (⚙️)
3. En el menú lateral, busca **Pages**
4. Verifica la configuración:

   **DEBE ESTAR ASÍ:**
   ```
   Source: Deploy from a branch
   Branch: gh-pages  /  (root)
   ```

   **SI ESTÁ ASÍ (INCORRECTO):**
   ```
   Source: Deploy from a branch
   Branch: main  /  (root)  ← ESTO ES INCORRECTO
   ```

5. Si está en `main`, cámbialo a `gh-pages` y guarda

### 2. Ejecutar el Workflow Manualmente

1. Ve a la pestaña **Actions**
2. En el lado izquierdo, click en "Deploy to GitHub Pages"
3. Click en el botón **Run workflow** (derecha)
4. Selecciona la rama `main`
5. Click **Run workflow** (verde)

### 3. Esperar y Verificar

1. Espera 2-3 minutos a que termine el workflow
2. Verás un ✅ verde cuando termine
3. Espera 2 minutos más para que GitHub Pages actualice
4. Visita: https://javier25arroyo.github.io/puzzle-game/

### 4. Si Aún No Funciona: Limpiar la Rama gh-pages

```bash
# En tu terminal local:
git checkout gh-pages
git rm -rf .
git commit -m "Limpiar rama gh-pages"
git push origin gh-pages --force

# Volver a main
git checkout main

# Ejecutar workflow manualmente desde GitHub Actions
```

## 🔍 Verificación Rápida

### Revisar la Rama gh-pages

1. En GitHub, cambia a la rama `gh-pages` (selector de ramas arriba)
2. **DEBERÍAS VER:**
   - index.html
   - 404.html
   - main-XXXXX.js
   - polyfills-XXXXX.js
   - styles-XXXXX.css
   - assets/ (carpeta)
   - .nojekyll

3. **NO DEBERÍAS VER:**
   - README.md
   - src/
   - package.json
   - angular.json

Si ves los archivos del repositorio (README.md, src/, etc.), el problema es que el workflow no se ejecutó correctamente.

## 📋 Checklist de Configuración

- [ ] GitHub Pages configurado en rama `gh-pages` (no `main`)
- [ ] Workflow ejecutado exitosamente (✅ verde en Actions)
- [ ] La rama `gh-pages` contiene archivos del build (index.html, etc.), no del repo
- [ ] Esperaste 2-5 minutos después del deploy
- [ ] Limpiar cache del navegador (Ctrl+F5 o Ctrl+Shift+R)

## 🚀 Comando Rápido (Terminal)

```bash
# Hacer push para forzar nuevo deploy
git add .
git commit -m "Forzar nuevo deploy"
git push origin main

# Esperar 3-5 minutos y visitar:
# https://javier25arroyo.github.io/puzzle-game/
```

## 💡 Verificación desde Terminal

Puedes verificar qué está publicado con:

```bash
# Ver el contenido de la rama gh-pages
git ls-remote --heads origin gh-pages

# O clonar solo esa rama
git clone -b gh-pages https://github.com/javier25arroyo/puzzle-game.git temp-check
cd temp-check
ls -la
```

Deberías ver `index.html` y los archivos JS/CSS, NO el README.md.

## 📞 Necesitas Ayuda?

Si después de estos pasos aún ves el README.md:

1. Comparte el log del workflow de Actions (última ejecución)
2. Comparte screenshot de la configuración de Pages
3. Comparte qué archivos ves en la rama `gh-pages`

---

✨ **Resumen:** El problema es que GitHub Pages está leyendo de `main` en lugar de `gh-pages`. Cambia la configuración a `gh-pages` y ejecuta el workflow manualmente.
