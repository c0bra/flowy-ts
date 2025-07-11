import { html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import TailwindElement from './shared/tailwind.element'
import { type FlowyTriggerProps } from './flowy-trigger';
import { type FlowyActionProps } from './flowy-action';

@customElement('flowy-left-sidebar')
export default class FlowyLeftSidebar extends TailwindElement {
  @property({ type: Array }) triggers: FlowyTriggerProps[] = []
  @property({ type: Array }) actions: FlowyActionProps[] = []

  @property({ state: true }) private _activeTab: string = 'Triggers'

  private tabs = [
    'Triggers',
    'Actions'
  ]

  static styles = [
    super.styles,
    css`
      :host {
        
      }

      .tab {
        
      }

      .tab.active {

      }
    `
  ]

  render() {
    return html`
      <div class="px-8 py-6 inline-flex gap-8 flex-col border-r border-gray-200 h-full w-full">
        <h2 class="text-lg font-bold">Blocks</h2>
        <div class="flex gap-4 mb-4">
          ${this.tabs.map(tab => html`
            <div
              class=${`
                p-2 text-sm cursor-pointer border-b-4
                ${this._activeTab === tab ? 'border-blue-500' : 'border-none text-gray-500 hover:text-gray-400'}
              `}
              @click=${() => this._activeTab = tab}>
              ${tab}
            </div>
          `)}
          </button>
        </div>
        <div>
            ${this._activeTab === 'Triggers'
        ? html`
                  <ul>
                    ${this.triggers.map(trigger => html`
                      <li class="mb-2 p-2 border rounded">${trigger.name}</li>
                    `)}
                  </ul>
                `
        : html`
                  <ul>
                    ${this.actions.map(action => html`
                      <li class="mb-2 p-2 border rounded">${action.name}</li>
                    `)}
                  </ul>
                `
      }
          </div>
        </div>
      </div>
   `
  }
}