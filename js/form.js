import openConsole from '../utils/openConsole.js';

class FormPage {
  constructor() {
    this.halfCheckbox = document.querySelector('#half-checkbox');
  }

  bindEvents = () => {
    this.halfCheckbox.indeterminate = true;
  }

  init = () => {
    openConsole();
    this.bindEvents();
  }
}

const formPage = new FormPage();
formPage.init();
