import openConsole from '../utils/openConsole.js';

class IdleDetectorPage {
  constructor() {
    this.startBtn = document.querySelector('#start-btn');
    this.stopBtn = document.querySelector('#stop-btn');
    this.logContainer = document.querySelector('#log-container');

    this.controller = null;
  }

  startHandler = async () => {
    await IdleDetector.requestPermission();

    this.controller = new AbortController();
    const signal = this.controller.signal;

    const idleDetector = new IdleDetector();
    idleDetector.addEventListener('change', () => {
      const { userState, screenState } = idleDetector;

      this.logContainer.insertAdjacentHTML('beforeend', `
        <p>${new Date()} Idle change: ${userState}, ${screenState}.</p>
      `);
    });

    await idleDetector.start({
      threshold: 60000,
      signal
    });
  }

  stopHandler = () => {
    this.controller.abort();
  }

  bindEvents = () => {
    this.startBtn.addEventListener('click', this.startHandler);
    this.stopBtn.addEventListener('click', this.stopHandler);
  }

  init = () => {
    openConsole();
    this.bindEvents();
  }
}

const idleDetectorPage = new IdleDetectorPage();
idleDetectorPage.init();
