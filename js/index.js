import openConsole from '../utils/openConsole.js';

class IndexPage {
  constructor() {
    this.goBtns = document.querySelectorAll('#go-btns > button');
  }

  goHandler(btn) {
    location.assign(`/html/${btn.name}.html${location.search}`);
  }

  bindEvents() {
    this.goBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.goHandler(btn);
      });
    });
  }

  init() {
    openConsole();
    this.bindEvents();
  }
}

const indexPage = new IndexPage();
indexPage.init();
