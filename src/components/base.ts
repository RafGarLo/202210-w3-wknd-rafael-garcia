import { Component, IComponent } from './component.js';

export class Base extends Component implements IComponent {
    template!: string;
    constructor(public selector: string) {
        super();
        this.manageComponent();
    }

    manageComponent() {
        this.template = this.createTemplate();
        this.render(this.selector, this.template);
    }

    createTemplate() {
        return `
        `;
    }
}
