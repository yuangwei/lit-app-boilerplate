import { html } from "lit";
import './pages';
import './pages/about';

export default [
  {
    path: '/',
    render: () => html`<lit-index />`
  },
  {
    path: '/about',
    render: () => html`<lit-about />`
  },
]