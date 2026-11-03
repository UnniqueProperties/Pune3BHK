/**
 * Elite Pune Property Portfolio - Interactive Pure JavaScript Engine
 * Pure Vanilla JS: Zero dependencies, ultra-fast, accessible.
 */

// Property Photos Data Repository (16 High-Resolution Verified Assets)
const PROPERTY_PHOTOS = [
  {
    id: 1,
    file: 'assets/aistudio/HALL_View1_df0b1bee.jpg',
    fallback: 'HALL_View1.jpg',
    category: 'living',
    spread: 'Spread A • Living Suite',
    title: 'Living Room Hero View & Entry Foyer',
    desc: 'Spacious rectangular family hall featuring a designer false ceiling, recessed ambient lighting, and a direct walkout to the private terrace via glass sliding doors. This main perspective provides visibility towards the 100% Vastu-compliant East-facing entry foyer area fitted with its heavy-duty custom safety protection grill layout.',
    spaceId: 'hall',
    isHero: true
  },
  {
    id: 2,
    file: 'assets/aistudio/Hall_View2_4574ff84.jpg',
    fallback: 'Hall_View2.jpg',
    category: 'living',
    spread: 'Spread A • Living Suite',
    title: 'Expansive Seating & Entertainment Layout',
    desc: 'Accommodates large family sofa sets and entertainment consoles with premium tile flooring and optimal daylight entrance cascades.',
    spaceId: 'hall'
  },
  {
    id: 3,
    file: 'assets/aistudio/Hall_View3_afffa04c.jpg',
    fallback: 'Hall_View3.jpg',
    category: 'living',
    spread: 'Spread A • Living Suite',
    title: 'Dining & Central Circulation Passage',
    desc: 'Clean flooring perspective showcasing the custom integrated seating lounge space and zero layout wastage in circulation corridors.',
    spaceId: 'hall'
  },
  {
    id: 4,
    file: 'assets/aistudio/Terrace1_a3ba94fc.jpg',
    fallback: 'Terrace1.jpg',
    category: 'terrace',
    spread: 'Spread B • Outdoor Terrace',
    title: '102 Sq Ft Private Attached Terrace Sanctuary',
    desc: 'Direct walkout from living room with custom safety gate structural styling, overhead clear framing, artificial green foliage privacy screening overlays, and open cross ventilation airflow.',
    spaceId: 'terrace'
  },
  {
    id: 5,
    file: 'assets/aistudio/TerraceFromHall_a0c63c01.jpg',
    fallback: 'TerraceFromHall.jpg',
    category: 'terrace',
    spread: 'Spread B • Outdoor Terrace',
    title: 'Terrace Walkout View from Living Room',
    desc: 'Transition seamlessly looking through the full-height glass sliding French doors from the living room environment onto the private open sky terrace deck.',
    spaceId: 'terrace'
  },
  {
    id: 6,
    file: 'assets/aistudio/Kitchen_View1_66cb25ae.jpg',
    fallback: 'Kitchen_View1.jpg',
    category: 'kitchen',
    spread: 'Spread C • Culinary Suite',
    title: 'Modular Kitchen Cooking Counter & Basins',
    desc: 'Spacious modular kitchen featuring premium green-and-white cabinetry layouts, an L-shaped polished black granite counter surface, and deep embedded stainless steel wash basins.',
    spaceId: 'kitchen'
  },
  {
    id: 7,
    file: 'assets/aistudio/Kichen_View2_db7ed332.jpg',
    fallback: 'Kichen_View2.jpg',
    category: 'kitchen',
    spread: 'Spread C • Culinary Suite',
    title: 'Kitchen Storage Matrix & Dining Provision',
    desc: 'Generous open layout utility frame showcasing custom glass-paneled storage cabinets and ample dedicated floor space provisions for double door refrigerator placement.',
    spaceId: 'kitchen'
  },
  {
    id: 8,
    file: 'assets/aistudio/MasterBedRoom_View1_e9d536cc.jpg',
    fallback: 'MasterBedRoom_View1.jpg',
    category: 'master',
    spread: 'Spread D • Master Suite',
    title: 'Master Bedroom Retreat (Hero Aspect)',
    desc: 'Generous master bedroom retreat accommodating a king-size configuration frame, clean detailed functional wall alcoves, cooling ceiling fan systems, and wide perimeter window structures.',
    spaceId: 'master'
  },
  {
    id: 9,
    file: 'assets/aistudio/MasterBedRoom_View2_71a8a5de.jpg',
    fallback: 'MasterBedRoom_View2.jpg',
    category: 'master',
    spread: 'Spread D • Master Suite',
    title: 'Master Bedroom Interior Profile & Wall Aligns',
    desc: 'Secondary clean plaster finish wall profile viewing aspect highlighting clear floor tile reflections, smooth paint finishes, and distinct entertainment connection terminals.',
    spaceId: 'master'
  },
  {
    id: 10,
    file: 'assets/aistudio/MasterBedRoom_View3_5e5b88af.jpg',
    fallback: 'MasterBedRoom_View3.jpg',
    category: 'master',
    spread: 'Spread D • Master Suite',
    title: 'Floor-To-Ceiling Wood Wardrobes & High Lofts',
    desc: 'Dedicated architectural wall niche utilizing heavy built-in premium natural wood-finish floor-to-ceiling wardrobes and high vertical overhead lofts maximizing structural footprint utility metrics.',
    spaceId: 'master'
  },
  {
    id: 11,
    file: 'assets/aistudio/BedRoom1_View1_ca33c4fe.jpg',
    fallback: 'BedRoom1_View1.jpg',
    category: 'bed1',
    spread: 'Spread D • Parents Bedroom (BR 1)',
    title: 'Parents Bedroom Main Entrance & Senior Comfort',
    desc: 'Square room orientation dimensions carefully optimized to accommodate senior family members comfortably with easy single level transition pathways directly into the core living and culinary suites.',
    spaceId: 'bed1'
  },
  {
    id: 12,
    file: 'assets/aistudio/BedRoom1_View2_410626ea.jpg',
    fallback: 'BedRoom1_View2.jpg',
    category: 'bed1',
    spread: 'Spread D • Parents Bedroom (BR 1)',
    title: 'Parents Bedroom Built-In Corner Wardrobe',
    desc: 'Built-in wooden corner wardrobe cabinets paired with dual integrated concrete vertical storage lofts running across the upper margins to house heavy seasonal materials clean out of view.',
    spaceId: 'bed1'
  },
  {
    id: 13,
    file: 'assets/aistudio/BedRoom1_View3_0f856307.jpg',
    fallback: 'BedRoom1_View3.jpg',
    category: 'bed1',
    spread: 'Spread D • Parents Bedroom (BR 1)',
    title: 'Cross-Ventilation Window & Ambient Airflow',
    desc: 'Deep interior perspective displaying soft ambient room wall coloring blends, pristine floor tiles, and cheerful ambient window drapery setups ensuring continuous fresh natural airflow vectors.',
    spaceId: 'bed1'
  },
  {
    id: 14,
    file: 'assets/aistudio/BedRoom2_View1_4799d641.jpg',
    fallback: 'BedRoom2_View1.jpg',
    category: 'bed2',
    spread: 'Spread E • Kids / Study Suite (BR 2)',
    title: 'Kids Study Bedroom Accent Panel Aspect',
    desc: 'A comfortable, quiet multi-functional bedroom zone optimized perfectly for a learning setup, study desk, or remote work-from-home layout with custom purple-and-white striped accent wall panels and built-in wooden storage.',
    spaceId: 'bed2'
  },
  {
    id: 15,
    file: 'assets/aistudio/BedRoom2_View2_d58065c6.jpg',
    fallback: 'BedRoom2_View2.jpg',
    category: 'bed2',
    spread: 'Spread E • Kids / Study Suite (BR 2)',
    title: 'Kids / Study Bedroom Sliding Windows & Loft',
    desc: 'Wide sliding exterior window ventilation setups and integrated structural concrete lofts maximizing vertical utility without intruding on study desk placement.',
    spaceId: 'bed2'
  },
  {
    id: 16,
    file: 'assets/aistudio/Entrance_dd8b391a.jpg',
    fallback: 'Entrance.jpg',
    category: 'entrance',
    spread: 'Architectural Foyer',
    title: 'Auspicious East Main Entrance Foyer & Safety Grill',
    desc: '100% Vastu-compliant East-facing entrance door welcoming continuous morning solar energy, complete with heavy-duty ornamental metal safety door grill, dedicated shoe console zone, and private foyer transition.',
    spaceId: 'entrance'
  }
];

// Architectural Spaces Data
const SPACES_DATA = [
  {
    id: 'hall',
    name: 'Living & Dining Hall',
    dims: "19' 0\" × 11' 0\"",
    sqft: '210 Sq Ft',
    previewImg: 'assets/aistudio/HALL_View1_df0b1bee.jpg',
    fallbackImg: 'HALL_View1.jpg',
    desc: 'Expansive family hall with recessed LED cove lighting, designer false ceiling, vitrified tiles, and direct French door connectivity to the private terrace.',
    features: ['False Ceiling with LEDs', 'Terrace Walkout French Doors', 'Zero Circulation Wastage', 'East Sunlight Vector']
  },
  {
    id: 'terrace',
    name: 'Attached Private Terrace',
    dims: "12' 0\" × 8' 6\"",
    sqft: '102 Sq Ft',
    previewImg: 'assets/aistudio/Terrace1_a3ba94fc.jpg',
    fallbackImg: 'Terrace1.jpg',
    desc: 'Rare attached outdoor sanctuary directly extending from living hall. Fitted with sturdy safety iron framing, skylight cover, and privacy foliage screen.',
    features: ['Attached to Living Room', 'Pergola & Skylight Shield', 'Open Air Cross Breeze', 'Private Morning Tea Deck']
  },
  {
    id: 'kitchen',
    name: 'Modular Kitchen & Utility',
    dims: "14' 0\" × 10' 0\"",
    sqft: '140 Sq Ft',
    previewImg: 'assets/aistudio/Kitchen_View1_66cb25ae.jpg',
    fallbackImg: 'Kitchen_View1.jpg',
    desc: 'Large L-shaped polished black granite cooking platform with modular green & white drawers, deep stainless sink, overhead storage, and refrigerator alcove.',
    features: ['Black Granite Countertops', 'Modular Under-Counter Pullouts', 'PMC Sweet Drinking Water Tap', 'Double Fridge Provision']
  },
  {
    id: 'master',
    name: 'Master Bedroom Suite',
    dims: "15' 0\" × 12' 0\"",
    sqft: '180 Sq Ft',
    previewImg: 'assets/aistudio/MasterBedRoom_View1_e9d536cc.jpg',
    fallbackImg: 'MasterBedRoom_View1.jpg',
    desc: 'Generous master bedroom accommodating a king-size bed, private dressing vanity corridor, floor-to-ceiling wooden wardrobes, and high concrete storage lofts.',
    features: ['King Bed Footprint', 'Built-in Floor-to-Ceiling Wardrobe', 'High Concrete Loft Storage', 'Large Window Frame']
  },
  {
    id: 'bed1',
    name: 'Parents Bedroom (BR 1)',
    dims: "12' 0\" × 11' 0\"",
    sqft: '132 Sq Ft',
    previewImg: 'assets/aistudio/BedRoom1_View1_ca33c4fe.jpg',
    fallbackImg: 'BedRoom1_View1.jpg',
    desc: 'Ground-level transition room ideally configured for senior members of the household. Easy access to main living spaces with private wardrobe niche.',
    features: ['Senior-Friendly Single Level', 'Corner Wardrobe Matrix', 'Dual Concrete Lofts', 'Bright Window Ventilation']
  },
  {
    id: 'bed2',
    name: 'Kids / Study Bedroom (BR 2)',
    dims: "11' 0\" × 10' 0\"",
    sqft: '110 Sq Ft',
    previewImg: 'assets/aistudio/BedRoom2_View1_4799d641.jpg',
    fallbackImg: 'BedRoom2_View1.jpg',
    desc: 'Cheerful bedroom with modern striped accent paneling, wide sliding windows, integrated lofts, and ideal acoustics for remote work or study.',
    features: ['Work-from-Home / Study Ready', 'Dual Tone Accent Wall', 'Sliding Aluminum Windows', 'Built-in Storage']
  },
  {
    id: 'entrance',
    name: 'East Entrance Foyer & Parking',
    dims: "100 Sq Ft Car Bay",
    sqft: '100 Sq Ft Car Park',
    previewImg: 'assets/aistudio/Entrance_dd8b391a.jpg',
    fallbackImg: 'Entrance.jpg',
    desc: '100% Vastu-compliant East main door with heavy-duty safety grill, plus a dedicated 100 sq ft covered car parking bay inside premises (exceptional Central Pune asset).',
    features: ['100% East Vastu Door', 'Heavy Ornamental Grill Door', 'Dedicated Covered Parking Bay', 'Zero Wastage Corridor']
  }
];

// Global State
let currentFilter = 'all';
let currentLightboxIndex = 0;
let isZoomed = false;

// Currency Formatter
const formatINR = (val) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(val);
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  renderGalleryGrid();
  renderFilterTabs();
  initSpaceExplorer();
  initCalculator();
  initLightbox();
  initLocationTabs();
  initScheduleModal();
  initSmoothScroll();
});

// Render Filter Tabs
function renderFilterTabs() {
  const container = document.getElementById('filterTabsContainer');
  if (!container) return;

  const categories = [
    { key: 'all', label: 'All Views', count: PROPERTY_PHOTOS.length },
    { key: 'living', label: 'Living & Dining', count: PROPERTY_PHOTOS.filter(p => p.category === 'living').length },
    { key: 'terrace', label: 'Private Terrace', count: PROPERTY_PHOTOS.filter(p => p.category === 'terrace').length },
    { key: 'kitchen', label: 'Modular Kitchen', count: PROPERTY_PHOTOS.filter(p => p.category === 'kitchen').length },
    { key: 'master', label: 'Master Suite', count: PROPERTY_PHOTOS.filter(p => p.category === 'master').length },
    { key: 'bed1', label: 'Parents BR 1', count: PROPERTY_PHOTOS.filter(p => p.category === 'bed1').length },
    { key: 'bed2', label: 'Kids / Study BR 2', count: PROPERTY_PHOTOS.filter(p => p.category === 'bed2').length },
    { key: 'entrance', label: 'East Foyer', count: PROPERTY_PHOTOS.filter(p => p.category === 'entrance').length }
  ];

  container.innerHTML = categories.map(cat => `
    <button class="filter-tab-btn ${cat.key === currentFilter ? 'active' : ''}" data-category="${cat.key}">
      <span>${cat.label}</span>
      <span class="filter-count">${cat.count}</span>
    </button>
  `).join('');

  container.querySelectorAll('.filter-tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = e.currentTarget;
      currentFilter = target.getAttribute('data-category');
      container.querySelectorAll('.filter-tab-btn').forEach(b => b.classList.remove('active'));
      target.classList.add('active');
      renderGalleryGrid();
    });
  });
}

// Render Gallery Grid
function renderGalleryGrid() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;

  const filteredPhotos = currentFilter === 'all' 
    ? PROPERTY_PHOTOS 
    : PROPERTY_PHOTOS.filter(p => p.category === currentFilter);

  grid.innerHTML = filteredPhotos.map((photo, idx) => {
    const isSpanFull = (photo.isHero || photo.id === 4 || photo.id === 10 || photo.id === 16);
    return `
      <div class="photo-card ${isSpanFull ? 'span-full' : ''}" data-photo-id="${photo.id}">
        <div class="photo-card-img-wrap">
          <span class="photo-badge-index">Photo ${photo.id} of 16</span>
          <div class="photo-zoom-hint" title="Click to expand full screen">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
          </div>
          <img 
            src="${photo.file}" 
            alt="${photo.title}" 
            loading="lazy" 
            onerror="this.onerror=null; this.src='${photo.fallback}';"
          />
        </div>
        <div class="photo-card-info">
          <div>
            <span class="photo-card-spread">${photo.spread}</span>
            <h4 class="photo-card-title">${photo.title}</h4>
            <p class="photo-card-desc">${photo.desc}</p>
          </div>
          <div class="photo-card-footer">
            <span>High-Definition Architectural View</span>
            <span class="photo-click-action">
              <span>View Full HD</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Wire photo cards click to open Lightbox
  grid.querySelectorAll('.photo-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = parseInt(card.getAttribute('data-photo-id'), 10);
      const photoIndex = PROPERTY_PHOTOS.findIndex(p => p.id === id);
      if (photoIndex !== -1) {
        openLightbox(photoIndex);
      }
    });
  });
}

// Lightbox Logic
function initLightbox() {
  const overlay = document.getElementById('lightboxOverlay');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');
  const zoomBtn = document.getElementById('lightboxZoom');
  const stageImg = document.getElementById('lightboxImg');

  if (!overlay) return;

  closeBtn?.addEventListener('click', closeLightbox);
  prevBtn?.addEventListener('click', prevLightboxPhoto);
  nextBtn?.addEventListener('click', nextLightboxPhoto);

  zoomBtn?.addEventListener('click', () => {
    isZoomed = !isZoomed;
    stageImg.classList.toggle('zoomed', isZoomed);
    zoomBtn.innerHTML = isZoomed 
      ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>'
      : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>';
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevLightboxPhoto();
    if (e.key === 'ArrowRight') nextLightboxPhoto();
  });

  // Close when clicking outside image
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target.classList.contains('lightbox-stage')) {
      closeLightbox();
    }
  });

  // Touch Swipe for Mobile
  let touchStartX = 0;
  overlay.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  overlay.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) nextLightboxPhoto();
    if (touchEndX - touchStartX > 50) prevLightboxPhoto();
  }, { passive: true });
}

function openLightbox(index) {
  currentLightboxIndex = index;
  const overlay = document.getElementById('lightboxOverlay');
  if (!overlay) return;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  updateLightboxContent();
}

function closeLightbox() {
  const overlay = document.getElementById('lightboxOverlay');
  if (!overlay) return;
  overlay.classList.remove('active');
  document.body.style.overflow = '';
  isZoomed = false;
  document.getElementById('lightboxImg')?.classList.remove('zoomed');
}

function nextLightboxPhoto() {
  currentLightboxIndex = (currentLightboxIndex + 1) % PROPERTY_PHOTOS.length;
  updateLightboxContent();
}

function prevLightboxPhoto() {
  currentLightboxIndex = (currentLightboxIndex - 1 + PROPERTY_PHOTOS.length) % PROPERTY_PHOTOS.length;
  updateLightboxContent();
}

function updateLightboxContent() {
  const photo = PROPERTY_PHOTOS[currentLightboxIndex];
  if (!photo) return;

  const counter = document.getElementById('lightboxCounter');
  const title = document.getElementById('lightboxTitle');
  const desc = document.getElementById('lightboxDesc');
  const img = document.getElementById('lightboxImg');
  const thumbStrip = document.getElementById('lightboxThumbStrip');

  if (counter) counter.textContent = `PHOTO ${photo.id} OF ${PROPERTY_PHOTOS.length}`;
  if (title) title.textContent = photo.title;
  if (desc) desc.textContent = photo.desc;
  
  if (img) {
    img.src = photo.file;
    img.onerror = () => { img.src = photo.fallback; };
    img.alt = photo.title;
    img.classList.remove('zoomed');
    isZoomed = false;
  }

  // Render Thumb Strip
  if (thumbStrip) {
    thumbStrip.innerHTML = PROPERTY_PHOTOS.map((p, idx) => `
      <div class="lightbox-thumb-item ${idx === currentLightboxIndex ? 'active' : ''}" data-idx="${idx}">
        <img src="${p.file}" alt="${p.title}" onerror="this.src='${p.fallback}'" />
      </div>
    `).join('');

    thumbStrip.querySelectorAll('.lightbox-thumb-item').forEach(thumb => {
      thumb.addEventListener('click', () => {
        const idx = parseInt(thumb.getAttribute('data-idx'), 10);
        currentLightboxIndex = idx;
        updateLightboxContent();
      });
    });

    // Auto-scroll active thumbnail into view
    const activeThumb = thumbStrip.querySelector('.lightbox-thumb-item.active');
    activeThumb?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }
}

// Space Explorer & Dimensions Interactive Matrix
function initSpaceExplorer() {
  const listContainer = document.getElementById('spaceListContainer');
  const detailContainer = document.getElementById('spaceDetailContainer');
  if (!listContainer || !detailContainer) return;

  // Render Space List
  listContainer.innerHTML = SPACES_DATA.map((space, idx) => `
    <div class="space-item ${idx === 0 ? 'active' : ''}" data-space-id="${space.id}">
      <div>
        <div class="space-item-name">${space.name}</div>
        <div class="space-item-dims">${space.dims}</div>
      </div>
      <div class="space-item-sqft">${space.sqft}</div>
    </div>
  `).join('');

  // Initial Detail
  renderSpaceDetail(SPACES_DATA[0]);

  // Wire Click Handlers
  listContainer.querySelectorAll('.space-item').forEach(item => {
    item.addEventListener('click', () => {
      listContainer.querySelectorAll('.space-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      const spaceId = item.getAttribute('data-space-id');
      const space = SPACES_DATA.find(s => s.id === spaceId);
      if (space) renderSpaceDetail(space);
    });
  });
}

function renderSpaceDetail(space) {
  const detailContainer = document.getElementById('spaceDetailContainer');
  if (!detailContainer) return;

  detailContainer.innerHTML = `
    <div class="space-preview-img-wrap">
      <img 
        class="space-preview-img" 
        src="${space.previewImg}" 
        alt="${space.name}" 
        onerror="this.src='${space.fallbackImg}'" 
      />
    </div>
    <div class="space-preview-details">
      <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:8px;">
        <h4>${space.name}</h4>
        <span style="font-family:var(--font-mono); font-weight:700; color:var(--accent-gold); font-size:15px;">${space.sqft} (${space.dims})</span>
      </div>
      <p>${space.desc}</p>
      <div class="space-specs-badges">
        ${space.features.map(f => `<span class="space-spec-tag">✓ ${f}</span>`).join('')}
      </div>
      <div style="margin-top:20px;">
        <button class="btn-primary" style="width:100%;" id="viewSpacePhotosBtn" data-space-id="${space.id}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
          <span>View High-Res Photos of ${space.name}</span>
        </button>
      </div>
    </div>
  `;

  document.getElementById('viewSpacePhotosBtn')?.addEventListener('click', () => {
    const spaceId = space.id;
    // Map space id to photo index
    const photoIdx = PROPERTY_PHOTOS.findIndex(p => p.spaceId === spaceId);
    if (photoIdx !== -1) {
      openLightbox(photoIdx);
    }
  });
}

// Interactive EMI & Loan Investment Calculator
function initCalculator() {
  const priceInput = document.getElementById('calcPrice');
  const downPaymentInput = document.getElementById('calcDownPayment');
  const interestInput = document.getElementById('calcInterest');
  const tenureInput = document.getElementById('calcTenure');

  const priceVal = document.getElementById('calcPriceVal');
  const downPaymentVal = document.getElementById('calcDownPaymentVal');
  const interestVal = document.getElementById('calcInterestVal');
  const tenureVal = document.getElementById('calcTenureVal');

  const emiOutput = document.getElementById('calcEmiResult');
  const loanAmountOutput = document.getElementById('calcLoanAmountResult');
  const totalInterestOutput = document.getElementById('calcTotalInterestResult');
  const totalPayableOutput = document.getElementById('calcTotalPayableResult');

  const barPrincipal = document.getElementById('calcBarPrincipal');
  const barInterest = document.getElementById('calcBarInterest');

  if (!priceInput) return;

  function recalculate() {
    const price = parseFloat(priceInput.value);
    const downPaymentPct = parseFloat(downPaymentInput.value);
    const annualInterestRate = parseFloat(interestInput.value);
    const tenureYears = parseFloat(tenureInput.value);

    // Update Label Displays
    if (priceVal) priceVal.textContent = formatINR(price);
    const downPaymentAmt = (price * downPaymentPct) / 100;
    if (downPaymentVal) downPaymentVal.textContent = `${downPaymentPct}% (${formatINR(downPaymentAmt)})`;
    if (interestVal) interestVal.textContent = `${annualInterestRate.toFixed(1)}% p.a.`;
    if (tenureVal) tenureVal.textContent = `${tenureYears} Years (${tenureYears * 12} Mos)`;

    // Math: EMI = [P x R x (1+R)^N]/[(1+R)^N-1]
    const principal = price - downPaymentAmt;
    const monthlyRate = (annualInterestRate / 12) / 100;
    const totalMonths = tenureYears * 12;

    let emi = 0;
    let totalPayable = 0;
    let totalInterest = 0;

    if (principal > 0 && monthlyRate > 0) {
      const compoundFactor = Math.pow(1 + monthlyRate, totalMonths);
      emi = Math.round((principal * monthlyRate * compoundFactor) / (compoundFactor - 1));
      totalPayable = emi * totalMonths;
      totalInterest = totalPayable - principal;
    }

    if (emiOutput) emiOutput.textContent = formatINR(emi);
    if (loanAmountOutput) loanAmountOutput.textContent = formatINR(principal);
    if (totalInterestOutput) totalInterestOutput.textContent = formatINR(totalInterest);
    if (totalPayableOutput) totalPayableOutput.textContent = formatINR(totalPayable);

    // Progress bar ratios
    if (barPrincipal && barInterest && totalPayable > 0) {
      const principalPct = ((principal / totalPayable) * 100).toFixed(1);
      const interestPct = (100 - principalPct).toFixed(1);
      barPrincipal.style.width = `${principalPct}%`;
      barInterest.style.width = `${interestPct}%`;
    }
  }

  // Preset Buttons
  document.querySelectorAll('.calc-preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.getAttribute('data-price');
      priceInput.value = val;
      recalculate();
    });
  });

  [priceInput, downPaymentInput, interestInput, tenureInput].forEach(inp => {
    inp?.addEventListener('input', recalculate);
  });

  // Run initial calculation
  recalculate();
}

// Neighborhood Guide Tabs
function initLocationTabs() {
  const tabs = document.querySelectorAll('.loc-tab-btn');
  const cards = document.querySelectorAll('.loc-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.getAttribute('data-cat');

      cards.forEach(card => {
        if (cat === 'all' || card.getAttribute('data-loc-cat') === cat) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Schedule Viewing Modal & WhatsApp Dispatcher
function initScheduleModal() {
  const modal = document.getElementById('scheduleModal');
  const openBtns = document.querySelectorAll('[data-open-schedule]');
  const closeBtn = document.getElementById('closeScheduleModal');
  const form = document.getElementById('scheduleForm');

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal?.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  closeBtn?.addEventListener('click', () => {
    modal?.classList.remove('active');
    document.body.style.overflow = '';
  });

  modal?.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // Video Walkthrough Modal
  const videoModal = document.getElementById('videoModal');
  const openVideoBtns = document.querySelectorAll('[data-open-video]');
  const closeVideoBtn = document.getElementById('closeVideoModal');

  openVideoBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      videoModal?.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  closeVideoBtn?.addEventListener('click', () => {
    videoModal?.classList.remove('active');
    document.body.style.overflow = '';
  });

  videoModal?.addEventListener('click', (e) => {
    if (e.target === videoModal) {
      videoModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // Form Submission
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('schedName')?.value || 'Prospective Buyer';
    const phone = document.getElementById('schedPhone')?.value || '';
    const date = document.getElementById('schedDate')?.value || 'Earliest Convenient Date';
    const time = document.getElementById('schedTime')?.value || 'Morning (10:00 AM - 12:00 PM)';
    const notes = document.getElementById('schedNotes')?.value || '';

    // Generate WhatsApp Text
    const waText = encodeURIComponent(
      `Hello, I would like to schedule a private viewing for the Exclusive 3 BHK Resale Property in Sadashiv Peth, Central Pune.\n\n` +
      `👤 Name: ${name}\n` +
      `📱 Phone: ${phone}\n` +
      `📅 Preferred Date: ${date}\n` +
      `⏰ Preferred Time: ${time}\n` +
      (notes ? `📝 Note: ${notes}\n` : '') +
      `\nPlease share inspection slot confirmation and pricing details.`
    );

    const waUrl = `https://wa.me/919767641539?text=${waText}`;

    // Show Confirmation
    const body = modal.querySelector('.modal-body');
    if (body) {
      body.innerHTML = `
        <div style="text-align:center; padding: 20px 0;">
          <div style="width:56px; height:56px; border-radius:50%; background:#dcfce7; color:#16a34a; display:flex; align-items:center; justify-content:center; margin:0 auto 16px auto;">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <h4 style="font-size:20px; color:var(--primary); font-weight:700; margin-bottom:8px;">Viewing Request Received!</h4>
          <p style="font-size:14px; color:#475569; margin-bottom:20px; line-height:1.6;">
            Thank you, <strong>${name}</strong>. We have logged your request for <strong>${date} (${time})</strong>.
          </p>
          <div style="display:flex; flex-direction:column; gap:12px;">
            <a href="${waUrl}" target="_blank" class="btn-whatsapp" style="justify-content:center;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.766-5.771zm0-2.172c4.385 0 7.947 3.562 7.947 7.947 0 4.384-3.562 7.947-7.947 7.947-1.391 0-2.697-.361-3.834-.991l-4.227 1.109 1.127-4.116c-.718-1.196-1.127-2.588-1.127-4.062 0-4.385 3.562-7.947 7.947-7.947z"/></svg>
              <span>Instant Confirmation via WhatsApp</span>
            </a>
            <button class="btn-secondary" id="resetModalBtn" style="justify-content:center;">Close Window</button>
          </div>
        </div>
      `;

      document.getElementById('resetModalBtn')?.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      });
    }

    showToast(`Viewing requested for ${date}! Opening WhatsApp...`);
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 800);
  });
}

// Toast Alert
function showToast(message) {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Print Property Dossier Feature
window.printPropertyDossier = function() {
  window.print();
};

// Share Listing
window.shareListing = function() {
  if (navigator.share) {
    navigator.share({
      title: 'Elite Pune Property - Luxury 3 BHK Resale with Private Terrace',
      text: 'Check out this rare 3 BHK residence with 102 sq ft attached terrace and dedicated covered car parking in Central Pune.',
      url: window.location.href
    }).catch(() => {});
  } else {
    navigator.clipboard.writeText(window.location.href);
    showToast('Listing link copied to clipboard!');
  }
};

// Smooth Nav Scrolling & Active Link Highlighting
function initSmoothScroll() {
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  const sections = Array.from(navLinks).map(link => {
    const id = link.getAttribute('href').substring(1);
    return document.getElementById(id);
  }).filter(Boolean);

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 100;
    sections.forEach((sec, idx) => {
      if (sec.offsetTop <= scrollPos && (sec.offsetTop + sec.offsetHeight) > scrollPos) {
        navLinks.forEach(l => l.classList.remove('active'));
        navLinks[idx]?.classList.add('active');
      }
    });
  }, { passive: true });
}
