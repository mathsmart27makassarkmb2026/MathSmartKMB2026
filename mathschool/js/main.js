// =============================================
// GLOBAL STATE
// =============================================

// =============================================
// NAVBAR & UI
// =============================================
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar?.classList.toggle('scrolled', window.scrollY > 50);
});

function toggleMenu() {
  document.getElementById('mobileMenu')?.classList.toggle('hidden');
}
// =============================================
// MODAL CONTROL
// =============================================
function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;

  modal.classList.remove('hidden');
  modal.classList.add('flex');

  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;

  modal.classList.add('hidden');
  modal.classList.remove('flex');

  document.body.style.overflow = '';
}
function switchTab(tab) {
  const materi = document.getElementById('contentMateri');
  const tips = document.getElementById('contentTips');

  const tabMateri = document.getElementById('tabMateri');
  const tabTips = document.getElementById('tabTips');

  if (!materi || !tips) return;

  if (tab === 'materi') {
    materi.classList.remove('hidden');
    tips.classList.add('hidden');

    tabMateri?.classList.add('active-tab');
    tabTips?.classList.remove('active-tab');
  }

  if (tab === 'tips') {
    tips.classList.remove('hidden');
    materi.classList.add('hidden');

    tabTips?.classList.add('active-tab');
    tabMateri?.classList.remove('active-tab');
  }
}
function goToPage(pageId) {
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
  });

  const page = document.getElementById(pageId);
  if (!page) return;

  page.classList.add('active');

  closeAllMateriUI();

  if (pageId !== 'page-quiz') {
    if (typeof resetQuiz === "function") resetQuiz();
  }
if (pageId === 'page-video') {
    renderVideos();
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function closeAllMateriUI() {
  // kalau ada modal materi terbuka
  document.getElementById('materiModal')?.classList.add('hidden');

  // kalau ada overlay / detail aktif
  document.querySelectorAll('.materi-detail, .active-materi').forEach(el => {
    el.classList.add('hidden');
    el.classList.remove('active');
  });
}
function handleSearch(keyword) {
  const resultBox = document.getElementById("searchResult");

  if (!keyword) {
    resultBox.classList.add("hidden");
    return;
  }

  keyword = keyword.toLowerCase();
  let results = [];

  // ============================
  // LOOP SEKALI SAJA (OPTIMAL)
  // ============================
  Object.values(MATERI_DATA).forEach(kelas => {
    Object.values(kelas).forEach(semester => {
      semester.forEach(m => {

        if (m.title.toLowerCase().includes(keyword)) {

          // Materi
          results.push({
            title: "📖 " + m.title,
            type: "materi",
            id: m.id
          });

          // Video
          results.push({
            title: "🎥 Video: " + m.title,
            type: "video",
            id: m.id
          });

          // Quiz
          results.push({
            title: "📝 Quiz: " + m.title,
            type: "quiz",
            id: m.id
          });
        }

      });
    });
  });

  // ============================
  // OUTPUT
  // ============================
  if (results.length === 0) {
    resultBox.innerHTML = `<p class="p-4 text-gray-400 text-sm">Tidak ditemukan</p>`;
  } else {
    resultBox.innerHTML = results.map(item => `
      <div onclick="openSearchResult('${item.type}', '${item.id}')"
        class="p-3 hover:bg-gray-800 cursor-pointer text-sm text-white">
        ${item.title}
      </div>
    `).join("");
  }

  resultBox.classList.remove("hidden");
}
function openSearchResult(type, id) {
  document.getElementById("searchResult")?.classList.add("hidden");

  if (type === "materi") {
    openMateri(id);
  }

  if (type === "video") {
    goToPage("page-video");

    // opsional: auto scroll ke video materi
    setTimeout(() => {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  }

  if (type === "quiz") {
    goToPage("page-quiz");

    setTimeout(() => {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  }
}
// =============================================
// INFO SECTION
// =============================================
function renderInfo() {
  const grid = document.getElementById('infoGrid');
  if (!grid || typeof INFO_DATA === 'undefined') return;

  grid.innerHTML = INFO_DATA.map((info, i) => `
    <div class="info-card fade-in" style="animation-delay:${i * 0.1}s">
      <div style="display:flex;justify-content:space-between;margin-bottom:8px;">
        <span class="${info.typeColor}">${info.type}</span>
        <span style="font-size:12px;color:#aaa">${info.date}</span>
      </div>
      <div style="font-size:26px">${info.icon}</div>
      <h3 style="color:white">${info.title}</h3>
      <p style="color:#aaa;font-size:13px">${info.content}</p>
    </div>
  `).join('');
}
function goToQuiz() {
  closeModal('materiModal');
  goToPage('page-quiz');
}
document.addEventListener('DOMContentLoaded', () => {
renderNilai();
updateActiveButtons();
  // Klik backdrop modal
['materiModal', 'videoModal'].forEach(id => {
  document.getElementById(id)?.addEventListener('click', function(e) {
    if (e.target === this) {
      if (id === 'videoModal') stopVideo();
      closeModal(id);
    }
  });
  });
  // ESC key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      stopVideo();
      closeModal('materiModal');
      closeModal('videoModal');
    }
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Animasi section
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  });

  document.querySelectorAll('section').forEach(el => observer.observe(el));

  // INIT
  renderHome();
  renderInfo();
});
