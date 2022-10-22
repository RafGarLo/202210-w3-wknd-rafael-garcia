var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PokeApi } from '../services/poke.api.js';
import { Component } from './component.js';
export class PokePrint extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.api = new PokeApi();
        this.pokes = [];
        this.pokesInfo = [];
        this.startFetch();
    }
    startFetch() {
        return __awaiter(this, void 0, void 0, function* () {
            this.pokes = yield this.api.getPoke();
            //console.log(this.pokes);
            const pokemonArr = [];
            this.pokes.results.forEach((item) => {
                pokemonArr.push(item.url);
            });
            this.pokesInfo = yield Promise.all(pokemonArr.map((url) => fetch(url).then((r) => r.json())));
            //console.log(this.pokesInfo);
            this.nextPageInfo = yield this.api.getNextPage(this.pokes.next);
            const nextPokeArray = [];
            this.nextPageInfo.results.forEach((item) => {
                nextPokeArray.push(item.url);
            });
            this.nextPagePokes = yield Promise.all(nextPokeArray.map((url) => fetch(url).then((result) => result.json())));
            this.manageComponent();
        });
    }
    manageComponent() {
        var _a;
        this.template = this.createTemplate(this.pokesInfo);
        this.renderAdd(this.selector, this.template);
        (_a = document.querySelector('.btn-next')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            console.log(this.nextPagePokes);
            this.template = this.createTemplate(this.nextPagePokes);
            this.render(this.selector, this.template);
        });
    }
    createTemplate() {
        this.template = '';
        this.pokesInfo.forEach((pokemon) => {
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
}
