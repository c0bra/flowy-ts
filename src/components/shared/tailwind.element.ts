import { LitElement, type CSSResultGroup } from "lit";
import { tailwind } from './tailwind';

export default class TailwindElement extends LitElement {
  static styles = tailwind as CSSResultGroup;
}