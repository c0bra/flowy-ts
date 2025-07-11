import { html, css } from 'lit'
import { customElement } from 'lit/decorators.js'
import TailwindElement from './shared/tailwind.element'

@customElement('flowy-right-sidebar')
export default class Flowy extends TailwindElement {
  static styles = [
    super.styles,
    css`
      :host {
        
      }
    `
  ]

  render() {
    return html`
      <div class="px-8 py-6 inline-flex gap-8 flex-col border-l border-gray-200 h-full">
        <h2 class="text-lg font-bold">Right Sidebar</h2>
      </div>
   `
  }
}