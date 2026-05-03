# 🚀 Guía de Setup - Predictor Mundial 2026

## 📋 Contenido del Repositorio

```
/
├── index.html          ⭐ Aplicación completa (HTML + CSS + JS)
├── README.md           📖 Documentación principal
├── LICENSE             📄 Licencia MIT
├── .gitignore          🚫 Archivos a ignorar en Git
└── SETUP.md            📝 Esta guía
```

## 🔧 Instalación en GitHub

### Opción 1: GitHub Pages (RECOMENDADO)

**Paso 1:** Crear un repositorio en GitHub
```bash
1. Ve a github.com/new
2. Nombre: `mundial-2026-predictor` (o tu preferencia)
3. Descripción: "Predictor elegante para el Mundial 2026"
4. Público ✅
5. Create repository
```

**Paso 2:** Clone el repositorio
```bash
git clone https://github.com/TU_USUARIO/mundial-2026-predictor.git
cd mundial-2026-predictor
```

**Paso 3:** Agrega los archivos
```bash
# Copia estos archivos a la carpeta:
# - index.html
# - README.md
# - LICENSE
# - .gitignore
```

**Paso 4:** Commit y Push
```bash
git add .
git commit -m "⚽ Initial commit - Predictor Mundial 2026"
git push origin main
```

**Paso 5:** Activa GitHub Pages
1. Ve a Settings → Pages
2. Selecciona `main` como rama
3. Espera 1-2 minutos
4. Tu sitio estará en: `https://tu-usuario.github.io/mundial-2026-predictor`

---

### Opción 2: Hosting Externo (Vercel)

**Paso 1:** Crear repositorio en GitHub (igual al anterior)

**Paso 2:** Ve a vercel.com
```
1. Sign up con GitHub
2. Importa el repositorio
3. Deploy automático
4. URL: `https://mundial-2026-predictor.vercel.app`
```

**Paso 3:** Cada push a main = deploy automático ✅

---

### Opción 3: Netlify

**Paso 1:** Ve a netlify.com
```
1. Conecta con GitHub
2. Selecciona tu repositorio
3. Build command: (dejar vacío)
4. Publish directory: . (punto)
5. Deploy
```

**Paso 2:** Acceso automático con dominio de Netlify ✅

---

## 💾 Guía de Uso Local

### Sin servidor (Archivo Local)
```bash
# Simplemente abre el archivo:
# Windows: Double-click en index.html
# Mac: Right-click → Open with → Browser
# Linux: xdg-open index.html
```

### Con servidor local (Python)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (si tienes http-server)
npx http-server

# Accede a: http://localhost:8000
```

---

## ✨ Características Principales

### 🎮 Funcionalidad
- 64 partidos (Grupos A-H + Fases Eliminatorias)
- Entrada manual de predicciones
- Almacenamiento local (localStorage)
- Exportación a Excel (XLSX)

### 📊 Datos del Usuario
- Captura: Nombre, Email, Equipo Favorito, Teléfono
- Guardado automático
- Incluido en exportación Excel

### 🎨 Diseño
- Interfaz moderna y elegante
- Completamente responsivo (móvil, tablet, desktop)
- Animaciones suaves
- Tema oscuro en header, fondo claro

### 📈 Estadísticas
- Predicciones completadas
- Porcentaje de precisión
- Puntos acumulados
- Predicciones acertadas

---

## 📝 Estructura de Datos

### Predicción Guardada
```json
{
  "1": {
    "home": 3,
    "away": 2,
    "timestamp": "2024-05-03T15:30:00.000Z"
  }
}
```

### Usuario Guardado
```json
{
  "name": "Juan Pérez",
  "email": "juan@email.com",
  "team": "Colombia",
  "phone": "+57 123 456 7890"
}
```

---

## 🔐 Privacidad y Seguridad

✅ **No hay servidor** - Todo funciona localmente
✅ **No se envían datos** - Todo en tu navegador
✅ **localStorage nativo** - Datos persistentes
✅ **HTTPS listo** - Funciona en cualquier servidor web

---

## 🐛 Troubleshooting

### Problema: "Las predicciones no se guardan"
**Solución:**
```javascript
// Abre la consola del navegador (F12)
// Verifica que localStorage funcione:
localStorage.setItem('test', 'ok')
localStorage.getItem('test') // Debe mostrar: ok
```

### Problema: "Exportar a Excel no funciona"
**Solución:**
- Usa un navegador moderno (Chrome, Firefox, Safari, Edge)
- No abre en versiones viejas de IE

### Problema: "Datos desaparecen"
**Solución:**
- No limpies el caché/localStorage del navegador
- Usa siempre el mismo navegador/perfil
- Exporta regularmente a Excel como backup

---

## 📱 URLs de Prueba

### GitHub Pages
```
https://[tu-usuario].github.io/mundial-2026-predictor
```

### Vercel
```
https://mundial-2026-predictor.vercel.app
```

### Netlify
```
https://mundial-2026-predictor.netlify.app
```

---

## 🎯 Próximos Pasos

1. ✅ Clona o descarga los archivos
2. ✅ Crea el repositorio en GitHub
3. ✅ Sube los archivos
4. ✅ Activa GitHub Pages O Vercel/Netlify
5. ✅ ¡Comparte el link con tus amigos!

---

## 💬 Soporte

¿Problemas?
- Revisa el README.md
- Verifica que tengas un navegador moderno
- Busca en Google el error específico
- Abre un issue en GitHub

---

## 📄 Archivos Importantes

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Aplicación completa (TODO en un archivo) |
| `README.md` | Documentación para usuarios |
| `LICENSE` | Licencia MIT - Libre para usar |
| `.gitignore` | Archivos ignorados en Git |

---

## 🎓 Comandos Git Útiles

```bash
# Clonar
git clone https://github.com/TU_USUARIO/mundial-2026-predictor.git

# Cambios locales
git add .
git commit -m "Descripción del cambio"

# Subir a GitHub
git push origin main

# Bajar cambios
git pull origin main

# Ver estado
git status

# Ver historial
git log --oneline
```

---

## 🏆 ¡Listo!

Tu aplicación Predictor Mundial 2026 ya está lista para producción.

**¡Que disfrutes prediciendo el Mundial! ⚽🏆**

---

*Última actualización: Mayo 2024*
