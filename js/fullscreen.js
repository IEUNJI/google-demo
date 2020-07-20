import openConsole from '../utils/openConsole.js';

class FullscreenPage {
  constructor() {
    this.toggle = document.querySelector('#toggle');
  }

  fullscreenHandler = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen()
    }
  }

  bindEvents = () => {
    this.toggle.addEventListener('click', this.fullscreenHandler);
  }

  init = () => {
    openConsole();
    this.bindEvents();
  }
}

const fullscreenPage = new FullscreenPage();
fullscreenPage.init();
