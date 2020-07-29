import openConsole from '../utils/openConsole.js';

class BatteryPage {
  constructor() {
    this.charging = document.querySelector('#charging');
    this.level = document.querySelector('#level');
  }

  batteryHandler = battery => {
    this.charging.innerHTML = `${battery.charging ? '充电中' : '未充电'}`;
    this.level.innerHTML = `${(battery.level * 100).toFixed(2)}%`;
  }

  bindEvents = async () => {
    const battery = await navigator.getBattery();
    this.batteryHandler(battery);

    battery.addEventListener('chargingchange', event => {
      this.batteryHandler(event.target);
    });

    battery.addEventListener('levelchange', event => {
      this.batteryHandler(event.target);
    });
  }

  init = () => {
    openConsole();
    this.bindEvents();
  }
}

const batteryPage = new BatteryPage();
batteryPage.init();
