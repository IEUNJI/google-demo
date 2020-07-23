import openConsole from '../utils/openConsole.js';

class PositionPage {
  constructor() {
    this.logs = document.querySelector('#logs');
  }

  positionHandler = position => {
    const { coords } = position;
    const { longitude, latitude, accuracy } = coords;
    const log = `<p>经度：${longitude} 纬度：${latitude} 精度：${accuracy}m</p>`;
    this.logs.insertAdjacentHTML('afterbegin', log);
  }

  bindEvents = () => {
    navigator.geolocation.watchPosition(this.positionHandler);
  }

  init = () => {
    openConsole();
    this.bindEvents();
  }
}

const positionPage = new PositionPage();
positionPage.init();
