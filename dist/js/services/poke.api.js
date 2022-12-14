export class PokeApi {
    constructor() {
        this.urlDefault = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';
    }
    // read / get
    getPoke() {
        return fetch(this.urlDefault).then((response) => response.json());
    }
    getNextPage(nextUrl) {
        return fetch(nextUrl).then((response) => response.json());
    }
    getPrevPage(prevUrl) {
        return fetch(prevUrl).then((response) => response.json());
    }
}
// esta seccion se encuentra en carpeta servicios porque no "pinta" nada
// te falta un promise.all
