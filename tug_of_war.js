let targetScore = 20; // bisa 20 kalau mau lebih lama
let position = 0;
let scoreA = 0;
let scoreB = 0;
let currentAnswer = 0;
let currentLevel = "easy";
let gameTimer = null;
let timeLeft = 0;
let gameRunning = false;
let isPaused = false;
document.addEventListener("DOMContentLoaded", () => {

  const startBtn = document.getElementById("startGameBtn");
  const stopBtn = document.getElementById("stopGame");

  if (startBtn) {
    startBtn.addEventListener("click", startGame);
  }

  if (stopBtn) {
    stopBtn.addEventListener("click", stopGame);
  }

});
function startGame() {

  if (gameRunning) return; // ❗ cegah double start
  gameRunning = true;

  restartGame();
  generateQuestion();
  startTimer();
  updateRope();
}
function stopGame() {

  isPaused = !isPaused;

  const btn = document.getElementById("stopGame");

  if (btn) {
    btn.innerText = isPaused ? "▶ Lanjut" : "⏸ Pause";
  }
}
// =============================================
// GENERATE QUESTION
// =============================================
function generateQuestion() {

  const ops = ["+", "-", "×", "÷"];

  const weightedOps = [
    "×","×","×","×",   // lebih sering
    "+","+","-","÷"
  ];

  let question = "";
  let answer = 0;

  const op = weightedOps[Math.floor(Math.random() * weightedOps.length)];

  // =========================
  // PERKALIAN (3 - 10)
  // =========================
  if (op === "×") {

    const a = Math.floor(Math.random() * 8 + 3); // 3–10
    const b = Math.floor(Math.random() * 8 + 3); // 3–10

    answer = a * b;
    question = `${a} × ${b}`;
  }

  // =========================
  // PEMBAGIAN (HARUS BULAT)
  // =========================
  else if (op === "÷") {

    const b = Math.floor(Math.random() * 9 + 2); // 2–10
    const answerInt = Math.floor(Math.random() * 10 + 1);

    const a = b * answerInt; // jamin hasil bulat

    answer = answerInt;
    question = `${a} ÷ ${b}`;
  }

  // =========================
  // PENJUMLAHAN (lebih variatif)
  // =========================
  else if (op === "+") {

    const a = Math.floor(Math.random() * 30 + 1);
    const b = Math.floor(Math.random() * 30 + 1);
    const c = Math.random() < 0.3 ? Math.floor(Math.random() * 20 + 1) : 0;

    answer = a + b + c;
    question = c ? `${a} + ${b} + ${c}` : `${a} + ${b}`;
  }

  // =========================
  // PENGURANGAN
  // =========================
  else if (op === "-") {

    let a = Math.floor(Math.random() * 30 + 10);
    let b = Math.floor(Math.random() * 30 + 1);

    if (b > a) [a, b] = [b, a];

    answer = a - b;
    question = `${a} - ${b}`;
  }

  currentAnswer = answer;

  const qEl = document.getElementById("question");
  if (qEl) qEl.innerText = question + " = ?";
  console.log("QUESTION:", question);
console.log("ANSWER:", answer);
}
// =============================================
// TIMER
function startTimer() {

  clearInterval(gameTimer);

  const config = GAME_LEVELS[currentLevel];
  timeLeft = config.time || 10;

  const timerEl = document.getElementById("gameTimer");

  if (timerEl) timerEl.innerText = timeLeft;

  gameTimer = setInterval(() => {

    if (isPaused) return; // ⛔ PAUSE MODE

    timeLeft--;

    if (timerEl) timerEl.innerText = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(gameTimer);
      timeoutAction();
    }

  }, 1000);
}
// =============================================
// TIME OUT
// =============================================
function timeoutAction() {

  // lawan diuntungkan
  position += 1;

  updateRope();
  generateQuestion();
  startTimer();
}

// =============================================
// SUBMIT ANSWER
// =============================================
function submit(team) {

  const input = document.getElementById(
    team === "A" ? "inputA" : "inputB"
  );

  const value = Number(input.value);

  console.log("SUBMIT:", team, value, currentAnswer);

  if (isNaN(value)) return;

  const config = GAME_LEVELS[currentLevel];

  const isCorrect = Math.abs(value - Number(currentAnswer)) < 0.01;

  if (isCorrect) {

    if (team === "A") {
      position -= config.scoreMultiplier;
      scoreA++;
    } else {
      position += config.scoreMultiplier;
      scoreB++;
    }
console.log("Score A:", scoreA, "Score B:", scoreB);
  } else {

    if (team === "A") position += 1;
    else position -= 1;
  }

  updateRope();

  document.getElementById("scoreA").innerText = scoreA;
  document.getElementById("scoreB").innerText = scoreB;

  nextRound();
}

// =============================================
// NEXT ROUND
// =============================================
function nextRound() {

  const inputs = ["inputA", "inputB"];

  inputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });

  clearInterval(timer);   // ⭐ penting
  generateQuestion();
  startTimer();
}

// =============================================
// UPDATE ROPE
// =============================================
function updateRope() {

  const rope = document.getElementById("rope");
  if (!rope) return;

  rope.style.left = "50%";
  rope.style.transform =
    `translate(-50%, -50%) translateX(${position * 15}px)`;
rope.style.filter = "drop-shadow(0 0 10px rgba(255,255,255,0.5))";
  checkWin();
}
// =============================================
// CHECK WIN
// =============================================
function checkWin() {

  if (scoreA >= targetScore) {
    showWin("🎉 TIM A MENANG!");
  }

  if (scoreB >= targetScore) {
    showWin("🎉 TIM B MENANG!");
  }
}
function showWin(text) {

  const modal = document.getElementById("winModal");
  const winText = document.getElementById("winText");

  if (!modal || !winText) return;

  winText.innerText = text;

  modal.classList.remove("hidden");
  modal.classList.add("flex");

  clearInterval(timer);
}
// =============================================
// RESET GAME
// =============================================
function restartGame() {

  const modal = document.getElementById("winModal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }

  position = 0;
  scoreA = 0;
  scoreB = 0;
gameRunning = false;
isPaused = false;
  clearInterval(gameTimer); // ❗ ini yang benar

  updateRope();
}
window.startGame = startGame;