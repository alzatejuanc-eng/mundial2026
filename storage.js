// ============================================
// STORAGE - Gestión de datos
// ============================================

class PredictionStorage {
  constructor() {
    this.storageKey = 'mundial2026_predictions';
    this.initStorage();
  }

  initStorage() {
    if (!localStorage.getItem(this.storageKey)) {
      localStorage.setItem(this.storageKey, JSON.stringify({}));
    }
  }

  // Obtener todas las predicciones
  getAll() {
    try {
      return JSON.parse(localStorage.getItem(this.storageKey)) || {};
    } catch (e) {
      console.error('Error al obtener predicciones:', e);
      return {};
    }
  }

  // Guardar predicción
  savePrediction(matchId, homeScore, awayScore) {
    try {
      const data = this.getAll();
      if (!data[matchId]) {
        data[matchId] = {};
      }
      data[matchId].predicted = {
        home: parseInt(homeScore) || 0,
        away: parseInt(awayScore) || 0,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem(this.storageKey, JSON.stringify(data));
      return true;
    } catch (e) {
      console.error('Error al guardar predicción:', e);
      return false;
    }
  }

  // Guardar resultado real
  saveActualScore(matchId, homeScore, awayScore) {
    try {
      const data = this.getAll();
      if (!data[matchId]) {
        data[matchId] = {};
      }
      data[matchId].actual = {
        home: parseInt(homeScore) || 0,
        away: parseInt(awayScore) || 0,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem(this.storageKey, JSON.stringify(data));
      return true;
    } catch (e) {
      console.error('Error al guardar resultado:', e);
      return false;
    }
  }

  // Obtener predicción de un partido
  getPrediction(matchId) {
    const data = this.getAll();
    return data[matchId] || null;
  }

  // Contar predicciones completadas
  countCompleted() {
    const data = this.getAll();
    return Object.keys(data).filter(key => data[key].predicted).length;
  }

  // Contar aciertos
  countAccurate() {
    const data = this.getAll();
    let count = 0;
    for (const matchId in data) {
      const match = data[matchId];
      if (match.predicted && match.actual) {
        if (match.predicted.home === match.actual.home && 
            match.predicted.away === match.actual.away) {
          count++;
        }
      }
    }
    return count;
  }

  // Calcular puntos totales
  calculateTotalPoints() {
    const data = this.getAll();
    let totalPoints = 0;

    for (const matchId in data) {
      const match = data[matchId];
      if (match.predicted && match.actual) {
        if (match.predicted.home === match.actual.home && 
            match.predicted.away === match.actual.away) {
          const points = this.getPhasePoints(parseInt(matchId));
          totalPoints += points;
        }
      }
    }
    return totalPoints;
  }

  // Obtener puntos por fase
  getPhasePoints(matchId) {
    const pointMap = {
      groups: 1,
      ro16: 2,
      quarters: 5,
      semis: 10,
      final: 20,
      '3rd': 5
    };

    if (matchId <= 72) return pointMap.groups;
    if (matchId <= 80) return pointMap.ro16;
    if (matchId <= 84) return pointMap.quarters;
    if (matchId <= 86) return pointMap.semis;
    if (matchId === 87) return pointMap.final;
    if (matchId === 88) return pointMap['3rd'];
    return 0;
  }

  // Exportar a CSV
  exportToCSV() {
    const data = this.getAll();
    let csv = 'Match ID,Home Team,Away Team,Predicted Home,Predicted Away,Actual Home,Actual Away,Points\n';
    
    for (const matchId in data) {
      const match = data[matchId];
      const pred = match.predicted || {};
      const actual = match.actual || {};
      const points = (match.predicted && match.actual) ? 
        (pred.home === actual.home && pred.away === actual.away ? this.getPhasePoints(parseInt(matchId)) : 0) : 0;
      
      csv += `${matchId},,,${pred.home || ''},${pred.away || ''},${actual.home || ''},${actual.away || ''},${points}\n`;
    }
    
    return csv;
  }

  // Limpiar datos
  clearAll() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify({}));
      return true;
    } catch (e) {
      console.error('Error al limpiar datos:', e);
      return false;
    }
  }

  // Sincronizar con Supabase (futuro)
  async syncWithSupabase(supabaseClient) {
    // TODO: Implementar sincronización con Supabase
    console.log('Sincronización con Supabase no implementada aún');
  }
}

// Instancia global
const storage = new PredictionStorage();
