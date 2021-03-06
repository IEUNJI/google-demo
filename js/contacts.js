import openConsole from '../utils/openConsole.js';

class ContactsPage {
  constructor() {
    this.selectBtn = document.querySelector('#select-btn');
    this.logs = document.querySelector('#logs');
  }

  selectHandler = async () => {
    const props = await navigator.contacts.getProperties();
    const opts = { multiple: true };
    const contacts = await navigator.contacts.select(props, opts);
    this.logs.innerHTML = JSON.stringify(contacts);
  }

  bindEvents = () => {
    this.selectBtn.addEventListener('click', this.selectHandler);
  }

  init = () => {
    openConsole();
    this.bindEvents();
  }
}

const contactsPage = new ContactsPage();
contactsPage.init();
