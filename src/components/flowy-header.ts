import { html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import TailwindElement from '@shared/tailwind.element'

@customElement('flowy-header')
export default class FlowyHeader extends TailwindElement {
  @property({ type: String }) title = 'Flowy Header'
  @property({ type: String }) subtitle = 'This is the header of the Flowy component'

  render() {
    return html`
      <div class="flex gap-12 items-center justify-between bg-white w-full border-b border-gray-200 py-4 px-12">
        <div class="flex flex-col">
          <p class="text-lg font-bold">${this.title}</p>
          <p class="text-gray-500 text-sm">${this.subtitle}</p>
        </div>

        <div>
          <button class="border border-gray-200 text-gray-500 px-4 py-2 rounded hover:bg-gray-300 cursor-pointer">
            Settings
          </button>
          <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer">
            Action
          </button>
        </div>
      </div>
   `
  }
}