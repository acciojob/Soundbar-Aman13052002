//your JS code here. If required.
const buttons = document.querySelectorAll(".btn");
const stopBtn = document.querySelector(".stop");

let currentAudio = null;

buttons.forEach((button) => {
  button.addEventListener("click", () => {

    // Stop previous audio if playing
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    // Get button text
    const soundName = button.innerText;

    // Create and play audio
    currentAudio = new Audio(`sounds/${soundName}.mp3`);
    currentAudio.play();
  });
});

// Stop button functionality
stopBtn.addEventListener("click", () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
});