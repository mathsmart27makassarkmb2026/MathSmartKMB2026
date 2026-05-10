// =============================================
// VIDEO MODULE
// =============================================
let currentVideoFilter = 'all';

function filterVideo(kelas, e) {
  currentVideoFilter = kelas;

  document.querySelectorAll('.vid-filter')
    .forEach(btn => btn.classList.remove('active-vid'));

  e.currentTarget.classList.add('active-vid');

  renderVideos();
}

function renderVideos() {
  const grid = document.getElementById('videoGrid');
  if (!grid) return;

  const filtered = currentVideoFilter === 'all'
    ? VIDEO_DATA
    : VIDEO_DATA.filter(v => v.kelas === currentVideoFilter);

  grid.innerHTML = filtered.map((v, i) => `
    <div class="video-card fade-in" style="animation-delay:${i * 0.08}s"
      onclick="openVideo('${v.id}')">

      <div class="video-thumb">
        <img src="https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg"
          alt="${v.title}" />
        <div class="play-overlay">
          <div class="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center">
            ▶
          </div>
        </div>
      </div>

      <div class="p-4">
        <h4 class="font-bold">${v.title}</h4>
        <p class="text-xs text-gray-400">Kelas ${v.kelas} • ${v.channel}</p>
      </div>

    </div>
  `).join('');
}

function openVideo(id) {
  const video = VIDEO_DATA.find(v => v.id == id);
  if (!video) return;

  const frame = document.getElementById('videoFrame');

  frame.src = "";

  setTimeout(() => {
    frame.src = `https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`;
  }, 100);

  document.getElementById('videoModalTitle').textContent = video.title;
  document.getElementById('videoDesc').textContent = video.desc;

  const modal = document.getElementById('videoModal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');

  document.body.style.overflow = 'hidden';
}
function stopVideo() {
  document.getElementById('videoFrame').src = '';

  const modal = document.getElementById('videoModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  

  document.body.style.overflow = 'auto';

  // optional reset state saja
  window.lastOpenedMateri = null;
}
// =============================================
// CLOSE VIDEO MODAL SAAT KLIK LUAR
// =============================================
document.getElementById('videoModal').addEventListener('click', function(e) {

  if (e.target === this) {
    stopVideo();
  }

});