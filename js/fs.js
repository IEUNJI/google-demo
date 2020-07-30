import openConsole from '../utils/openConsole.js';

class FsPage {
  constructor() {
    this.textArea = document.querySelector('#text-area');
    this.openBtn = document.querySelector('#open-btn');
    this.saveBtn = document.querySelector('#save-btn');

    this.openDirBtn = document.querySelector('#open-dir-btn');
    this.logs = document.querySelector('#logs');

    this.fileHandle = null;
  }

  openHandler = async () => {
    const opts = {
      accepts: [
        {
          extensions: ['txt']
        }
      ]
    };
    this.fileHandle = await window.chooseFileSystemEntries(opts);
    const file = await this.fileHandle.getFile();

    const reader = new FileReader();
    reader.onload = () => {
      this.textArea.value = reader.result;
      this.openBtn.style.display = 'none';
      this.saveBtn.style.display = '';
    };
    reader.readAsText(file);
  }

  saveHandler = async () => {
    const writable = await this.fileHandle.createWritable();
    await writable.write(this.textArea.value);
    await writable.close();
  }

  openDirHandler = async () => {
    const dirHandle = await window.chooseFileSystemEntries({
      type: 'open-directory',
    });

    const rootName = dirHandle.name;
    const res = [];

    for await (const entry of dirHandle.getEntries()) {
      res.push({
        name: `${rootName}/${entry.name}`,
        isDirectory: entry.isDirectory
      });
    }

    this.logs.innerHTML = res.reduce((acc, cur) => {
      acc += `<p>${cur.isDirectory ? '文件夹：' : '文件：'}${cur.name}</p>`;
      return acc;
    }, '');
  }

  bindEvents = () => {
    this.openBtn.addEventListener('click', this.openHandler);
    this.saveBtn.addEventListener('click', this.saveHandler);

    this.openDirBtn.addEventListener('click', this.openDirHandler);
  }

  init = () => {
    openConsole();
    this.bindEvents();
  }
}

const fsPage = new FsPage();
fsPage.init();
