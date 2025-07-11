import { CSSResult, LitElement, type CSSResultGroup } from "lit";
import { tailwind } from '../../tailwind/tailwind';

export default class TailwindElement extends LitElement {
  static styles: CSSResultGroup | CSSResult = tailwind;
}