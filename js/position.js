import openConsole from '../utils/openConsole.js';

class PositionPage {
  constructor() {
    this.logs = document.querySelector('#logs');
  }

  positionHandler = position => {
    const { coords, timestamp } = position;
    const { latitude, longitude, altitude, accuracy, altitudeAccuracy, heading, speed } = coords;
    console.log(timestamp, latitude, longitude, altitude, accuracy, altitudeAccuracy, heading, speed);
  }

  bindEvents = () => {
    navigator.geolocation.getCurrentPosition(this.positionHandler);
    navigator.geolocation.watchPosition(this.positionHandler);
  }

  init = () => {
    openConsole();
    this.bindEvents();
  }
}

const positionPage = new PositionPage();
positionPage.init();
