# Hovocodex Technologies — Website

Sitio web profesional para **Hovocodex Technologies**, construido con React + Vite + Three.js.

---

## 🚀 Inicio rápido

### 1. Instalar dependencias

```bash
npm install
```

### 2. Levantar servidor de desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### 3. Construir para producción

```bash
npm run build
```

Los archivos de salida estarán en la carpeta `/dist`.

---

## 📁 Estructura del proyecto

```
hovocodex/
├── index.html                  # Entrada HTML
├── vite.config.js              # Configuración Vite
├── package.json
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx                # Punto de entrada React
    ├── App.jsx                 # Componente raíz — orquesta todo
    ├── styles/
    │   └── global.css          # Variables CSS, animaciones, utilidades
    ├── data/
    │   └── constants.js        # Toda la data: servicios, FAQ, industrias, etc.
    ├── hooks/
    │   ├── useTypingEffect.js  # Hook para efecto typewriter
    │   └── useScrolled.js      # Hook para detectar scroll
    └── components/
        ├── CustomCursor.jsx    # Cursor personalizado con inercia
        ├── Loader.jsx          # Pantalla de carga animada
        ├── Navbar.jsx          # Barra de navegación sticky
        ├── Ticker.jsx          # Banda de texto animada
        ├── ThreeScene.jsx      # Objetos 3D (partículas, esfera, icosaedro)
        ├── Hero.jsx            # Sección principal con canvas 3D
        ├── Services.jsx        # Grid de servicios (6 cards)
        ├── Process.jsx         # Proceso de trabajo (5 pasos)
        ├── Solutions.jsx       # Industrias atendidas (8 sectores)
        ├── Impact.jsx          # Impacto en pequeños negocios + métricas
        ├── CTABanner.jsx       # Llamada a la acción central
        ├── FAQ.jsx             # Preguntas frecuentes (acordeón)
        ├── Footer.jsx          # Pie de página completo
        └── ContactModal.jsx    # Modal de contacto con formulario
```

---

## ✏️ Personalización rápida

### Cambiar textos y datos
Edita únicamente **`src/data/constants.js`** — ahí están centralizados:
- Servicios (`SERVICES`)
- Pasos del proceso (`STEPS`)
- Industrias (`INDUSTRIES`)
- Estadísticas de impacto (`IMPACT_STATS`)
- Preguntas frecuentes (`FAQS`)
- Links de navegación (`NAV_LINKS`)
- Items del ticker (`TICKER_ITEMS`)

### Cambiar colores
Edita las variables CSS en **`src/styles/global.css`**:
```css
:root {
  --accent:  #00f5c4;  /* Verde cibernético */
  --accent2: #7b5cff;  /* Violeta */
  --accent3: #ff4d6d;  /* Rojo (hover cerrar modal) */
}
```

### Conectar formulario de contacto
En **`src/components/ContactModal.jsx`**, localiza `handleSubmit` y reemplaza el `setTimeout` con tu lógica real (Formspree, EmailJS, API propia, etc.):

```js
const handleSubmit = async (e) => {
  e.preventDefault()
  setSending(true)
  // Ejemplo con fetch:
  await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(form),
    headers: { 'Content-Type': 'application/json' },
  })
  setSending(false)
  setSent(true)
}
```

---

## 🛠 Stack tecnológico

| Tecnología | Uso |
|-----------|-----|
| React 18 | UI framework |
| Vite 5 | Bundler / dev server |
| Three.js | Gráficos 3D |
| @react-three/fiber | React renderer para Three.js |
| @react-three/drei | Helpers 3D (Float, Stars, etc.) |
| Google Fonts | Syne + Space Mono + DM Sans |

---

## 📋 Secciones incluidas

1. **Loader** — Pantalla de carga con barra de progreso y mensajes de sistema
2. **Navbar** — Navegación sticky con blur al hacer scroll
3. **Hero** — Canvas 3D full-screen con esfera, partículas y anillos orbitales
4. **Ticker** — Banda de texto animada en loop
5. **Servicios** — 6 cards interactivas con hover effects
6. **Proceso** — 5 pasos de trabajo en columnas
7. **Soluciones** — 8 industrias con icosaedro 3D decorativo
8. **Impacto** — Métricas de impacto para pequeños negocios
9. **CTA Banner** — Llamada a la acción con botón pulsante
10. **FAQ** — Acordeón de preguntas frecuentes
11. **Footer** — Footer completo con columnas de info
12. **Modal de Contacto** — Formulario completo con estados de loading/éxito

---

*© 2026 Hovocodex Technologies*
# hovocodex
