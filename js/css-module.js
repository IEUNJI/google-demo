import sheet from '../css/css-module.css' assert { type: 'css' };

class OrangeButton extends HTMLElement {
  constructor() {
    super();
    
    const shadowRoot = this.attachShadow({ mode: 'open' });

    shadowRoot.adoptedStyleSheets = [sheet];
    
    shadowRoot.innerHTML = `
      <button>
        <slot></slot>
      </button>
    `;
  }
}

window.customElements.define('orange-button', OrangeButton);
