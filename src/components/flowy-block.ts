import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

/**
 * A draggable workflow block.
 *
 * Usage:
 *   <flowy-block label="Start"></flowy-block>
 *
 * Emits custom events when dragging starts / ends:
 *   - block-dragstart
 *   - block-dragend
 */
@customElement('flowy-block')
export class FlowyBlock extends LitElement {
  /** Text shown inside the block. */
  @property({ type: String }) label = 'Block'

  /** Background color (CSS color string). */
  @property({ type: String }) color = '#4f46e5' // indigo-600

  static styles = css`
    :host {
      display: inline-block;
    }

    .block {
      user-select: none;
      padding: 0.75rem 1rem;
      border-radius: 0.5rem;
      background-color: var(--flowy-block-color, #4f46e5);
      color: #fff;
      font-weight: 600;
      cursor: grab;
      box-shadow: 0 2px 6px rgba(0 0 0 / 15%);
      transition: box-shadow 0.2s ease, transform 0.2s ease;
    }

    .block.dragging {
      opacity: 0.85;
      cursor: grabbing;
      box-shadow: 0 4px 12px rgba(0 0 0 / 25%);
      transform: scale(1.05);
    }
  `

  render() {
    return html`
      <div
        class="block"
        style="--flowy-block-color:${this.color}"
        draggable="true"
        @dragstart=${this._onDragStart}
        @dragend=${this._onDragEnd}
      >
        ${this.label}
      </div>
    `
  }

  private _onDragStart(e: DragEvent) {
    (e.currentTarget as HTMLElement).classList.add('dragging')
    e.dataTransfer?.setData(
      'application/json',
      JSON.stringify({ label: this.label, color: this.color })
    )
    if (e.dataTransfer) e.dataTransfer.effectAllowed = 'move'

    this.dispatchEvent(
      new CustomEvent('block-dragstart', {
        detail: { label: this.label, color: this.color },
        bubbles: true,
        composed: true,
      })
    )
  }

  private _onDragEnd() {
    this.shadowRoot
      ?.querySelector('.block')
      ?.classList.remove('dragging')

    this.dispatchEvent(
      new CustomEvent('block-dragend', {
        detail: { label: this.label, color: this.color },
        bubbles: true,
        composed: true,
      })
    )
  }
}
