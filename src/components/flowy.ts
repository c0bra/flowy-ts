import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('flowy-component')
export default class Flowy extends LitElement {
  render() {
    return html`
      <div>
        <h1>Flowy Component</h1>
        <p>This is a simple Flowy component built with Lit.</p>
        <slot></slot>
      </div>
   `
  }
}