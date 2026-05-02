/**
 * APPS SCRIPT - Google Sheets Integration
 * 
 * INSTRUCCIONES:
 * 1. Copia todo este código
 * 2. Ve a tu Google Sheet > Herramientas > Editor de secuencias de comandos
 * 3. Pega el código
 * 4. Guarda como "Deploy"
 * 5. Nuevo despliegue > Aplicación web
 * 6. Copia la URL resultante en la configuración de la app
 */

// Función principal que recibe los datos de la app
function doPost(e) {
  try {
    // Obtener la hoja activa
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Parsear los datos JSON del POST
    const data = JSON.parse(e.postData.contents);
    
    // Validar datos
    if (!data.userId || !data.matchId) {
      return ContentService.createTextOutput(
        JSON.stringify({ success: false, error: 'Datos incompletos' })
      ).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Obtener la fila actual (para saber dónde insertar)
    const lastRow = sheet.getLastRow();
    
    // Agregar la fila con los datos
    sheet.insertRows(lastRow + 1, 1);
    
    const newRow = [
      new Date().toLocaleString('es-ES'),  // Timestamp
      data.userId,                          // ID Usuario
      data.userName,                        // Nombre
      data.matchId,                         // Match ID
      data.homeTeam,                        // Equipo Local
      data.awayTeam,                        // Equipo Visitante
      data.predictedHome,                   // Predicción Local
      data.predictedAway,                   // Predicción Visitante
      data.phase,                           // Fase
      '',                                   // Resultado Local (para llenar después)
      '',                                   // Resultado Visitante (para llenar después)
      0,                                    // Puntos Obtenidos (calcular después)
      data.timestamp                        // Timestamp Original
    ];
    
    // Inserta la fila en la posición correcta
    sheet.getRange(lastRow + 1, 1, 1, newRow.length).setValues([newRow]);
    
    // Formatear la celda de fecha
    sheet.getRange(lastRow + 1, 1).setNumberFormat('yyyy-mm-dd hh:mm:ss');
    
    // Retornar respuesta exitosa
    return ContentService.createTextOutput(
      JSON.stringify({ 
        success: true, 
        message: 'Predicción guardada correctamente',
        timestamp: new Date().toISOString()
      })
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Registrar el error
    Logger.log('Error en doPost: ' + error);
    
    return ContentService.createTextOutput(
      JSON.stringify({ 
        success: false, 
        error: 'Error: ' + error.toString()
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// Función para obtener estadísticas (opcional)
function getStats(userId) {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = sheet.getDataRange().getValues();
  
  let stats = {
    totalPredictions: 0,
    correctPredictions: 0,
    totalPoints: 0,
    phaseStats: {}
  };
  
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    if (row[1] === userId) {
      stats.totalPredictions++;
      // Aquí puedes agregar lógica para calcular aciertos
    }
  }
  
  return stats;
}

// Función auxiliar para validar datos
function validatePrediction(prediction) {
  return prediction.userId && 
         prediction.matchId && 
         prediction.predictedHome >= 0 && 
         prediction.predictedAway >= 0;
}

// Función para limpiar datos antiguos (ejecutar manualmente cada mes)
function cleanOldData() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = sheet.getDataRange().getValues();
  
  // Eliminar predicciones más antiguas de 1 año
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  
  for (let i = data.length - 1; i > 0; i--) {
    if (new Date(data[i][0]) < oneYearAgo) {
      sheet.deleteRow(i + 1);
    }
  }
}

/**
 * NOTAS IMPORTANTES:
 * 
 * 1. ENCABEZADOS DE COLUMNAS:
 *    Asegúrate de que tu hoja tiene estos encabezados en la fila 1:
 *    A: Timestamp
 *    B: ID Usuario
 *    C: Nombre
 *    D: Match ID
 *    E: Equipo Local
 *    F: Equipo Visitante
 *    G: Predicción Local
 *    H: Predicción Visitante
 *    I: Fase
 *    J: Resultado Local
 *    K: Resultado Visitante
 *    L: Puntos Obtenidos
 *    M: Timestamp Original
 * 
 * 2. PERMISOS:
 *    El Apps Script necesita acceso a:
 *    - Google Sheets
 *    - Crear despliegues web
 * 
 * 3. DESPLIEGUE:
 *    - Ejecutar como: Tu cuenta
 *    - Quién tiene acceso: Cualquiera (para que la app pueda llamarlo)
 *    - Versión nueva cada vez que hagas cambios
 * 
 * 4. PRUEBAS:
 *    Usa la función doPost directamente con datos de prueba
 * 
 * 5. LÍMITES:
 *    Google Sheets tiene límites de escritura
 *    No hagas más de 300 escrituras por minuto
 */
