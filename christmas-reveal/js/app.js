const presentBtn = document.getElementById("presentBtn");
const presentImg = document.getElementById("presentImg");
const sparkles = document.getElementById("sparkles");
const confetti = document.getElementById("confetti");

let isOpening = false;

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function spawnSparkles(count = 18) {
  sparkles.innerHTML = "";
  for (let i = 0; i < count; i++) {
    const s = document.createElement("div");
    s.className = "sparkle";
    s.style.left = `${rand(10, 90)}%`;
    s.style.top = `${rand(35, 80)}%`;
    s.style.animationDelay = `${rand(0, 250)}ms`;
    sparkles.appendChild(s);
  }
}

function spawnConfetti(count = 26) {
  confetti.innerHTML = "";
  for (let i = 0; i < count; i++) {
    const c = document.createElement("div");
    c.className = "confetto";
    c.style.left = `${rand(6, 94)}%`;
    c.style.top = `${rand(0, 10)}%`;
    c.style.animationDelay = `${rand(0, 220)}ms`;
    c.style.width = `${rand(7, 12)}px`;
    c.style.height = `${rand(10, 16)}px`;
    c.style.opacity = `${rand(0.7, 1)}`;
    confetti.appendChild(c);
  }
}

function openPresent() {
  if (isOpening) return;
  isOpening = true;

  presentBtn.classList.add("is-opening");
  presentBtn.disabled = true;

  // small sparkle burst
  spawnSparkles(22);

  // swap image to open present after wobble begins
  setTimeout(() => {
    presentImg.src = "./assets/img/present-open.png";
    spawnConfetti(34);
  }, 420);

  // navigate after animation completes
  setTimeout(() => {
    window.location.href = "./reveal.html";
  }, 1450);
}

presentBtn.addEventListener("click", openPresent);
