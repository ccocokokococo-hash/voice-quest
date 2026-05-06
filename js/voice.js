let recorder;
let audioChunks = [];

async function startRecording() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    recorder = new MediaRecorder(stream);
    audioChunks = [];

    recorder.ondataavailable = e => {
      audioChunks.push(e.data);
    };

    recorder.onstop = () => {
      const blob = new Blob(audioChunks, { type: "audio/webm" });
      const audioURL = URL.createObjectURL(blob);

      document.getElementById("audioPlayer").src = audioURL;
      document.getElementById("voiceResult").innerText =
        "Voice unlocked! +25 XP. You participated, and that is the goal.";

      addXP(25);
    };

    recorder.start();
    document.getElementById("voiceResult").innerText = "Recording...";
  } catch (error) {
    alert("Microphone permission is needed.");
  }
}

function stopRecording() {
  if (recorder && recorder.state !== "inactive") {
    recorder.stop();
  }
}
