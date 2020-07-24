import openConsole from '../utils/openConsole.js';

class MusicPage {
  constructor() {
    this.playBtn = document.querySelector('#play-btn');
    this.musicPlayer = document.querySelector('#music-player');
  }

  playHandler = () => {
    this.musicPlayer.play().then(() => {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: '晴天',
        artist: '周杰伦',
        album: '叶惠美',
        artwork: [
          { src: '../media/叶惠美/cover.jpg', sizes: '400x400', type: 'image/png' }
        ]
      });
    });
  }

  bindEvents = () => {
    this.playBtn.addEventListener('click', this.playHandler);
  }

  init = () => {
    openConsole();
    this.bindEvents();
  }
}

const musicPage = new MusicPage();
musicPage.init();
