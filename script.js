// ====== CONFIGURATION ======
const totalDays = 1000;

// Set start date explicitly to today (Day 1)
const startDate = new Date(2025, 0, 10); 
// Note: months are 0-based in JS (0=Jan, 1=Feb, 2=Mar)

// Background gradients (rotate every 100 days)
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

// ====== QUOTES ======
const quotes = [
  `"Discipline is the bridge between goals and accomplishment." — Jim Rohn`,
  `"Your limitation—it’s only your imagination."`,
  `"Push yourself, because no one else is going to do it for you."`,
  `"Great things never come from comfort zones."`,
  `"Dream it. Wish it. Do it."`,
  `"Success doesn’t just find you. You have to go out and get it."`,
  `"The harder you work for something, the greater you’ll feel when you achieve it."`,
  `"Don’t stop when you’re tired. Stop when you’re done."`,
  `"Wake up with determination. Go to bed with satisfaction."`,
  `"Do something today that your future self will thank you for."`,
  `"Little things make big days."`,
  `"It’s going to be hard, but hard does not mean impossible."`,
  `"Don’t wait for opportunity. Create it."`,
  `"Sometimes later becomes never. Do it now."`,
  `"Great things take time."`,
  `"If you get tired, learn to rest, not quit."`,
  `"Believe you can and you’re halfway there." — Theodore Roosevelt`,
  `"Act as if what you do makes a difference. It does." — William James`,
  `"Success is not final, failure is not fatal: it is the courage to continue that counts." — Winston Churchill`,
  `"Keep your face always toward the sunshine—and shadows will fall behind you." — Walt Whitman`,
  `"What you get by achieving your goals is not as important as what you become by achieving your goals." — Zig Ziglar`,
  `"When you have a dream, you’ve got to grab it and never let go." — Carol Burnett`,
  `"I can and I will."`,
  `"Start where you are. Use what you have. Do what you can." — Arthur Ashe`,
  `"Don’t count the days, make the days count." — Muhammad Ali`,
  `"Everything you’ve ever wanted is on the other side of fear." — George Addair`,
  `"Opportunities don’t happen, you create them." — Chris Grosser`,
  `"Do what you can with all you have, wherever you are." — Theodore Roosevelt`,
  `"It always seems impossible until it’s done." — Nelson Mandela`,
  `"Hardships often prepare ordinary people for an extraordinary destiny." — C.S. Lewis`,
  `"Believe in yourself and all that you are."`,
  `"Go the extra mile. It’s never crowded."`,
  `"Don’t wish it were easier. Wish you were better." — Jim Rohn`,
  `"Success is walking from failure to failure with no loss of enthusiasm." — Winston Churchill`,
  `"The secret of getting ahead is getting started." — Mark Twain`,
  `"Quality is not an act, it is a habit." — Aristotle`,
  `"Do not wait to strike till the iron is hot; but make it hot by striking." — William Butler Yeats`,
  `"The future depends on what you do today." — Mahatma Gandhi`,
  `"Well done is better than well said." — Benjamin Franklin`,
  `"Don’t let yesterday take up too much of today." — Will Rogers`,
  `"If you can dream it, you can do it." — Walt Disney`,
  `"The only way to do great work is to love what you do." — Steve Jobs`,
  `"Whether you think you can or you think you can’t, you’re right." — Henry Ford`,
  `"The best way to predict the future is to create it." — Peter Drucker`,
  `"Don’t watch the clock; do what it does. Keep going." — Sam Levenson`,
  `"A journey of a thousand miles begins with a single step." — Lao Tzu`,
  `"The difference between ordinary and extraordinary is that little extra."`,
  `"Success usually comes to those who are too busy to be looking for it." — Henry David Thoreau`,
  `"If opportunity doesn’t knock, build a door." — Milton Berle`,
  `"What lies behind us and what lies before us are tiny matters compared to what lies within us." — Ralph Waldo Emerson`,
  `"You miss 100% of the shots you don’t take." — Wayne Gretzky`,
  `"The harder the conflict, the greater the triumph." — George Washington`,
  `"If you want to lift yourself up, lift up someone else." — Booker T. Washington`,
  `"Motivation gets you going, but discipline keeps you growing." — John C. Maxwell`,
  `"Do one thing every day that scares you." — Eleanor Roosevelt`,
  `"Success is the sum of small efforts repeated day in and day out." — Robert Collier`,
  `"Don’t limit your challenges. Challenge your limits."`,
  `"Turn your wounds into wisdom." — Oprah Winfrey`,
  `"Energy and persistence conquer all things." — Benjamin Franklin`,
  `"Dream big and dare to fail." — Norman Vaughan`,
  `"If you’re going through hell, keep going." — Winston Churchill`,
  `"Nothing will work unless you do." — Maya Angelou`,
  `"You are never too old to set another goal or to dream a new dream." — C.S. Lewis`,
  `"Action is the foundational key to all success." — Pablo Picasso`,
  `"The only limit to our realization of tomorrow is our doubts of today." — Franklin D. Roosevelt`,
  `"If you want something you’ve never had, you must be willing to do something you’ve never done."`,
  `"Don’t be afraid to give up the good to go for the great." — John D. Rockefeller`,
  `"Small deeds done are better than great deeds planned." — Peter Marshall`,
  `"The way to get started is to quit talking and begin doing." — Walt Disney`,
  `"Perseverance is not a long race; it is many short races one after the other." — Walter Elliot`,
  `"Happiness is not by chance, but by choice." — Jim Rohn`,
  `"If you can’t outplay them, outwork them." — Ben Hogan`,
  `"Great opportunities are usually disguised as hard work."`,
  `"Fall seven times and stand up eight." — Japanese Proverb`,
  `"Success is liking yourself, liking what you do, and liking how you do it." — Maya Angelou`,
  `"A goal without a plan is just a wish." — Antoine de Saint-Exupéry`,
  `"Don’t be pushed by your problems. Be led by your dreams."`,
  `"The man who moves a mountain begins by carrying away small stones." — Confucius`,
  `"Everything you can imagine is real." — Pablo Picasso`,
  `"Make each day your masterpiece." — John Wooden`,
  `"If you want to achieve greatness stop asking for permission."`,
  `"Doubt kills more dreams than failure ever will." — Suzy Kassem`,
  `"Your big opportunity may be right where you are now." — Napoleon Hill`,
  `"Success is getting what you want. Happiness is wanting what you get." — Dale Carnegie`,
  `"Start where you stand and work with whatever tools you may have." — Napoleon Hill`,
  `"You don’t have to be great to start, but you have to start to be great." — Zig Ziglar`,
  `"Focus on the step in front of you, not the whole staircase."`,
  `"The best revenge is massive success." — Frank Sinatra`,
  `"The successful warrior is the average man, with laser-like focus." — Bruce Lee`,
  `"Don’t let small minds convince you that your dreams are too big."`,
  `"Difficult roads often lead to beautiful destinations."`,
  `"Stay hungry. Stay foolish." — Steve Jobs`,
  `"It does not matter how slowly you go as long as you do not stop." — Confucius`,
  `"Strive not to be a success, but rather to be of value." — Albert Einstein`,
  `"If you want to fly, give up everything that weighs you down."`,
  `"Do what you love and success will follow."`,
  `"The only place where success comes before work is in the dictionary." — Vidal Sassoon`,
  `"In the middle of every difficulty lies opportunity." — Albert Einstein`,
  `"Nothing great was ever achieved without enthusiasm." — Ralph Waldo Emerson`,
  `"Work hard in silence; let your success be your noise." — Frank Ocean`,
  `"If you’re not willing to risk the usual, you’ll have to settle for the ordinary." — Jim Rohn`,
  `"Be so good they can’t ignore you." — Steve Martin`,
  `"Do the hard jobs first. The easy jobs will take care of themselves." — Dale Carnegie`,
  `"The only person you are destined to become is the person you decide to be." — Ralph Waldo Emerson`,
  `"Keep going. Everything you need will come to you at the perfect time."`,
  `"Don’t downgrade your dream just to fit your reality."`,
  `"Success is not in what you have, but who you are." — Bo Bennett`,
  `"Go confidently in the direction of your dreams." — Henry David Thoreau`,
  `"Make your life a mission, not an intermission."`,
  `"Push through the pain; the reward is worth it."`,
  `"What we achieve inwardly will change outer reality." — Plutarch`,
  `"The secret of success is constancy of purpose." — Benjamin Disraeli`,
  `"If you want to succeed, double your failure rate." — Thomas J. Watson`,
  `"Great minds discuss ideas; average minds discuss events; small minds discuss people." — Eleanor Roosevelt`,
  `"Success seems to be connected with action." — Conrad Hilton`,
  `"The dreamers are the saviors of the world." — James Allen`,
  `"Victory belongs to the most persevering." — Napoleon Bonaparte`,
  `"Believe deep down in your heart that you’re destined to do great things." — Joe Paterno`,
  `"Effort only fully releases its reward after a person refuses to quit." — Napoleon Hill`,
  `"You become what you believe." — Oprah Winfrey`,
  `"Success is a state of mind." — Joyce Brothers`,
  `"Work gives you meaning and purpose." — Stephen Hawking`,
  `"To improve is to change; to be perfect is to change often." — Winston Churchill`,
  `"If you want to conquer fear, do not sit home and think about it." — Dale Carnegie`,
  `"Don’t wait. The time will never be just right." — Napoleon Hill`,
  `"The roots of education are bitter, but the fruit is sweet." — Aristotle`,
  `"A river cuts through rock not because of its power but its persistence."`,
  `"Success is built on discipline and daily habits."`,
  `"Opportunities multiply as they are seized." — Sun Tzu`,
  `"You can’t cross the sea merely by standing and staring at the water." — Rabindranath Tagore`,
  `"What we think, we become." — Buddha`,
  `"Do not be embarrassed by your failures, learn from them." — Richard Branson`,
  `"Great acts are made up of small deeds." — Lao Tzu`,
  `"Success is a journey, not a destination." — Arthur Ashe`,
  `"Turn your dreams into plans."`,
  `"Every accomplishment starts with the decision to try."`,
  `"A little progress each day adds up to big results."`,
  `"Don’t stop until you’re proud."`,
  `"You didn’t come this far to only come this far."`,
  `"Make it happen. Shock everyone."`,
  `"Stay patient and trust your journey."`,
  `"Progress, not perfection."`,
  `"Your future is created by what you do today."`,
  `"Be stronger than your excuses."`,
  `"Your dreams don’t work unless you do."`,
  `"Greatness begins at the end of your comfort zone."`,
  `"Consistency beats intensity."`,
  `"The grind today builds the glory tomorrow."`,
  `"Every day is another chance to change your life."`,
  `"Success begins with self-belief."`,
  `"Winners focus on winning; losers focus on winners."`,
];

// Shuffle helper
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Quote rotation state
let shuffledQuotes = [...quotes];
shuffleArray(shuffledQuotes);
let quoteIndex = 0;

function getNextQuote() {
  if (quoteIndex >= shuffledQuotes.length) {
    shuffleArray(shuffledQuotes);
    quoteIndex = 0;
  }
  return shuffledQuotes[quoteIndex++];
}

// ====== FUNCTIONS ======

// Live clock updater
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  document.getElementById("dateTime").textContent =
    `${now.toDateString()} | ${hours}:${minutes}`;
}

// Update tracker display
function updateTracker() {
  const now = new Date();

  // Normalize both dates to midnight for calendar-based difference
  const todayMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const startMidnight = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());

  const diffDays = Math.floor((todayMidnight - startMidnight) / (1000 * 60 * 60 * 24)) + 1;

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

  // Show next quote
  document.getElementById("quote").textContent = getNextQuote();

  // Milestone celebrations
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
updateClock();
setInterval(updateClock, 60000);
updateTracker();
