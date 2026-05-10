// =============================================
// MATERI MODULE
// =============================================
let currentKelas = 'all';
let currentSemester = 'all';
function findMateri(id) {
  let allData = [];

  Object.values(MATERI_DATA).forEach(kelas => {
    Object.values(kelas).forEach(semester => {
      allData = allData.concat(semester);
    });
  });

  return allData.find(m => m.id === id);
}// =============================================
// RENDER BERANDA
// =============================================
function renderHome() {
  const container = document.getElementById('materiGrid');
  if (!container) return;

  let data = [];

  if (currentKelas === 'all' && currentSemester === 'all') {
    Object.values(MATERI_DATA).forEach(kelas => {
      Object.values(kelas).forEach(semester => {
        data = data.concat(semester);
      });
    });
  } 
  else if (currentKelas === 'all') {
    Object.values(MATERI_DATA).forEach(kelas => {
      data = data.concat(kelas[currentSemester] || []);
    });
  } 
  else if (currentSemester === 'all') {
    Object.values(MATERI_DATA[currentKelas]).forEach(semester => {
      data = data.concat(semester);
    });
  } 
  else {
    data = MATERI_DATA?.[currentKelas]?.[currentSemester] || [];
  }

  if (data.length === 0) {
    container.innerHTML = `<p style="color:white">Materi belum tersedia</p>`;
    return;
  }

  container.innerHTML = data.map(item => `
    <div class="materi-card">
      <div class="flex items-center gap-3 mb-3">
        <span class="text-2xl">${item.icon}</span>
        <h3 class="font-bold text-lg">${item.title}</h3>
      </div>

      <p class="text-sm text-gray-400 mb-4">${item.desc}</p>

      <div class="flex gap-2 flex-wrap">
        <button onclick="openMateri('${item.id}')" class="btn-baca">
          📖 Baca
        </button>

        <button onclick="closeModal('materiModal'); goToPage('page-quiz')" class="btn-baca">
          📝 Quiz
        </button>

        <button onclick="goToPage('page-video')" class="btn-video">
          🎥 Video
        </button>
      </div>
    </div>
  `).join('');
 if (data.length === 0) {
  container.innerHTML = `<p style="color:white">Materi belum tersedia</p>`;
  return;
}
}
const modal = document.getElementById('materiModal');
function openMateri(id) {
  const materi = findMateri(id);
  if (!materi) return;

  document.getElementById('modalContent').innerHTML = `
    
    <!-- HEADER MATERI -->
    <div style="display:flex; align-items:center; gap:12px; margin-bottom:20px;">
      <div style="
        width:50px;
        height:50px;
        border-radius:12px;
        background:${materi.color}20;
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:24px;
      ">
        ${materi.icon}
      </div>

      <div>
        <h2 style="margin:0; color:white; font-size:20px;">
          ${materi.title}
        </h2>
        <p style="margin:0; font-size:13px; color:#aaa;">
          ${materi.desc}
        </p>
      </div>
    </div>

    <!-- TAB BUTTON -->
    <div class="tab-wrapper">
      <button onclick="switchTab('materi')" id="tabMateri" class="tab-btn active-tab">
        📖 Materi
      </button>
      <button onclick="switchTab('tips')" id="tabTips" class="tab-btn">
        💡 Tips
      </button>
    </div>

    <!-- CONTENT MATERI -->
    <div id="contentMateri" class="tab-content">
      <div class="materi-body">
        ${materi.isi}
      </div>
    </div>

    <!-- CONTENT TIPS -->
    <div id="contentTips" class="tab-content hidden">
      <div class="tips-box">
        💡 ${materi.tip}
      </div>
    </div>

    <!-- ACTION BUTTON -->
    <div style="display:flex; gap:10px; margin-top:20px;">
     <button onclick="goToVideo()" class="btn-video">
  🎥 Video
</button>
<button onclick="goToQuiz()" class="btn-baca">
  📝 Quiz
</button>
    </div>
  `;

  const modal = document.getElementById('materiModal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';

  window.currentMateriId = id;
}
  function updateActiveButtons() {
  // RESET semua tombol kelas
  document.querySelectorAll('.class-tab').forEach(btn => {
    btn.classList.remove('active-tab');
  });

  // RESET semua tombol semester
  document.querySelectorAll('.sem-tab').forEach(btn => {
    btn.classList.remove('active-sem');
  });

  // === HANDLE KELAS ===
  if (currentKelas === 'all') {
    document.getElementById('tabAll')?.classList.add('active-tab');
  } else {
    document.getElementById('tab' + currentKelas)?.classList.add('active-tab');
  }

  // === HANDLE SEMESTER ===
  if (currentSemester === 'all') {
    document.getElementById('semAll')?.classList.add('active-sem');
  } else {
    document.getElementById(currentSemester)?.classList.add('active-sem');
  }
}
function goToVideo() {

  const materi = findMateri(window.currentMateriId);

  if (!materi) {
    alert('Materi tidak ditemukan');
    return;
  }

  // Cari video yang judulnya sama dengan materi
  const video = VIDEO_DATA.find(
    v => v.title === materi.title
  );

  if (!video) {
    alert('Video belum tersedia');
    return;
  }

  // Tutup modal materi
  closeModal('materiModal');

  // Buka video langsung di web/modal
  openVideo(video.id);
}
function setKelas(kelas) {
  currentKelas = kelas;
  renderHome();
  updateActiveButtons();
}

function setSemester(sem) {
  currentSemester = sem;
  renderHome();
  updateActiveButtons();
}
function setSemua() {
  currentKelas = 'all';
  currentSemester = 'all';

  updateActiveButtons();
  renderHome();
}
document.getElementById('materiModal').addEventListener('click', function(e) {
  if (e.target === this) {
    closeModal('materiModal');
  }
});
// Init
document.addEventListener('DOMContentLoaded', () => {
  setSemua();
});