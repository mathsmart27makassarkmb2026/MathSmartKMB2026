let currentIndex = 0;
let currentQuestions = [];
let score = 0;
let timer;
// ======================================
// DATA QUIZ SAAT INI
// ======================================
// ===============================
// TAMPILKAN CARD QUIZ PER MATERI
// ===============================
function showMateriQuiz() {

  const kelas =
    document.getElementById("quizClass").value;

  const semester =
    document.getElementById("quizSem").value;

  const level =
    document.getElementById("quizLevel").value;

  const topik =
    document.getElementById("quizTopic").value;

  renderMateriQuiz(
    kelas,
    semester,
    level,
    topik
  );

  setTimeout(() => {

    document.getElementById("materiQuizGrid")
      .scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

  }, 100);
}
// ===============================
// RENDER CARD QUIZ
// ===============================
function renderMateriQuiz(
  selectedKelas,
  selectedSemester,
  selectedLevel,
  selectedTopik
) {

  const grid =
    document.getElementById("materiQuizGrid");

  grid.innerHTML = "";

  const data =
    QUIZ_DATA[selectedKelas][selectedSemester];

  // kalau topik dipilih
  if (
    selectedTopik &&
    data[selectedTopik] &&
    data[selectedTopik][selectedLevel]
  ) {

    createQuizCard(
      grid,
      selectedKelas,
      selectedSemester,
      selectedTopik,
      selectedLevel,
      data[selectedTopik][selectedLevel]
    );

  } else {

    // fallback kalau tidak ada
    grid.innerHTML = `
      <div class="col-span-full text-center py-10 text-gray-400">
        Materi tidak ditemukan.
      </div>
    `;
  }
}
function createQuizCard(
  grid,
  kelas,
  semester,
  topik,
  level,
  questions
) {

  const jumlahSoal = questions.length;

  const card =
    document.createElement("div");

  card.className =
    "bg-gray-900 border border-gray-700 rounded-3xl p-6 hover:border-violet-500 hover:-translate-y-1 transition-all duration-300";

  card.innerHTML = `
    <div class="flex items-center justify-between mb-4">

      <div class="w-14 h-14 rounded-2xl bg-violet-500/10 flex items-center justify-center text-2xl">
        📝
      </div>

      <span class="text-xs bg-violet-500/20 text-violet-300 px-3 py-1 rounded-full">
        Kelas ${kelas}
      </span>

    </div>

    <h3 class="text-xl font-bold text-white mb-2">
      ${topik}
    </h3>

    <p class="text-gray-400 text-sm mb-6">
      Semester ${semester}
      • ${jumlahSoal} Soal
      • ${level.toUpperCase()}
    </p>

    <button class="w-full bg-gradient-to-r from-violet-600 to-purple-500 hover:opacity-90 py-3 rounded-2xl font-semibold transition">

      Mulai Quiz

    </button>
  `;

  card.querySelector("button").onclick = () => {

    startMateriQuiz(
      kelas,
      semester,
      topik,
      level
    );

    setTimeout(() => {

      document.getElementById("quizPlay")
        .scrollIntoView({
          behavior: "smooth"
        });

    }, 100);
  };

  grid.appendChild(card);
}
// ===============================
// MULAI QUIZ PER MATERI
// ===============================
function startQuickQuiz() {

  const kelas =
    document.getElementById("quizClass").value;

  const semester =
    document.getElementById("quizSem").value;

  const topik =
    document.getElementById("quizTopic").value;

  const level =
    document.getElementById("quizLevel").value;

  // =========================
  // SIMPAN DATA QUIZ
  // =========================

  currentKelas = kelas;
  currentSemester = semester;
  currentTopik = topik;
  currentLevel = level;

  // =========================
  // AMBIL SOAL
  // =========================

  currentQuestions =
    QUIZ_DATA[kelas][semester][topik][level];

  if (!currentQuestions || currentQuestions.length === 0) {

    alert("Soal belum tersedia");

    return;
  }

  currentIndex = 0;
  score = 0;

  // tampilkan quiz
  document.getElementById("quizPlay")
    .classList.remove("hidden");

  // sembunyikan hasil lama
  document.getElementById("quizResult")
    .classList.add("hidden");

  loadQuestion();

  // scroll otomatis
  setTimeout(() => {

    document.getElementById("quizPlay")
      .scrollIntoView({
        behavior: "smooth"
      });

  }, 100);
}

// ===============================
// LOAD SOAL
// ===============================
function loadQuestion() {
  const q = currentQuestions[currentIndex];

  document.getElementById("qNum").innerText = currentIndex + 1;
  document.getElementById("qTotal").innerText = currentQuestions.length;

  document.getElementById("quizQuestion").innerText = q.q;

  const optionsEl = document.getElementById("quizOptions");
  optionsEl.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
btn.className =
  "w-full bg-gray-800 p-4 rounded-xl hover:bg-violet-600 transition text-left option-btn";

    btn.innerText = opt;

    btn.onclick = () => {
      checkAnswer(i);

      // disable semua tombol setelah pilih
      const allBtn = optionsEl.querySelectorAll("button");
      allBtn.forEach(b => b.disabled = true);

      // warna jawaban benar/salah
      if (i === q.answer) {
        btn.classList.add("bg-green-600");
      } else {
        btn.classList.add("bg-red-600");
        allBtn[q.answer].classList.add("bg-green-600");
      }
    };

    optionsEl.appendChild(btn);
  });

  startTimer(q.time || 30);
}

// ===============================
// CEK JAWABAN
// ===============================
function checkAnswer(selected) {

  clearInterval(timer);

  const q = currentQuestions[currentIndex];

  const allButtons =
    document.querySelectorAll("#quizOptions button");

  const explanationBox = document.getElementById("explanationBox");

  // =========================
  // RESET ANIMASI BOX
  // =========================
  explanationBox.classList.remove(
    "hidden",
    "opacity-100",
    "translate-y-0",
    "text-green-600",
    "text-red-600"
  );

  explanationBox.classList.add("opacity-0", "translate-y-2");

  allButtons.forEach((btn, index) => {

    btn.disabled = true;
    btn.classList.remove("hover:bg-violet-600");

    // jawaban benar
    if (index === q.answer) {
      btn.classList.add(
        "bg-green-600",
        "border-green-400"
      );
    }

    // jawaban salah
    if (index === selected && index !== q.answer) {
      btn.classList.add(
        "bg-red-600",
        "border-red-400"
      );
    }
  });

  // tambah score jika benar
  if (selected === q.answer) {
    score++;
  }

  // =========================
  // 🧠 ISI PENJELASAN MODERN
  // =========================
  if (selected === q.answer) {
    explanationBox.innerHTML = `
      <div class="font-semibold text-green-600 mb-2">
        ✔ Jawaban Benar
      </div>
      <div class="text-gray-700 leading-relaxed">
        ${q.explain}
      </div>
    `;
  } else {
    explanationBox.innerHTML = `
      <div class="font-semibold text-red-600 mb-2">
        ✖ Jawaban Salah
      </div>
      <div class="text-gray-700 leading-relaxed mb-2">
        Jawaban benar: <b>${q.options[q.answer]}</b>
      </div>
      <div class="text-gray-700 leading-relaxed">
        ${q.explain}
      </div>
    `;
  }

  // =========================
  // ✨ ANIMASI FADE-IN
  // =========================
  setTimeout(() => {
    explanationBox.classList.remove("opacity-0", "translate-y-2");
    explanationBox.classList.add("opacity-100", "translate-y-0");
  }, 50);

  document
    .getElementById("nextBtn")
    .classList.remove("hidden");
}
// ===============================
// UPDATE DROPDOWN MATERI
// ===============================

// ===============================
// UPDATE DROPDOWN MATERI
// ===============================
function updateQuizTopic() {

  const kelas = document.getElementById("quizClass").value;
  const semester = document.getElementById("quizSem").value;

  const topicSelect = document.getElementById("quizTopic");

  topicSelect.innerHTML = `<option value="">Pilih materi</option>`;

  if (!QUIZ_DATA[kelas] || !QUIZ_DATA[kelas][semester]) {
    topicSelect.innerHTML += `<option value="">Materi belum tersedia</option>`;
    return;
  }

  const data = QUIZ_DATA[kelas][semester];

  Object.keys(data).forEach(topik => {
    const option = document.createElement("option");
    option.value = topik;
    option.textContent = topik;
    topicSelect.appendChild(option);
  });
}
function startMateriQuiz(
  kelas,
  semester,
  topik,
  level
) {

  // =========================
  // SIMPAN DATA QUIZ
  // =========================

  currentKelas = kelas;
  currentSemester = semester;
  currentTopik = topik;
  currentLevel = level;

  // =========================
  // AMBIL SOAL
  // =========================

  currentQuestions =
    QUIZ_DATA[kelas][semester][topik][level];

  if (!currentQuestions) {

    alert("Soal belum tersedia");

    return;
  }

  currentIndex = 0;
  score = 0;

  document.getElementById("quizPlay")
    .classList.remove("hidden");

  document.getElementById("quizResult")
    .classList.add("hidden");

  loadQuestion();

  // scroll otomatis
  setTimeout(() => {

    document.getElementById("quizPlay")
      .scrollIntoView({
        behavior: "smooth"
      });

  }, 100);
}
// ===============================
// SOAL BERIKUTNYA
// ===============================
function nextQuestion() {

  currentIndex++;

  document.getElementById("nextBtn").classList.add("hidden");

  const explanationBox = document.getElementById("explanationBox");

  if (explanationBox) {

    // reset isi
    explanationBox.innerHTML = "";

    // reset animasi (TETAP ADA BOX-nya)
    explanationBox.classList.remove("opacity-100", "translate-y-0");

    explanationBox.classList.add("opacity-0", "translate-y-2");
  }

  if (currentIndex < currentQuestions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

// ===============================
// TIMER
// ===============================
function startTimer(time) {
  clearInterval(timer);

  let t = time;

  document.getElementById("timer").innerText = t;

  timer = setInterval(() => {
    t--;

    document.getElementById("timer").innerText = t;

    if (t <= 0) {
      clearInterval(timer);

      currentIndex++;

      if (currentIndex < currentQuestions.length) {
        loadQuestion();
      } else {
        showResult();
      }
    }
  }, 1000);
}

// ===============================
// HASIL QUIZ
// ===============================
function showResult() {

  clearInterval(timer);

  document
    .getElementById("quizPlay")
    .classList.add("hidden");

  document
    .getElementById("quizResult")
    .classList.remove("hidden");

  // =========================
  // HITUNG NILAI
  // =========================

  const nilai = Math.round(
    (score / currentQuestions.length) * 100
  );

  // tampilkan nilai
  document.getElementById("scoreNum")
    .innerText = nilai;

  // pesan hasil
  document.getElementById("resultMsg")
    .innerText =

      nilai >= 80
      ? "🎉 Hebat! Kamu sangat menguasai materi"

      : nilai >= 60
      ? "🙂 Bagus, terus tingkatkan lagi"

      : "😅 Yuk belajar lagi dan coba ulangi quiz";

  // =========================
  // SIMPAN NILAI
  // =========================

  saveQuizResult(nilai);
}
// ======================================
// SIMPAN HASIL QUIZ
// ======================================

function saveQuizResult(nilai) {

  // ambil riwayat lama
  const history =
    JSON.parse(
      localStorage.getItem("quizHistory")
    ) || [];

  // buat data baru
  const data = {

    tanggal:
      new Date().toLocaleString("id-ID"),

    kelas: currentKelas,

    semester: currentSemester,

    materi: currentTopik,

    level: currentLevel,

    nilai: nilai,

    status:
      nilai >= 75
      ? "Lulus"
      : "Belum"

  };

  // masukkan paling atas
  history.unshift(data);

  // simpan ke localStorage
  localStorage.setItem(
    "quizHistory",
    JSON.stringify(history)
  );

  // refresh tabel
   renderNilai();
}
// ===============================
// TAMPILKAN NILAI
// ===============================
function renderNilai() {

  const body =
    document.getElementById("nilaiBody");

  if (!body) return;

  const riwayat =
    JSON.parse(localStorage.getItem("quizHistory")) || [];

  body.innerHTML = "";

  if (riwayat.length === 0) {

    body.innerHTML = `
      <tr>
        <td colspan="6"
          class="text-center p-8 text-gray-400">
          Belum ada riwayat quiz
        </td>
      </tr>
    `;

    return;
  }

  riwayat.forEach(item => {

    body.innerHTML += `
      <tr class="border-t border-gray-800 hover:bg-gray-800/50 transition">

        <td class="p-4">
          ${item.tanggal}
        </td>

        <td class="p-4">
          ${item.kelas}
        </td>

        <td class="p-4">
          ${item.semester}
        </td>

        <td class="p-4">
          ${item.materi}
        </td>

        <td class="p-4 uppercase">
          ${item.level}
        </td>

        <td class="p-4 font-bold text-violet-400">
          ${item.nilai}
        </td>

      </tr>
    `;
  });
}
// ===============================
// RESET QUIZ
// ===============================
function resetQuiz() {

  document
    .getElementById("quizPlay")
    .classList.add("hidden");

  document
    .getElementById("quizResult")
    .classList.add("hidden");

  window.scrollTo({
    top: document.getElementById("page-quiz").offsetTop - 80,
    behavior: "smooth"
  });
}
// ======================================
// LOAD RIWAYAT QUIZ
// ======================================

function loadQuizHistory() {

  const body =
    document.getElementById("quizHistoryBody");

  if (!body) return;

  const history =
    JSON.parse(
      localStorage.getItem("quizHistory")
    ) || [];

  body.innerHTML = "";

  // jika kosong
  if (history.length === 0) {

    body.innerHTML = `
      <tr>

        <td colspan="7"
          class="py-6 text-center text-gray-400">

          Belum ada riwayat quiz.

        </td>

      </tr>
    `;

    return;
  }

  // tampilkan semua data
  history.forEach(item => {

    const tr =
      document.createElement("tr");

    tr.className =
      "border-b border-gray-800 hover:bg-gray-800/50 transition";

    tr.innerHTML = `

      <td class="py-4">
        ${item.tanggal}
      </td>

      <td class="py-4">
        ${item.kelas}
      </td>

      <td class="py-4">
        ${item.semester}
      </td>

      <td class="py-4">
        ${item.materi}
      </td>

      <td class="py-4 uppercase">
        ${item.level}
      </td>

      <td class="py-4 font-bold text-violet-400">
        ${item.nilai}
      </td>

      <td class="py-4">

        <span class="
          px-3 py-1 rounded-full text-xs font-semibold

          ${item.status === "Lulus"
            ? "bg-green-500/20 text-green-400"
            : "bg-red-500/20 text-red-400"}
        ">

          ${item.status}

        </span>

      </td>

    `;

    body.appendChild(tr);

  });
}
// ======================================
// HAPUS RIWAYAT
// ======================================

function clearQuizHistory() {

  if (!confirm(
    "Hapus semua riwayat quiz?"
  )) return;

  localStorage.removeItem(
    "quizHistory"
  );

  loadQuizHistory();
}
window.addEventListener("DOMContentLoaded", () => {
updateQuizTopic();
  renderNilai();

  document.getElementById("quizClass")
    .addEventListener("change", updateQuizTopic);

  document.getElementById("quizSem")
    .addEventListener("change", updateQuizTopic);
});
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(updateQuizTopic, 200);
});