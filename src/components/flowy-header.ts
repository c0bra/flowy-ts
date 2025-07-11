import { html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import TailwindElement from '@components/shared/tailwind.element'

@customElement('flowy-header')
export default class FlowyHeader extends TailwindElement {
  static styles = [
    super.styles,
    css`
      .flowy-header {
        border-color: var(--flowy-border-color);
      }

      button.primary {
        background-color: var(--flowy-active-color);
      }

      button.primary:hover {
        background-color: oklch(from var(--flowy-active-color) l c h / calc(alpha - 0.3))
      }
    `
  ]

  @property({ type: String }) title = 'Flowy Header'
  @property({ type: String }) subtitle = 'This is the header of the Flowy component'

  render() {
    return html`
      <div class="flowy-header flex gap-12 items-center justify-between bg-white w-full border-b py-4 px-12">
        <div class="flex flex-col">
          <p class="text-lg font-bold">${this.title}</p>
          <p class="text-gray-500 text-sm">${this.subtitle}</p>
        </div>

        <div>
          <button class="border border-flowy-border text-gray-500 px-4 py-2 rounded hover:bg-gray-300 cursor-pointer">
            Settings
          </button>
          <button class="primary text-white px-4 py-2 rounded cursor-pointer">
            Action
          </button>
        </div>
      </div>
   `
  }
}