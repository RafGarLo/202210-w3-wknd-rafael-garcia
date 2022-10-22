import { PokeApi } from '../services/poke.api.js';
import { Component } from './component.js';

export class PokePrint extends Component {
    template!: string;
    pokes: any;
    pokesInfo: any;
    api: PokeApi;
    nextPageInfo: any;
    nextPagePokes: any;
    constructor(public selector: string) {
        super();
        this.api = new PokeApi();
        this.pokes = [];
        this.pokesInfo = [];
        this.startFetch();
    }

    async startFetch() {
        this.pokes = await this.api.getPoke();
        //console.log(this.pokes);

        const pokemonArr: any = [];
        this.pokes.results.forEach((item: any) => {
            pokemonArr.push(item.url);
        });
        this.pokesInfo = await Promise.all(
            pokemonArr.map((url: any) => fetch(url).then((r) => r.json()))
        );
        //console.log(this.pokesInfo);
        this.nextPageInfo = await this.api.getNextPage(this.pokes.next);
        const nextPokeArray: any = [];

        this.nextPageInfo.results.forEach((item: any) => {
            nextPokeArray.push(item.url);
        });
        this.nextPagePokes = await Promise.all(
            nextPokeArray.map((url: any) =>
                fetch(url).then((result) => result.json())
            )
        );

        this.manageComponent();
    }

    manageComponent() {
        this.template = this.createTemplate(this.pokesInfo);
        this.renderAdd(this.selector, this.template);

        document.querySelector('.btn-next')?.addEventListener('click', () => {
            console.log(this.nextPagePokes);
            this.template = this.createTemplate(this.nextPagePokes);
            this.render(this.selector, this.template);
        });
    }

    createTemplate() {
        this.template = '';
        this.pokesInfo.forEach((pokemon: any) => {
            this.template += `
            <div class="pokes-container"><h2 class="pokes-name">${pokemon.species.name}</h2>`;
            this.template += `<img class="pokes-img" src="${pokemon.sprites.front_default}" alt="" width="100">
       </div>`;
        });

        this.template += `</div>
         <div class="buttons-container">
        <button class="btn-previous">
         <a href=''>Atras</a>
        </button>
                          
        <button class="btn-next">
     
          Siguiente
         </button>
         </div>`;

        return this.template;
    }

    // async createArrayOfPromises() {}
}
