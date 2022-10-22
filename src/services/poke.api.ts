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
}
