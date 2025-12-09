export class AppBar extends HTMLElement {
  static get observedAttributes() {
    return ["theme"];
  }

  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const theme = this.getAttribute("theme") || "blue";
    this.innerHTML = `<div style="text-transform: uppercase;">📝 Notes App (${theme} theme)</div>`;
  }
}

customElements.define("app-bar", AppBar);
