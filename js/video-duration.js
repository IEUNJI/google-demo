import openConsole from '../utils/openConsole.js';

class VideoDurationPage {
  constructor() {
    this.file = document.querySelector('#file');
  }

  fileChangeHandler = event => {
    const videoFile = event.target.files[0];
    const videoElement = document.createElement('video');
    const videoSource = URL.createObjectURL(videoFile);
    videoElement.src = videoSource;

    videoElement.addEventListener('durationchange', () => {
      alert(`视频长度为：${videoElement.duration}s`);
      URL.revokeObjectURL(videoSource);
    });
  }

  bindEvents = () => {
    this.file.addEventListener('change', this.fileChangeHandler);
  }

  init = () => {
    openConsole();
    this.bindEvents();
  }
}

const videoDurationPage = new VideoDurationPage();
videoDurationPage.init();
