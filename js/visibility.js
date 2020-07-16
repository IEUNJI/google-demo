import openConsole from '../utils/openConsole.js';

class VisibilityPage {
  constructor() {
    this.logs = document.querySelector('#logs');
  }

  visibilityHandler = () => {
    const log = `<p>${(new Date()).toJSON()} ${document.visibilityState}</p>`;
    this.logs.insertAdjacentHTML('afterbegin', log);
  }

  bindEvents = () => {
    window.addEventListener('visibilitychange', this.visibilityHandler);
  }

  init = () => {
    openConsole();
    this.bindEvents();
  }
}

const visibilityPage = new VisibilityPage();
visibilityPage.init();
