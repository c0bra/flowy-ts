import { LitElement } from "lit";
import { tailwind } from '../../tailwind/tailwind';

export default class TailwindElement extends LitElement {
  static styles = [tailwind];
}