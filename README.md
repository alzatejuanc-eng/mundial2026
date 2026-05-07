# ⚽ Mundial 2026 — Quiniela Interactiva

Aplicación web para llenar y guardar marcadores del XXIII Mundial de Fútbol FIFA **USA · MEX · CAN 2026**.

---

## 🚀 Cómo usar

### 1. Abrir la app
Abre el archivo `index.html` en cualquier navegador moderno (Chrome, Firefox, Edge, Safari).  
No requiere servidor ni instalación.

### 2. Registro inicial
Al abrir por primera vez, se solicita:
- **Nombre completo**
- **Correo electrónico**
- **Teléfono**

Estos datos se guardan automáticamente y se incluyen en el Excel exportado.  
Puedes cambiarlos en cualquier momento con el botón ✏️ del encabezado.

### 3. Ingreso de marcadores
- Usa las pestañas **Grupo A · B · C ... L** para navegar entre los 12 grupos.
- Cada grupo muestra sus **6 partidos** organizados por jornada.
- Escribe el resultado de cada equipo en los campos de marcador.
- La **tabla de clasificación** se actualiza en tiempo real al ingresar los resultados.
- Los resultados se guardan automáticamente en el navegador.

### 4. Exportar a Excel
- **Primera vez:** Haz clic en **⬇ Excel** → se abre la configuración donde defines:
  - Nombre del archivo (ej: `MiQuiniela_2026`)
  - Nombre de la hoja principal (ej: `Resultados`)
  - Esta configuración queda guardada para futuras exportaciones.
- **Siguientes veces:** El clic en **⬇ Excel** descarga directamente el archivo.
- Para cambiar la configuración, haz clic en ⚙️ en el encabezado.

El archivo Excel generado contiene:
| Hoja | Contenido |
|------|-----------|
| `Participante` | Nombre, correo, teléfono y fecha de exportación |
| `Resultados` | Todos los partidos de los 12 grupos con marcadores |
| `Grupo A` ... `Grupo L` | Una hoja por grupo con partidos y clasificación |

---

## 📂 Archivos

```
index.html    →  Aplicación completa (todo en un solo archivo)
README.md     →  Esta documentación
```

---

## 🏟️ Estructura del torneo

| Grupos | Equipos | Partidos fase de grupos |
|--------|---------|------------------------|
| 12 grupos (A–L) | 4 equipos por grupo | 6 partidos por grupo = **72 total** |

### Los 12 grupos

| Grupo | Equipos |
|-------|---------|
| A | México · Sudáfrica · Corea del Sur · Rep. Checa |
| B | Canadá · Bosnia y Her. · Catar · Suiza |
| C | Brasil · Marruecos · Haití · Escocia |
| D | EE.UU. · Paraguay · Australia · Turquía |
| E | Alemania · Curazao · C. de Marfil · Ecuador |
| F | Países Bajos · Japón · Suecia · Túnez |
| G | Bélgica · Egipto · Irán · Nueva Zelanda |
| H | España · Cabo Verde · Arabia Saudita · Uruguay |
| I | Francia · Senegal · Irak · Noruega |
| J | Argentina · Argelia · Austria · Jordania |
| K | Portugal · RD Congo · Uzbekistán · Colombia |
| L | Inglaterra · Croacia · Ghana · Panamá |

---

## 💾 Persistencia de datos

- Los datos se guardan **automáticamente** en `localStorage` del navegador.
- También puedes presionar **💾 Guardar** en la barra inferior para guardar manualmente.
- Los datos persisten entre sesiones mientras uses el mismo navegador.
- Para limpiar todos los datos: abre la consola del navegador y ejecuta `localStorage.clear()`.

---

## ⚙️ Tecnologías

- **HTML5 / CSS3 / JavaScript** vanilla — sin frameworks, sin dependencias de servidor
- **SheetJS (xlsx)** — generación del archivo Excel desde el navegador
- **Google Fonts** — Bebas Neue + Outfit
- **localStorage** — persistencia de datos local

---

## 🌐 Compatibilidad

Funciona en todos los navegadores modernos:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Edge 90+
- ✅ Safari 14+
- ✅ Navegadores móviles (diseño responsivo)

---

*Basado en los datos del fixture oficial del XXIII Mundial FIFA 2026*
