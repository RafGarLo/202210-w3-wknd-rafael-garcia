import { Component } from './component.js';
export class Header extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
    }
    createTemplate() {
        return `
  <header>
    <img src="../assets/pokemon-logo.svg" alt="titulo de la pagina" width="400" type="svg">
</header>
        `;
    }
}
