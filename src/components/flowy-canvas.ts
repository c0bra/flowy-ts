import { html, css } from 'lit'
import { customElement } from 'lit/decorators.js'
import TailwindElement from '@shared/tailwind.element'

@customElement('flowy-canvas')
export default class Flowy extends TailwindElement {
  static styles = [
    super.styles,
    css`
      :host {
        background-color: var(--flowy-canvas-bg, oklch(0.9899 0 0));
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16'><circle cx='8' cy='8' r='1' fill='%23d4d4d4'/></svg>");
        background-repeat: repeat;
      }
    `
  ];

  render() {
    return html`
      <div class="z-0 relative w-full h-full">

      </div>
   `
  }
}