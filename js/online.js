import openConsole from '../utils/openConsole.js';

class OnlinePage {
  constructor() {
    this.flag = document.querySelector('#flag');
  }

  onlineHandler = () => {
    this.flag.innerHTML = navigator.onLine ? 'online' : 'offline';
  }

  bindEvents = () => {
    window.addEventListener('online', this.onlineHandler);
    window.addEventListener('offline', this.onlineHandler);
  }

  init = () => {
    openConsole();
    this.onlineHandler();
    this.bindEvents();
  }
}

const onlinePage = new OnlinePage();
onlinePage.init();
