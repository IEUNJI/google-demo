import openConsole from '../utils/openConsole.js';

class OnlinePage {
  constructor() {
    this.flag = document.querySelector('#flag');
  }

  onlineHandler(status) {
    this.flag.innerHTML = status;
  }

  bindEvents() {
    window.addEventListener('online', () => {
      this.onlineHandler('online');
    });

    window.addEventListener('offline', () => {
      this.onlineHandler('offline');
    });
  }

  init() {
    openConsole();
    this.bindEvents();
    this.onlineHandler(navigator.onLine ? 'online' : 'offline');
  }
}

const onlinePage = new OnlinePage();
onlinePage.init();
