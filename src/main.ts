import { LitElement } from 'lit'
import { Router } from '@lit-labs/router';
import { customElement } from 'lit/decorators.js'
import routes from './routes';


@customElement('lit-app')
export class App extends LitElement {
  createRenderRoot() {
    return this;
  }

  private router = new Router(this, routes);

  render() {
    return this.router.outlet()
  }
}
