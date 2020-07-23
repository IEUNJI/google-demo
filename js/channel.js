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
    this.channelHandler({ data: text });
    this.channel.postMessage(text);
  }

  channelHandler = event => {
    const log = `<p>${event.data}</p>`;
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
