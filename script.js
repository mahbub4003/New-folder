let speech = new SpeechSynthesisUtterance();
let text = document.querySelector("textarea");

let voices = [];
let voiceSelect = document.querySelector("select");
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];
  voices.forEach(
    (voice, index) =>
      (voiceSelect.options[index] = new Option(voice.name, index))
  );
};
document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
  console.log(text.value);
});
voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});
console.log(text);
