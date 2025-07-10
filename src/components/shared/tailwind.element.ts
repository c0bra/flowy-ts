import { LitElement, unsafeCSS } from "lit";
import { tailwind } from '../../tailwind/tailwind';

// import "./tailwind.global.css";

// const TailwindElement = (style?: unknown) =>
//   class extends LitElement {

//     static styles = [unsafeCSS(style)];
//   }

// export default TailwindElement;

export default class TailwindElement extends LitElement {
  static styles = [tailwind];
}