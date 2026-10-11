const pads = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display");

function playDrum(pad) {
  const audio = pad.querySelector(".clip");

  audio.currentTime = 0;
  audio.play();

  display.textContent = pad.id
    .replace(/-/g, " ")
    .toUpperCase();

  pad.classList.add("active");

  setTimeout(() => {
    pad.classList.remove("active");
  }, 120);
}

pads.forEach((pad) => {
  pad.addEventListener("click", () => {
    playDrum(pad);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.repeat) return;

  const key = event.key.toUpperCase();

  const audio = document.getElementById(key);

  if (!audio || !audio.classList.contains("clip")) return;

  const pad = audio.closest(".drum-pad");

  playDrum(pad);
});