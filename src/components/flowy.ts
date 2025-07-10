import { html } from 'lit'
import { customElement } from 'lit/decorators.js'

import TailwindElement from "@shared/tailwind.element";

@customElement('flowy-component')
export default class Flowy extends TailwindElement {
  render() {
    return html`
      <div class="relative w-full h-screen grid grid-rows-[auto_1fr]">
        <flowy-header></flowy-header>

        <div class="grid grid-cols-[280px_1fr_320px]">
          <flowy-left-sidebar></flowy-left-sidebar>
          <flowy-canvas></flowy-canvas>
          <flowy-right-sidebar></flowy-right-sidebar>
        </div>
      </div>
   `
  }
}