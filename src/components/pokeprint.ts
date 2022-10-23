import { PokeApi } from '../services/poke.api.js';
import { Component } from './component.js';

export class PokePrint extends Component {
    template!: string;
    pokes: any;
    pokesInfo: any;
    api: PokeApi;
    nextPageInfo: any;
    nextPagePokes: any;
    prevPagePokes: any;
    prevPokesInfo: any;
    constructor(public selector: string) {
        super();
        this.api = new PokeApi();
        this.pokes = [];
        this.pokesInfo = [];
        this.prevPokesInfo = [];
        this.startFetch();
    }

    async startFetch() {
        this.pokes = await this.api.getPoke();

        const pokemonArr: any = [];
        this.pokes.results.forEach((item: any) => {
            pokemonArr.push(item.url);
        });
        this.pokesInfo = await Promise.all(
            pokemonArr.map((url: any) => fetch(url).then((r) => r.json()))
        );

        this.nextFetch();
        this.manageComponent();
    }
    async prevFetch() {
        this.prevPokesInfo = await this.api.getPrevPage(this.pokes.previous);

        const prevPokeArray: any = [];
        this.prevPokesInfo.results.forEach((item: any) => {
            prevPokeArray.push(item.url);
        });

        this.prevPagePokes = await Promise.all(
            prevPokeArray.map((url: any) => fetch(url).then((r) => r.json()))
        );
    }
    async nextFetch() {
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
    }

    manageComponent() {
        this.template = this.createTemplate();
        this.render(this.selector, this.template);

        document.querySelector('.btn-next')?.addEventListener('click', () => {
            this.pokes = this.nextPageInfo;
            this.pokesInfo = this.nextPagePokes;
            this.nextFetch();
            this.prevFetch();
            this.manageComponent();
        });

        document
            .querySelector('.btn-previous')
            ?.addEventListener('click', () => {
                this.pokes = this.prevPokesInfo;
                this.pokesInfo = this.prevPagePokes;
                this.nextFetch();
                this.prevFetch();
                this.manageComponent();
            });
    }

    createTemplate() {
        this.template = '';
        this.pokesInfo.forEach((pokemon: any) => {
            this.template += `
            <div class="pokes-container"><h2 class="pokes-name">${pokemon.species.name}</h2>`;
            this.template += `<img class="pokes-img" src="${pokemon.sprites.other.dream_world.front_default}" alt="" width="100">
       </div>`;
        });

        this.template += `</div>
         <div class="buttons-container">

        <button class="btn-previous">Atras</button>
                          
        <button class="btn-next">Siguiente</button>
         </div>`;

        return this.template;
    }
}
