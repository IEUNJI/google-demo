import openConsole from '../utils/openConsole.js';

class CameraPage {
  constructor() {
    this.errorMsg = document.querySelector('#error-msg');
    this.videoPicker = document.querySelector('#video-picker');
    this.videoView = document.querySelector('#video-view');

    this.mediaStream = null;
    this.imageCapture = null;
  }

  enumerateDevices = async () => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const videoDevices = devices.filter(device => device.kind === 'videoinput');

    if (videoDevices.length > 0) {
      const videoPickerContent = videoDevices.reduce((acc, device) => {
        acc += `<option value="${device.deviceId}">${device.label}</option>`;
        return acc;
      }, '');
      this.videoPicker.innerHTML = videoPickerContent;
      this.videoPicker.style.display = '';
      return Promise.resolve();
    } else {
      return Promise.reject(new Error('No Video Devices'));
    }
  }

  generateConstraints = () => {
    const deviceId = this.videoPicker.value;

    return {
      video: {
        deviceId: {
          exact: deviceId
        }
      }
    };
  }

  getUserMedia = async () => {
    this.mediaStream?.getTracks().forEach(track => track.stop());

    const constraints = this.generateConstraints();
    const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);

    this.mediaStream = mediaStream;
    this.videoView.srcObject = mediaStream;
    this.videoView.style.display = '';

    const mediaStreamTrack = mediaStream.getVideoTracks()[0];
    this.imageCapture = new ImageCapture(mediaStreamTrack);
  }

  takePhoto = async () => {
    const blob = await this.imageCapture?.takePhoto();
    const link = document.createElement('a');
    link.download = `${Date.now()}.jpg`;
    const objectURL = URL.createObjectURL(blob);
    link.href = objectURL;
    link.click();
    URL.revokeObjectURL(objectURL);
  }

  bindEvents = () => {
    this.videoPicker.addEventListener('change', () => {
      this.getUserMedia();
    });
    this.videoView.addEventListener('click', () => {
      this.takePhoto();
    });
  }

  init = async () => {
    openConsole();
    this.bindEvents();

    try {
      await this.enumerateDevices();
      await this.getUserMedia();
    } catch (error) {
      this.errorMsg.innerHTML = error;
      this.errorMsg.style.display = '';
    }
  }
}

const cameraPage = new CameraPage();
cameraPage.init();
