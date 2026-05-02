# ⚽ Predictor Mundial 2026 - Transformación ExO

**Aplicación web interactiva para predecir resultados del Mundial 2026 con sincronización automática a Google Sheets.**

## 🎯 Características

✅ **Predicción de 104 Partidos**
- 72 partidos de Fase de Grupos (12 grupos)
- 16 partidos de 16vos de Final
- 8 partidos de Cuartos de Final
- 2 partidos de Semifinales
- 2 partidos de Final (+ 3º Lugar)

📊 **Sistema de Puntos Escalonado**
- Grupos: 1 punto por acierto
- 16vos: 2 puntos por acierto
- Cuartos: 5 puntos por acierto
- Semifinales: 10 puntos por acierto
- Final: 20 puntos por acierto

💾 **Almacenamiento en Nube**
- Sincronización automática con Google Sheets
- Almacenamiento local en navegador
- Exportación a CSV

🏟️ **Explorador de Estadios**
- 16 estadios del mundial
- Información de capacidad, ubicación y año de inauguración

🎨 **Diseño Premium**
- Interfaz moderna y responsiva
- Colores de Transformación ExO
- Compatible con mobile, tablet y desktop

## 🚀 Instalación Rápida

### Opción 1: Clonar desde GitHub

```bash
# Clonar repositorio
git clone https://github.com/tuusuario/mundial2026-predictor.git

# Entrar al directorio
cd mundial2026-predictor

# Abrir en navegador
open index.html
# o simplemente arrastra el archivo a tu navegador
```

### Opción 2: Descargar Archivo

1. Descarga `index.html`
2. Abre el archivo en tu navegador
3. ¡Comienza a predecir!

### Opción 3: Desplegar en Vercel

```bash
# Asume que ya clonaste el repositorio

# Login en Vercel (si no tienes cuenta, créala en vercel.com)
npx vercel login

# Desplegar
npx vercel

# Tu sitio estará en: https://tuproyecto.vercel.app
```

## 📋 Configuración de Google Sheets

### Paso 1: Crear la Hoja de Cálculo

1. Ve a [Google Sheets](https://sheets.google.com)
2. Crea una nueva hoja de cálculo
3. Renombra la primera pestaña como `Predicciones`
4. Crea las siguientes columnas:

```
A: Timestamp
B: ID Usuario
C: Nombre
D: Match ID
E: Equipo Local
F: Equipo Visitante
G: Predicción Local
H: Predicción Visitante
I: Fase
J: Resultado Local
K: Resultado Visitante
L: Puntos Obtenidos
```

### Paso 2: Crear el Apps Script

1. En tu hoja de cálculo, ve a **Herramientas** > **Editor de secuencias de comandos**
2. Reemplaza el código con esto:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      new Date(),
      data.userId,
      data.userName,
      data.matchId,
      data.homeTeam,
      data.awayTeam,
      data.predictedHome,
      data.predictedAway,
      data.phase,
      '',
      '',
      0
    ]);
    
    return ContentService.createTextOutput('OK');
  } catch (error) {
    return ContentService.createTextOutput('ERROR: ' + error);
  }
}
```

3. Guarda el archivo (nombre: `Deploy`)
4. Click en **Nuevo despliegue** > **Tipo: Aplicación web**
5. Configura así:
   - Ejecutar como: Tu cuenta
   - Quién tiene acceso: Cualquiera
6. Haz click en **Desplegar**
7. **COPIA LA URL** que aparece (termina con `/macros/d/...`)

### Paso 3: Configurar en la App

1. Abre la aplicación web
2. Haz click en ⚙️ **Configuración**
3. Pega la URL del Apps Script en "URL de Google Sheets"
4. Ingresa tu ID de Usuario y Nombre
5. Haz click en 💾 **Guardar**

¡Listo! Ahora cada predicción se sincronizará automáticamente a tu hoja de cálculo.

## 📱 Uso

### Predecir un Partido

1. Selecciona la fase (Grupos, 16vos, etc.)
2. Ingresa el marcador predicho en los campos
3. Haz click en **💾 Guardar Predicción**
4. Los datos se guardan localmente y se sincronizan a Sheets

### Ver Estadios

1. Haz click en **🏟️ Estadios**
2. Explora los 16 estadios del mundial
3. Ve capacidad, ubicación y año de inauguración

### Exportar Datos

1. Haz click en **📥 Exportar**
2. Se descargará un archivo CSV con todas tus predicciones
3. Puedes abrirlo en Excel o importarlo a otro programa

### Reiniciar

1. Haz click en **🔄 Reiniciar**
2. Se borrarán todas las predicciones
3. Requiere confirmación

## 🏆 Sistema de Puntos

| Fase | Partidos | Puntos por Acierto | Máximo Posible |
|------|----------|-------------------|----------------|
| Grupos | 72 | 1 | 72 |
| 16vos | 16 | 2 | 32 |
| Cuartos | 8 | 5 | 40 |
| Semifinales | 2 | 10 | 20 |
| Final + 3º | 2 | 20 + 5 | 45 |
| **TOTAL** | **104** | - | **128** |

## 📁 Estructura del Proyecto

```
mundial2026-predictor/
├── index.html              # Aplicación completa
├── README.md               # Este archivo
├── .gitignore              # Archivos ignorados
└── apps-script.js          # Código para Google Apps Script (referencia)
```

## 🔧 Requisitos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Conexión a internet (para sincronización con Sheets)
- Cuenta de Google (para usar Sheets)

**Sin dependencias externas, sin backend, sin base de datos.**

## 💡 Tips

- Las predicciones se guardan automáticamente en tu navegador
- Si pierdes conexión, los datos se sincronizan cuando vuelves a estar online
- Puedes usar la app sin configurar Google Sheets (datos solo locales)
- Las predicciones persisten entre sesiones

## 🐛 Troubleshooting

### "La sincronización con Sheets no funciona"
- Verifica que copiaste correctamente la URL
- Asegúrate de que el Apps Script está desplegado
- Abre la consola (F12) para ver errores

### "Perdí mis predicciones"
- Verifica que no borraste los datos del navegador
- Tus predicciones están en Google Sheets si configuraste la sincronización

### "El sitio no carga"
- Intenta abrir en incógnito
- Vacía el caché del navegador
- Intenta en otro navegador

## 📄 Licencia

MIT License - Usa libremente en proyectos personales o comerciales

## 👥 Soporte

Para reportar bugs o sugerencias, abre un issue en GitHub.

---

**¡Que disfrutes prediciendo el Mundial 2026!** ⚽🏆
