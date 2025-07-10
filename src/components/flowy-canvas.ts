import { html, css } from 'lit'
import { customElement } from 'lit/decorators.js'
import TailwindElement from '@shared/tailwind.element'

@customElement('flowy-canvas')
export default class Flowy extends TailwindElement {
  static styles = [
    super.styles,
    css`
      .canvas {
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16'><circle cx='8' cy='8' r='1' fill='%23d4d4d4'/></svg>");
        background-repeat: repeat;
        background-position: 0 0;
        /* background-size: 12px 12px; */
      }
    `
  ];

  /*
  <svg width="4" height="4" viewBox="0 0 4 4" xmlns="http://www.w3.org/2000/svg">
    <circle cx="2" cy="2" r="2" fill="#CBD5E1"/>
  </svg>
  */

  render() {
    return html`
      <div class="canvas bg-zinc-50 z-0 relative w-full h-full">

      </div>
   `
  }
}