import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

export class MyButton extends LitElement {

    static properties = {
        title: {type: String},
    };

  render() {
    return html`
        <button @click=${() => console.log('Lit button clicked!')}>${this.title}</button>
    `;
  }
}
export default customElement('my-button')(MyButton);