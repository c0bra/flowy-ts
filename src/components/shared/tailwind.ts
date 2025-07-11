import { css, unsafeCSS } from 'lit';
import styles from './tailwind-styles-root.css?inline';

const sheet = new CSSStyleSheet();
sheet.replaceSync(styles);

const cssText = Array.from(sheet.cssRules)
  .map(rule => rule.cssText)
  .join('\n');

// console.log(cssText)

export const tailwind = css`${unsafeCSS(cssText)}`;

