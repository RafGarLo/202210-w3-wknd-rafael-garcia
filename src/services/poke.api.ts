export class PokeApi {
    urlDefault: string;
    constructor() {
        this.urlDefault = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';
    }

    // read / get
    getPoke(): Promise<Array<PokeApi>> {
        return fetch(this.urlDefault).then((response) => response.json());
    }
    getNextPage(nextUrl: string): Promise<any> {
        return fetch(nextUrl).then((response) => response.json());
    }
    getPrevPage(prevUrl: string): Promise<any> {
        return fetch(prevUrl).then((response) => response.json());
    }
}
// esta seccion se encuentra en carpeta servicios porque no "pinta" nada
// te falta un promise.all