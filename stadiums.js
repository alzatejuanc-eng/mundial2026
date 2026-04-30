// ============================================
// STADIUMS.JS - Gestión de Estadios
// ============================================

class StadiumManager {
  constructor() {
    this.stadiums = STADIUMS;
    this.selectedStadium = null;
    this.init();
  }

  init() {
    this.renderStadiums();
    this.setupEventListeners();
  }

  setupEventListeners() {
    document.addEventListener('click', (e) => {
      if (e.target.closest('.stadium-card')) {
        const stadiumId = parseInt(e.target.closest('.stadium-card').dataset.id);
        this.selectStadium(stadiumId);
      }
    });

    // Cerrar modal
    document.addEventListener('click', (e) => {
      if (e.target.id === 'stadiumModal') {
        this.closeModal();
      }
    });
  }

  renderStadiums() {
    const container = document.getElementById('stadiumsGrid');
    if (!container) return;

    container.innerHTML = this.stadiums.map(stadium => `
      <div class="stadium-card" data-id="${stadium.id}">
        <img src="${stadium.image}" alt="${stadium.name}" class="stadium-image" />
        <div class="stadium-info">
          <div class="stadium-name">${stadium.name}</div>
          <div class="stadium-location">
            📍 ${stadium.city}, ${stadium.country}
          </div>
          <div class="stadium-details">
            <div class="detail-item">
              <div class="detail-label">Capacidad</div>
              <div class="detail-value">${this.formatNumber(stadium.capacity)}</div>
            </div>
            <div class="detail-item">
              <div class="detail-label">Fundado</div>
              <div class="detail-value">${stadium.founded}</div>
            </div>
            <div class="detail-item">
              <div class="detail-label">Equipo</div>
              <div class="detail-value">${stadium.team}</div>
            </div>
            <div class="detail-item">
              <div class="detail-label">Superficie</div>
              <div class="detail-value">${stadium.surface}</div>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  selectStadium(stadiumId) {
    const stadium = this.stadiums.find(s => s.id === stadiumId);
    if (!stadium) return;

    this.selectedStadium = stadium;
    this.showModal(stadium);
  }

  showModal(stadium) {
    const modal = document.getElementById('stadiumModal');
    const modalContent = document.querySelector('.modal-stadium-content');

    if (!modal || !modalContent) return;

    modalContent.innerHTML = `
      <span class="close" onclick="stadiumManager.closeModal()">&times;</span>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 30px;">
        <div>
          <img src="${stadium.image}" alt="${stadium.name}" style="width: 100%; border-radius: 12px; margin-bottom: 20px;">
          <div style="background: linear-gradient(135deg, #f0f9ff 0%, #f5f7fa 100%); padding: 20px; border-radius: 12px;">
            <h3 style="margin-bottom: 15px; color: #1d3a5a;">📍 Ubicación</h3>
            <div id="mapContainer" style="width: 100%; height: 300px; background: #e5e5e5; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
              <p style="color: #999;">Mapa interactivo (mejora futura)</p>
            </div>
          </div>
        </div>

        <div>
          <h1 style="color: #1d3a5a; margin-bottom: 10px; font-size: 32px;">${stadium.name}</h1>
          <p style="color: #666; margin-bottom: 20px; font-size: 16px;">📍 ${stadium.city}, ${stadium.country}</p>

          <div style="background: var(--white); border: 1px solid #e5e5e5; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
            <h3 style="color: #1d3a5a; margin-bottom: 15px;">Información Principal</h3>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
              <div>
                <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #0f6e56; font-weight: 700; margin-bottom: 5px;">Capacidad</div>
                <div style="font-size: 24px; font-weight: 800; color: #1d3a5a;">${this.formatNumber(stadium.capacity)}</div>
              </div>
              <div>
                <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #0f6e56; font-weight: 700; margin-bottom: 5px;">Año de Inauguración</div>
                <div style="font-size: 24px; font-weight: 800; color: #1d3a5a;">${stadium.founded}</div>
              </div>
              <div>
                <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #0f6e56; font-weight: 700; margin-bottom: 5px;">Equipo Local</div>
                <div style="font-size: 16px; font-weight: 700; color: #1d3a5a;">${stadium.team}</div>
              </div>
              <div>
                <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #0f6e56; font-weight: 700; margin-bottom: 5px;">Superficie</div>
                <div style="font-size: 16px; font-weight: 700; color: #1d3a5a;">${stadium.surface}</div>
              </div>
            </div>
          </div>

          <div style="background: linear-gradient(135deg, rgba(15, 110, 86, 0.1) 0%, rgba(29, 158, 117, 0.1) 100%); border-left: 4px solid #0f6e56; border-radius: 8px; padding: 15px; margin-bottom: 20px;">
            <p style="color: #666; margin: 0;">
              <strong>${stadium.name}</strong> es uno de los 16 estadios que albergarán los partidos del Mundial 2026. 
              Con una capacidad de <strong>${this.formatNumber(stadium.capacity)} espectadores</strong>, este estadio promete 
              crear un ambiente memorable para los aficionados al fútbol.
            </p>
          </div>

          <div style="display: flex; gap: 12px;">
            <a href="index.html" class="btn btn-primary" style="flex: 1; text-align: center;">
              Volver a Predicciones
            </a>
            <button onclick="stadiumManager.shareStadium()" class="btn btn-secondary" style="flex: 1;">
              📤 Compartir
            </button>
          </div>
        </div>
      </div>
    `;

    modal.classList.add('show');
  }

  closeModal() {
    const modal = document.getElementById('stadiumModal');
    if (modal) {
      modal.classList.remove('show');
    }
  }

  shareStadium() {
    if (!this.selectedStadium) return;

    const text = `🏟️ ${this.selectedStadium.name}\n📍 ${this.selectedStadium.city}, ${this.selectedStadium.country}\nCapacidad: ${this.formatNumber(this.selectedStadium.capacity)}\n\n¡Uno de los 16 estadios del Mundial 2026!`;

    if (navigator.share) {
      navigator.share({
        title: 'Mundial 2026 - Estadios',
        text: text
      });
    } else {
      alert(text);
    }
  }

  formatNumber(num) {
    return num.toLocaleString('es-ES');
  }

  filterByCountry(country) {
    const filtered = this.stadiums.filter(s => s.country === country);
    console.log(`Estadios en ${country}:`, filtered);
  }

  getStatsByCountry() {
    const stats = {
      'USA': this.stadiums.filter(s => s.country === 'USA'),
      'México': this.stadiums.filter(s => s.country === 'México'),
      'Canadá': this.stadiums.filter(s => s.country === 'Canadá')
    };
    return stats;
  }

  getTotalCapacity() {
    return this.stadiums.reduce((sum, stadium) => sum + stadium.capacity, 0);
  }

  getAverageCapacity() {
    const total = this.getTotalCapacity();
    return Math.round(total / this.stadiums.length);
  }
}

// Instancia global
let stadiumManager;

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  stadiumManager = new StadiumManager();
  
  // Mostrar estadísticas
  const stats = stadiumManager.getStatsByCountry();
  const totalCapacity = stadiumManager.getTotalCapacity();
  const avgCapacity = stadiumManager.getAverageCapacity();

  document.getElementById('totalStadiums').textContent = stadiumManager.stadiums.length;
  document.getElementById('totalCapacity').textContent = stadiumManager.formatNumber(totalCapacity);
  document.getElementById('avgCapacity').textContent = stadiumManager.formatNumber(avgCapacity);
  
  document.getElementById('usaStadiums').textContent = stats.USA.length;
  document.getElementById('mexicoStadiums').textContent = stats['México'].length;
  document.getElementById('canadaStadiums').textContent = stats['Canadá'].length;
});
