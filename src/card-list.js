import { LitElement, html, css } from 'lit';
import "jeff_taylor/software-card.js";

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
      <software-card></software-card>
      <software-card></software-card>
      <software-card></software-card>
      <software-card></software-card>
    `;
  }
  
}

customElements.define('card-list', CardList);