// ============================================
// APP.JS - Lógica Principal
// ============================================

class MundialPredictor {
  constructor() {
    this.currentPhase = 'groups';
    this.storage = new PredictionStorage();
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.render();
    this.updateStats();
  }

  setupEventListeners() {
    // Navegación
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('nav-item')) {
        this.navigateTo(e.target.dataset.phase);
      }
    });

    // Modal
    document.addEventListener('click', (e) => {
      if (e.target.id === 'confirmModal') {
        this.closeModal();
      }
    });
  }

  navigateTo(phase) {
    this.currentPhase = phase;
    
    // Actualizar navegación
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.remove('active');
      if (item.dataset.phase === phase) {
        item.classList.add('active');
      }
    });

    this.render();
  }

  render() {
    const container = document.getElementById('phasesContainer');
    if (!container) return;

    let html = '';

    if (this.currentPhase === 'groups') {
      html = this.renderGroups();
    } else if (this.currentPhase === 'stadiums') {
      window.location.href = 'stadiums.html';
      return;
    } else {
      html = this.renderKnockout();
    }

    container.innerHTML = html;
    this.attachMatchListeners();
  }

  renderGroups() {
    let html = '';

    for (const [groupKey, groupData] of Object.entries(MUNDIAL_DATA.groups)) {
      html += `
        <div class="phase-section">
          <div class="phase-header">
            ${groupData.name}
            <span class="points-badge">1 punto por acierto</span>
          </div>
          <div class="matches-grid">
            ${this.renderMatches(groupData.matches, 'groups')}
          </div>
        </div>
      `;
    }

    return html;
  }

  renderKnockout() {
    const knockoutPhases = {
      ro16: { name: 'ro16', points: 2 },
      quarters: { name: 'quarters', points: 5 },
      semis: { name: 'semis', points: 10 },
      final: { name: 'final', points: 20 },
      '3rd': { name: '3rd', points: 5 }
    };

    const phaseData = knockoutPhases[this.currentPhase];
    if (!phaseData) return '';

    const matches = MUNDIAL_DATA.knockout[phaseData.name].matches;

    return `
      <div class="phase-section">
        <div class="phase-header">
          ${MUNDIAL_DATA.knockout[phaseData.name].name}
          <span class="points-badge">${phaseData.points} puntos por acierto</span>
        </div>
        <div class="matches-grid">
          ${this.renderMatches(matches, this.currentPhase)}
        </div>
      </div>
    `;
  }

  renderMatches(matches, phase) {
    return matches.map(match => {
      const pred = this.storage.getPrediction(match.id);
      const predicted = pred?.predicted || {};
      const actual = pred?.actual || {};

      return `
        <div class="match-card" data-match-id="${match.id}">
          <div class="match-info">
            <span class="match-city">📍 ${match.city}, ${match.country}</span>
            <span class="match-date">${this.formatDate(match.date)}</span>
          </div>

          <div class="match-teams">
            <div class="team-name">${match.home}</div>
            <div class="vs">VS</div>
            <div class="team-name">${match.away}</div>
          </div>

          <div class="score-inputs">
            <input
              type="number"
              min="0"
              max="9"
              class="score-input home-score"
              placeholder="0"
              value="${predicted.home ?? ''}"
              ${actual.home !== undefined ? 'disabled' : ''}
            />
            <input
              type="number"
              min="0"
              max="9"
              class="score-input away-score"
              placeholder="0"
              value="${predicted.away ?? ''}"
              ${actual.home !== undefined ? 'disabled' : ''}
            />
          </div>

          <div class="match-actions">
            <button class="btn-small btn-save" onclick="app.savePrediction(${match.id})">
              💾 Guardar
            </button>
            ${actual.home !== undefined
              ? `<span class="btn-result">✅ ${actual.home}-${actual.away}</span>`
              : `<button class="btn-small btn-result" onclick="app.promptActual(${match.id})">
                   📊 Resultado
                 </button>`
            }
          </div>

          ${actual.home !== undefined
            ? `<div class="match-result">
                 Predicción: <strong>${predicted.home}-${predicted.away}</strong> | 
                 Puntos: <strong>${this.storage.getPhasePoints(match.id) && predicted.home === actual.home && predicted.away === actual.away ? this.storage.getPhasePoints(match.id) : 0}</strong>
               </div>`
            : ''
          }

          <div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid #e5e5e5;">
            <div style="font-size: 11px; color: #999;">
              🏟️ ${match.stadium}
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  savePrediction(matchId) {
    const card = document.querySelector(`[data-match-id="${matchId}"]`);
    if (!card) return;

    const homeScore = card.querySelector('.home-score').value;
    const awayScore = card.querySelector('.away-score').value;

    if (homeScore === '' || awayScore === '') {
      alert('Por favor ingresa ambos marcadores');
      return;
    }

    this.storage.savePrediction(matchId, homeScore, awayScore);
    card.classList.add('pulse');

    setTimeout(() => {
      this.updateStats();
      this.render();
    }, 300);
  }

  promptActual(matchId) {
    const card = document.querySelector(`[data-match-id="${matchId}"]`);
    const match = this.findMatch(matchId);

    if (!match) return;

    const homeScore = prompt(`Goles de ${match.home}:`);
    if (homeScore === null) return;

    const awayScore = prompt(`Goles de ${match.away}:`);
    if (awayScore === null) return;

    this.storage.saveActualScore(matchId, homeScore, awayScore);
    this.updateStats();
    this.render();
  }

  findMatch(matchId) {
    // Buscar en grupos
    for (const group of Object.values(MUNDIAL_DATA.groups)) {
      const match = group.matches.find(m => m.id === matchId);
      if (match) return match;
    }

    // Buscar en knockout
    for (const phase of Object.values(MUNDIAL_DATA.knockout)) {
      const match = phase.matches.find(m => m.id === matchId);
      if (match) return match;
    }

    return null;
  }

  updateStats() {
    const totalCompleted = this.storage.countCompleted();
    const totalAccurate = this.storage.countAccurate();
    const totalPoints = this.storage.calculateTotalPoints();
    const accuracy = totalCompleted > 0 ? Math.round((totalAccurate / totalCompleted) * 100) : 0;

    document.getElementById('totalScore').textContent = totalPoints;
    document.getElementById('matchesPlayed').textContent = `${totalCompleted}/88`;
    document.getElementById('correctPredictions').textContent = totalAccurate;
    document.getElementById('accuracy').textContent = `${accuracy}%`;
    document.getElementById('bestPhase').textContent = this.calculateBestPhase();
  }

  calculateBestPhase() {
    const data = this.storage.getAll();
    const phaseScores = {};
    const phaseNames = {
      groups: 'Grupos',
      ro16: '16vos',
      quarters: 'Cuartos',
      semis: 'Semis',
      final: 'Final'
    };

    for (const matchId in data) {
      const match = data[matchId];
      if (match.predicted && match.actual) {
        let phase = 'groups';
        const id = parseInt(matchId);
        if (id > 72 && id <= 80) phase = 'ro16';
        else if (id > 80 && id <= 84) phase = 'quarters';
        else if (id > 84 && id <= 86) phase = 'semis';
        else if (id === 87) phase = 'final';

        if (match.predicted.home === match.actual.home && 
            match.predicted.away === match.actual.away) {
          phaseScores[phase] = (phaseScores[phase] || 0) + this.storage.getPhasePoints(id);
        }
      }
    }

    if (Object.keys(phaseScores).length === 0) return '-';

    let bestPhase = 'groups';
    let maxScore = phaseScores.groups || 0;

    for (const [phase, score] of Object.entries(phaseScores)) {
      if (score > maxScore) {
        maxScore = score;
        bestPhase = phase;
      }
    }

    return phaseNames[bestPhase] || '-';
  }

  resetAll() {
    if (confirm('¿Está seguro? Se eliminarán todas las predicciones.')) {
      this.storage.clearAll();
      this.updateStats();
      this.render();
      alert('Datos eliminados correctamente');
    }
  }

  exportData() {
    const csv = this.storage.exportToCSV();
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `mundial2026_predicciones_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  }

  closeModal() {
    const modal = document.getElementById('confirmModal');
    if (modal) {
      modal.classList.remove('show');
    }
  }

  formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('es-ES', { 
      month: 'short', 
      day: 'numeric',
      year: '2-digit'
    });
  }

  attachMatchListeners() {
    // Aquí se pueden agregar listeners adicionales para las tarjetas de partido
  }
}

// Instancia global
let app;

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  app = new MundialPredictor();
});
