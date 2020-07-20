import openConsole from '../utils/openConsole.js';

class TtsPage {
  constructor() {
    this.textArea = document.querySelector('#text-area');
    this.speakBtn = document.querySelector('#speak-btn');
  }

  speakHandler = () => {
    const text = this.textArea.value;
    const msg = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(msg);
  }

  bindEvents = () => {
    this.speakBtn.addEventListener('click', this.speakHandler);
  }

  init = () => {
    openConsole();
    this.bindEvents();
  }
}

const ttsPage = new TtsPage();
ttsPage.init();
