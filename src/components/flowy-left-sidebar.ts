import { html } from 'lit'
import { customElement } from 'lit/decorators.js'
import TailwindElement from '@shared/tailwind.element'

@customElement('flowy-left-sidebar')
export default class Flowy extends TailwindElement {
  render() {
    return html`
      <div class="p-12 inline-flex gap-8 flex-col border-r border-gray-200 h-full w-full">
        <h2 class="text-lg font-bold">Blocks</h2>
      </div>
   `
  }
}