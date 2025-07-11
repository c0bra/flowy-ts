import { customElement } from "lit/decorators.js";
import FlowyBlock, { type FlowyBlockProps } from "./flowy-block";

export type FlowyActionProps = FlowyBlockProps;

@customElement('flowy-action')
export default class FlowyAction extends FlowyBlock {

}