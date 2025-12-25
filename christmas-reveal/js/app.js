const presentBtn = document.getElementById("presentBtn");
const presentImg = document.getElementById("presentImg");
const sparkles = document.getElementById("sparkles");
const confetti = document.getElementById("confetti");

// ===== TIME LOCK (Christmas Eve, 11:00 PM PST) =====
const UNLOCK_AT = new Date("2025-12-24T19:18:00-08:00");

//const UNLOCK_AT = new Date(Date.now() + 1 * 15 * 1000);



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

function formatCountdown(ms) {
    const total = Math.max(0, Math.floor(ms / 1000));
    const h = String(Math.floor(total / 3600)).padStart(2, "0");
    const m = String(Math.floor((total % 3600) / 60)).padStart(2, "0");
    const s = String(total % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
}

function updateLockUI() {
    const remaining = UNLOCK_AT - new Date();
    const hint = presentBtn.querySelector(".present__hint");
    const pulse = presentBtn.querySelector(".present__pulse");

    if (remaining > 0) {
        presentBtn.disabled = true;
        presentBtn.style.cursor = "not-allowed";
        if (pulse) pulse.style.display = "none";
        if (hint) hint.textContent = "Locked";
        lockText.textContent = `Unlocks in ${formatCountdown(remaining)}`;
    } else {
        presentBtn.disabled = false;
        presentBtn.style.cursor = "pointer";
        if (pulse) pulse.style.display = "";
        if (hint) hint.textContent = "Tap!";
        lockText.textContent = "";
    }
}

function openPresent() {
    if (new Date() < UNLOCK_AT || isOpening) return;

    isOpening = true;
    presentBtn.classList.add("is-opening");
    presentBtn.disabled = true;

    spawnSparkles(22);

    setTimeout(() => {
        presentImg.src = "./assets/img/present-open.png";
        spawnConfetti(34);
    }, 420);

    setTimeout(() => {
        window.location.href = "./reveal.html";
    }, 1450);
}

presentBtn.addEventListener("click", openPresent);
updateLockUI();
setInterval(updateLockUI, 1000);
