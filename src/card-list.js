import { LitElement, html, css } from 'lit';
import "software-card";

const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png";

export class CardList extends LitElement {
  static get properties() {
    return {
      name: {
        type: String,
        reflect: true
      },
      fname: { type: String},
      top: { type: String},
      softwareDetails: { type: String},
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