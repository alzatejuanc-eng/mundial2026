⚡ QUICK START - 5 MINUTOS

## Opción 1️⃣: Usar Localmente (Sin Google Sheets)

1. Descarga o clona: `index.html`
2. Abre en navegador
3. ¡Comienza a predecir!

Las predicciones se guardan en tu navegador automáticamente.

---

## Opción 2️⃣: Configurar Google Sheets (RECOMENDADO)

### Paso A: Preparar Google Sheets (3 minutos)

1. Ve a https://sheets.google.com
2. Crea una nueva hoja → Renombra como "Predicciones"
3. En la fila 1, agrega estos encabezados:
   ```
   Timestamp | ID Usuario | Nombre | Match ID | Equipo Local | 
   Equipo Visitante | Predicción Local | Predicción Visitante | 
   Fase | Resultado Local | Resultado Visitante | Puntos
   ```

### Paso B: Configurar Apps Script (2 minutos)

1. En tu Sheet: **Herramientas** > **Editor de secuencias de comandos**
2. Elimina el código por defecto
3. Copia TODO el código de `apps-script.js`
4. **Guardar** (nombre: "Deploy")
5. Click **Nuevo despliegue** > elige **Aplicación web**
6. Ejecutar como: Tu cuenta
7. Quién tiene acceso: **Cualquiera**
8. **Desplegar**
9. Aparecerá una URL larga → **CÓPIALA COMPLETA**

### Paso C: Configurar la App (1 minuto)

1. Abre `index.html` en navegador
2. Click ⚙️ **Configuración**
3. Pega la URL del Apps Script
4. Ingresa tu nombre
5. Click 💾 **Guardar**

✅ ¡LISTO! Ahora todas tus predicciones se guardan en tu Sheet automáticamente.

---

## Opción 3️⃣: Desplegar en Vercel (2 minutos)

```bash
# Si tienes Git y Node instalados:
git clone <tu-repo>
cd mundial2026
npx vercel
```

Tu sitio estará en: `https://mundial2026-predictor.vercel.app`

---

## 🎮 Comenzar a Usar

1. **Fase de Grupos**: Selecciona equipos y predice
2. **Ver Estadios**: 🏟️ Explora los 16 estadios
3. **Exportar**: 📥 Descarga tus predicciones en CSV
4. **Sincronizar**: Automático a Google Sheets

---

## ❓ Preguntas Frecuentes

**¿Pierdo mis datos si cierro el navegador?**
No, se guardan localmente. Si configuras Sheets, también se sincronizan allá.

**¿Puedo usar sin Google Sheets?**
Sí, todo funciona localmente. Sheets es opcional.

**¿Funciona en mobile?**
Sí, 100% responsivo.

**¿Qué es la "URL del Apps Script"?**
Es la dirección web que genera Google cuando despliegas el script. Termina con `/macros/d/...`

---

## 📞 Soporte

Revisa README.md para más detalles.
