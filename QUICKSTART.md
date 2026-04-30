# 🚀 Guía de Inicio Rápido

## Instalación Local (5 minutos)

### Opción 1: Simplemente Abre el Archivo
```bash
# Clona el repositorio
git clone https://github.com/juancarlosalz/mundial2026-predictor.git
cd mundial2026-predictor

# Abre en tu navegador
open index.html
```

### Opción 2: Con Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Luego abre http://localhost:8000
```

### Opción 3: Con Node.js
```bash
npm install -g http-server
http-server

# Luego abre http://localhost:8080
```

---

## Deploy en Vercel (2 minutos)

### Paso 1: Preparar en GitHub
```bash
# Clonar o crear fork del repositorio
git clone https://github.com/juancarlosalz/mundial2026-predictor.git
cd mundial2026-predictor

# Crear repositorio en GitHub
git init
git add .
git commit -m "Inicial: Mundial 2026 Predictor v2.0"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/mundial2026-predictor.git
git push -u origin main
```

### Paso 2: Deploy en Vercel

**Opción A: Via Web (Más Fácil)**
1. Ve a https://vercel.com
2. Haz clic en "New Project"
3. Selecciona "Import Git Repository"
4. Elige tu repositorio de GitHub
5. Haz clic en "Deploy"
6. ¡Listo! Tu sitio estará en vivo en 1 minuto

**Opción B: Via CLI**
```bash
# Instalar Vercel CLI
npm i -g vercel

# Hacer deploy
vercel

# Vercel detectará automáticamente que es un sitio estático
# y lo deployará correctamente
```

---

## Características Principales

✅ **Predice Partidos**
- Ingresa tus predicciones de marcadores
- Almacenadas automáticamente en el navegador

✅ **Ingresa Resultados Reales**
- Cuando se jueguen los partidos
- Sistema de puntos automático

✅ **Estadísticas en Tiempo Real**
- Total de puntos
- Aciertos
- Porcentaje de precisión
- Mejor fase

✅ **Explorador de Estadios**
- 16 estadios del mundial
- Información completa de cada uno
- Capacidad, ubicación, datos técnicos

✅ **Exporta Tus Datos**
- Descarga tu progreso en CSV
- Comparte tus resultados

---

## Estructura de Carpetas

```
mundial2026-predictor/
├── index.html                 # Página principal
├── stadiums.html              # Página de estadios
├── css/
│   └── styles.css             # Todos los estilos
├── js/
│   ├── config.js              # Configuración
│   ├── data.js                # Datos (grupos, partidos, estadios)
│   ├── storage.js             # Gestión de almacenamiento
│   ├── app.js                 # Lógica principal
│   └── stadiums.js            # Lógica de estadios
├── README.md                  # Documentación completa
├── QUICKSTART.md              # Esta guía
├── CHANGELOG.md               # Historial de cambios
├── package.json               # Metadatos del proyecto
├── vercel.json                # Configuración Vercel
├── .gitignore                 # Archivos a ignorar en Git
├── .env.example               # Variables de entorno ejemplo
└── LICENSE                    # Licencia MIT
```

---

## Solución de Problemas

### El sitio no carga
- Verifica que todos los archivos CSS y JS estén en las carpetas correctas
- Abre la consola del navegador (F12) para ver errores
- Prueba con un servidor HTTP diferente

### Los datos no se guardan
- Verifica que localStorage esté habilitado en tu navegador
- Intenta en modo normal (no en privado/incógnito)
- Comprueba que haya espacio disponible

### Problemas en Vercel
- Verifica que todos los archivos estén en el repositorio
- Comprueba que `vercel.json` está en la raíz
- Revisita el dashboard de Vercel para ver los logs

---

## Personalización

### Cambiar Colores
Edita `js/config.js`:
```javascript
const COLORS = {
  primary: {
    dark: '#1d3a5a',  // Cambia estos valores
    blue: '#2563a5'
  },
  // ...
}
```

### Agregar Más Estadios
Edita `js/data.js` y agrega a la array `STADIUMS`

### Cambiar Puntos por Fase
Edita `js/config.js`:
```javascript
const POINTS_SYSTEM = {
  groups: 1,      // Cambia estos números
  ro16: 2,
  // ...
}
```

---

## Contribuir

¿Tienes ideas para mejoras? ¡Excelente!

1. Fork el proyecto
2. Crea una rama: `git checkout -b feature/miMejora`
3. Commit: `git commit -m 'Agrego mejora'`
4. Push: `git push origin feature/miMejora`
5. Abre un Pull Request

---

## Soporte

- 📧 Email: support@transformacionexo.com
- 💬 Issues: GitHub Issues
- 🌐 Web: www.transformacionexo.com

---

## Licencia

MIT License - Copyright © 2026 Juan Carlos Alzate García

---

**¡Que disfrutes prediciendo el Mundial 2026!** 🏆⚽
