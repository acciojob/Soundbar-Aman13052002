//your JS code here. If required.
const buttons = document.querySelectorAll(".btn");
const stopBtn = document.querySelector(".stop");
const audio = document.getElementById("audio");

buttons.forEach((button) => {
  button.addEventListener("click", () => {

    // // Stop previous audio if playing
    // if (currentAudio) {
    //   currentAudio.pause();
    //   currentAudio.currentTime = 0;
    // }

    // Get button text
    const sound = button.innerText;

    // Create and play audio
    audio.src = `.sounds/${sound}`;
	  audio.play();
  });
});

// Stop button functionality
stopBtn.addEventListener("click", () => {
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
});