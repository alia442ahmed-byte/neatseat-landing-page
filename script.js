const deadline = new Date("2026-04-18T23:59:59-06:00").getTime();

const parts = {
  days: document.querySelector("[data-days]"),
  hours: document.querySelector("[data-hours]"),
  minutes: document.querySelector("[data-minutes]"),
  seconds: document.querySelector("[data-seconds]"),
};

function formatCountdown(totalSeconds) {
  const safeSeconds = Math.max(totalSeconds, 0);
  const days = Math.floor(safeSeconds / 86400);
  const hours = Math.floor((safeSeconds % 86400) / 3600);
  const minutes = Math.floor((safeSeconds % 3600) / 60);
  const seconds = Math.floor(safeSeconds % 60);

  return {
    days: String(days),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}

function renderCountdown() {
  if (!parts.days || !parts.hours || !parts.minutes || !parts.seconds) {
    return;
  }

  const now = new Date().getTime();
  const remainingMillis = deadline - now;
  const totalSeconds = remainingMillis > 0 ? remainingMillis / 1000 : 0;

  if (totalSeconds <= 0) {
    document.body.classList.add("offer-expired");
  }

  const values = formatCountdown(totalSeconds);
  parts.days.textContent = values.days;
  parts.hours.textContent = values.hours;
  parts.minutes.textContent = values.minutes;
  parts.seconds.textContent = values.seconds;
}

renderCountdown();

window.setInterval(() => {
  renderCountdown();
}, 1000);

// Colour swatch gallery interaction
const colourNames = ["Navy Blue", "Red Wine", "Bullet Grey"];
const swatches = document.querySelectorAll(".swatch");
const galleryImgs = document.querySelectorAll(".tier-gallery-img");
const colourLabel = document.getElementById("selectedColour");

swatches.forEach((swatch) => {
  swatch.addEventListener("click", () => {
    const idx = parseInt(swatch.dataset.idx, 10);
    swatches.forEach((s) => s.classList.remove("active"));
    galleryImgs.forEach((img) => img.classList.remove("active"));
    swatch.classList.add("active");
    if (galleryImgs[idx]) galleryImgs[idx].classList.add("active");
    if (colourLabel) colourLabel.textContent = colourNames[idx];
  });
});

// Form submission — save to Google Sheets then return to landing page
const contactForm = document.getElementById("contactForm");
const submitBtn = document.getElementById("formSubmitBtn");

if (contactForm) {
  contactForm.addEventListener("submit", () => {
    if (submitBtn) {
      submitBtn.textContent = "Sending...";
      submitBtn.disabled = true;
    }
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1200);
  });
}
