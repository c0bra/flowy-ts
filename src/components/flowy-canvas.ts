import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import TailwindElement from './shared/tailwind.element'

@customElement('flowy-canvas')
export default class Flowy extends TailwindElement() {
  render() {
    return html`
      <div class="text-red-400"></div>
   `
  }
}