import openConsole from '../utils/openConsole.js';

class VibratePage {
  constructor() {
    this.timeInput = document.querySelector('#time-input');
    this.timeTag = document.querySelector('#time-tag');
    this.vibrateBtn = document.querySelector('#vibrate-btn');
  }

  timeChangeHandler = () => {
    this.timeTag.innerHTML = this.timeInput.value;
  }

  vibrateHandler = () => {
    const pattern = Array.from({ length: 5 }).map((item, index) => {
      if (index % 2 === 0) return Number(this.timeInput.value);
      return 200;
    });
    navigator.vibrate(pattern);
  }

  bindEvents = async () => {
    this.timeInput.addEventListener('input', this.timeChangeHandler);
    this.vibrateBtn.addEventListener('click', this.vibrateHandler);
  }

  init = () => {
    openConsole();
    this.bindEvents();
  }
}

const vibratePage = new VibratePage();
vibratePage.init();
