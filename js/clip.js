import openConsole from '../utils/openConsole.js';

class ClipPage {
  constructor() {
    this.textArea = document.querySelector('#text-area');
    this.copyBtn = document.querySelector('#copy-btn');
    this.pasteBtn = document.querySelector('#paste-btn');
    this.logs = document.querySelector('#logs');
  }

  copyHandler = async () => {
    const text = this.textArea.value;
    await navigator.clipboard.writeText(text);
  }

  pasteHandler = async () => {
    const text = await navigator.clipboard.readText();
    this.logs.insertAdjacentHTML('afterbegin', `<p>${text}</p>`);
  }

  bindEvents = () => {
    this.copyBtn.addEventListener('click', this.copyHandler);
    this.pasteBtn.addEventListener('click', this.pasteHandler);
  }

  init = () => {
    openConsole();
    this.bindEvents();
  }
}

const clipPage = new ClipPage();
clipPage.init();
