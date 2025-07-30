document.addEventListener("DOMContentLoaded", () => {
  const noteFrequencies = [
    261.63, 293.66, 329.63, 349.23, 392.0, 440.0, 493.88,
  ];

  function getRandomBrightColor() {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 100%, 50%)`;
  }

  function getRandomFrequency() {
    const i = Math.floor(Math.random() * noteFrequencies.length);
    return noteFrequencies[i];
  }

  function playTone(frequency, duration = 0.5) {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = "sine";
    oscillator.frequency.value = frequency;
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + duration);
  }

  const pianoElement = document.getElementById("piano-letters");
  const text = pianoElement.textContent;
  pianoElement.innerHTML = "";

  [...text].forEach((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.cursor = "pointer";
    span.style.marginRight = "2px";

    const color = getRandomBrightColor();
    span.style.textDecoration = "none";

    span.addEventListener("mouseenter", () => {
      span.style.textDecoration = "underline";
      span.style.textDecorationColor = color;
    });

    span.addEventListener("mouseleave", () => {
      span.style.textDecoration = "none";
    });

    span.addEventListener("click", () => {
      playTone(getRandomFrequency());
    });

    pianoElement.appendChild(span);
  });
});
