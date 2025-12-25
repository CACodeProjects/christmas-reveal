// ===== TIME LOCK (Christmas Eve, 11:00 PM PST) =====
const UNLOCK_AT = new Date("2025-12-24T23:00:00-08:00");


if (new Date() < UNLOCK_AT) {
    window.location.replace("./index.html");
}


// Put your two screenshots in /assets/img and update names here.
const SCREENSHOTS = [
  "./assets/img/ticket.png",
  "./assets/img/seat_view.png",
];

const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");

function renderGallery() {
  gallery.innerHTML = "";

  const badge = document.createElement("div");
  badge.className = "badge";
  badge.textContent = `📱 ${SCREENSHOTS.length} screenshot${SCREENSHOTS.length === 1 ? "" : "s"}`;
  gallery.appendChild(badge);

  SCREENSHOTS.forEach((src, idx) => {
    const wrap = document.createElement("button");
    wrap.type = "button";
    wrap.className = "shot";
    wrap.style.cursor = "zoom-in";
    wrap.setAttribute("aria-label", `Open screenshot ${idx + 1}`);
    wrap.style.padding = "0";
    wrap.style.border = "0";
    wrap.style.background = "transparent";


    const img = document.createElement("img");
    img.loading = "lazy";
    img.decoding = "async";
    img.src = src;
    img.alt = `Screenshot ${idx + 1}`;

    // If an image path is wrong, show a helpful placeholder message
    img.onerror = () => {
      wrap.style.cursor = "default";
      wrap.onclick = null;
      wrap.innerHTML = `
        <div style="padding:14px;color:rgba(245,247,255,0.85);font-size:14px;">
          Couldn’t load <b>${src}</b><br/>
          Check the filename in <code>js/reveal.js</code> and that the file exists in <code>assets/img</code>.
        </div>
      `;
    };

    wrap.appendChild(img);
    wrap.addEventListener("click", () => openLightbox(src));

    gallery.appendChild(wrap);
  });
}

function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
}

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

renderGallery();
