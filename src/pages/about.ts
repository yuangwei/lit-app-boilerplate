import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('lit-about')
export class About extends LitElement {
  protected render() {
    return html`
      <main class="text-xl">
        About
        <a href="/">to home</a>
      </main>
    `
  }
}