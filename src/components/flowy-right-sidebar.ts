import { html } from 'lit'
import { customElement } from 'lit/decorators.js'
import TailwindElement from '@shared/tailwind.element'

@customElement('flowy-right-sidebar')
export default class Flowy extends TailwindElement {
  render() {
    return html`
      <div class="p-12 inline-flex gap-8 flex-col border-l border-gray-200 h-full">
        <h2 class="text-lg font-bold">Right Sidebar</h2>
      </div>
   `
  }
}