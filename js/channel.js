import openConsole from '../utils/openConsole.js';

class ChannelPage {
  constructor() {
    this.textArea = document.querySelector('#text-area');
    this.sendBtn = document.querySelector('#send-btn');
    this.logs = document.querySelector('#logs');

    this.channel = null;
  }

  sendHandler = () => {
    const text = this.textArea.value;
    const message = `${text} ${Date.now()}`;
    this.channelHandler({ data: message });
    this.channel.postMessage(message);
  }

  channelHandler = event => {
    const log = `<p>${event.data} ${Date.now()}</p>`;
    this.logs.insertAdjacentHTML('afterbegin', log);
  }

  bindEvents = () => {
    this.channel = new BroadcastChannel('ieunji-channel');
    this.channel.onmessage = this.channelHandler;

    this.sendBtn.addEventListener('click', this.sendHandler);
  }

  init = () => {
    openConsole();
    this.bindEvents();
  }
}

const channelPage = new ChannelPage();
channelPage.init();
