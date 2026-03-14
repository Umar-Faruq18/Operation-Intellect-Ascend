// ====== CONFIGURATION ======
const totalDays = 1000;
const startDate = new Date();
startDate.setDate(startDate.getDate() + 1); // tomorrow is day 1

// Background gradients (rotate every 100 days now)
const backgrounds = [
  "linear-gradient(135deg, #1e3c72, #2a5298)",
  "linear-gradient(135deg, #4facfe, #00f2fe)",
  "linear-gradient(135deg, #ff512f, #dd2476)",
  "linear-gradient(135deg, #11998e, #38ef7d)",
  "linear-gradient(135deg, #fc5c7d, #6a82fb)",
  "linear-gradient(135deg, #f7971e, #ffd200)",
  "linear-gradient(135deg, #00c6ff, #0072ff)",
  "linear-gradient(135deg, #f953c6, #b91d73)",
  "linear-gradient(135deg, #43cea2, #185a9d)",
  "linear-gradient(135deg, #4568dc, #b06ab3)",
];

// ====== FUNCTIONS ======

// Live clock updater (hours + minutes only)
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  document.getElementById("dateTime").textContent =
    `${now.toDateString()} | ${hours}:${minutes}`;
}

// Fetch a fresh motivational quote from Quotable API
async function fetchQuote() {
  try {
    const response = await fetch(
      "https://api.quotable.io/random?tags=motivational|inspirational",
    );
    const data = await response.json();
    document.getElementById("quote").textContent =
      `"${data.content}" — ${data.author}`;
  } catch (error) {
    // Fallback if API fails
    document.getElementById("quote").textContent =
      `"The present is theirs; the future, for which I really worked, is mine." — Nikola Tesla`;
  }
}

// Update tracker display
function updateTracker() {
  const now = new Date();
  const diffTime = now - startDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
  let streakDay = diffDays > 0 ? diffDays : 0;
  if (streakDay > totalDays) streakDay = totalDays;

  // Streak circle
  document.getElementById("streakCircle").textContent = streakDay;

  // Progress bar
  const percentage = (streakDay / totalDays) * 100;
  document.getElementById("progressBar").style.width = percentage + "%";
  document.getElementById("percentage").textContent =
    `Progress: ${percentage.toFixed(1)}%`;

  // Background change every 100 days
  const bgIndex = Math.floor(streakDay / 100) % backgrounds.length;
  document.body.style.background = backgrounds[bgIndex];

  // Fetch a fresh quote
  fetchQuote();

  // Milestone celebrations every 100 days
  if (streakDay > 0 && streakDay % 100 === 0) {
    triggerConfetti();
    document.getElementById("message").textContent =
      `🎉 Major Milestone Reached: Day ${streakDay}! Keep climbing! 🎉`;
  } else {
    document.getElementById("message").textContent = "";
  }

  // 1000th day modal
  if (streakDay === totalDays) {
    triggerConfetti();
    setTimeout(() => {
      document.getElementById("modal").style.display = "block";
    }, 2000);
  }
}

// Confetti animation
function triggerConfetti() {
  const canvas = document.getElementById("confettiCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confetti = [];
  for (let i = 0; i < 150; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 2,
      d: Math.random() * 100 + 50,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      tilt: Math.random() * 10 - 10,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach((c) => {
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2, false);
      ctx.fillStyle = c.color;
      ctx.fill();
    });
    update();
  }

  function update() {
    confetti.forEach((c) => {
      c.y += c.r;
      if (c.y > canvas.height) {
        c.y = -10;
        c.x = Math.random() * canvas.width;
      }
    });
  }

  setInterval(draw, 20);
}

// Close modal
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// ====== INIT ======
// Start live clock (updates every minute)
updateClock();
setInterval(updateClock, 60000);

// Update tracker once on load
updateTracker();
