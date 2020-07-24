import openConsole from '../utils/openConsole.js';

class SharePage {
  constructor() {
    this.textArea = document.querySelector('#text-area');
    this.shareBtn = document.querySelector('#share-btn');
  }

  shareHandler = () => {
    const text = this.textArea.value;
    navigator.share({
      title: document.title,
      text,
      url: location.href
    });
  }

  bindEvents = () => {
    this.shareBtn.addEventListener('click', this.shareHandler);
  }

  init = () => {
    openConsole();
    this.bindEvents();
  }
}

const sharePage = new SharePage();
sharePage.init();
