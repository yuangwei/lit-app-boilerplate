import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('lit-index')
export class Index extends LitElement {
  protected render() {
    return html`
      <main class="text-xl">
        Home
        <a href="/about">to about</a>
      </main>
    `
  }
}