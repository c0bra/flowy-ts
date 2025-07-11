import { html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import TailwindElement from "@shared/tailwind.element";
import { type FlowyBlockProps } from './flowy-block';
import { type FlowyTriggerProps } from './flowy-trigger';

@customElement('flowy-component')
export default class Flowy extends TailwindElement {
  static styles = [
    super.styles,
    css`
      /* Define custom variables for all Flowy components here */
      :host {
        --flowy-border-color: var(--color-zinc-200);
        --flowy-active-color: var(--color-blue-500);
      }
    `
  ]

  @property({ type: String }) title = 'Flowy Component'
  @property({ type: Array }) blocks: FlowyBlockProps[] = []
  @property({ type: Array }) triggers: FlowyTriggerProps[] = []

  render() {
    return html`
      <div class="relative w-full h-screen grid grid-rows-[auto_1fr]">
        <flowy-header></flowy-header>

        <div class="grid grid-cols-[280px_1fr_320px]">
          <flowy-left-sidebar .triggers=${this.triggers}></flowy-left-sidebar>
          <flowy-canvas></flowy-canvas>
          <flowy-right-sidebar></flowy-right-sidebar>
        </div>
      </div>
   `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "flowy-component": Flowy;
  }
}