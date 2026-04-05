const countdownState = {
  totalSeconds: (((10 * 24) + 14) * 60 + 32) * 60 + 15,
};

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
  const seconds = safeSeconds % 60;

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

  const values = formatCountdown(countdownState.totalSeconds);
  parts.days.textContent = values.days;
  parts.hours.textContent = values.hours;
  parts.minutes.textContent = values.minutes;
  parts.seconds.textContent = values.seconds;
}

renderCountdown();

window.setInterval(() => {
  countdownState.totalSeconds = Math.max(countdownState.totalSeconds - 1, 0);
  renderCountdown();
}, 1000);
