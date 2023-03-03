import { LitElement, html, css } from 'lit';
import "software-card";

const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png";

export class CardList extends LitElement {
  static get properties() {
    return {
      
    }
  }

  static get styles() {
    return css`
      
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
    <software-card></software-card>
    `;
  }
  
}

customElements.define('card-list', CardList);