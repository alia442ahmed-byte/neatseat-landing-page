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
