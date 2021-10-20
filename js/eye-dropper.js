import openConsole from '../utils/openConsole.js';

class EyeDropperPage {
  constructor() {
    this.bg = document.querySelector('#bg');
  }

  clickHandler = () => {
    const eyeDropper = new EyeDropper();

    eyeDropper.open()
      .then(colorSelectionResult => {
        const { sRGBHex } = colorSelectionResult;
        this.bg.style.background = sRGBHex;
        this.bg.innerHTML = `${sRGBHex} | ${this.bg.style.background}`;
      })
      .catch(error => {

      });
  }

  bindEvents = async () => {
    this.bg.addEventListener('click', this.clickHandler);
  }

  init = () => {
    openConsole();
    this.bindEvents();
  }
}

const eyeDropperPage = new EyeDropperPage();
eyeDropperPage.init();
