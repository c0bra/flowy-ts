import { html } from 'lit'
import { customElement } from 'lit/decorators.js'

import TailwindElement from "@shared/tailwind.element";

@customElement('flowy-component')
export default class Flowy extends TailwindElement {
  render() {
    return html`
      <div>
        <h1 class="text-4xl">Flowy Component</h1>
        <p>This is a simple Flowy component built with Lit.</p>
        <slot></slot>
      </div>
   `
  }
}