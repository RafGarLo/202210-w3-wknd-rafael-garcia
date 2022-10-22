export class PokeApi {
    urlDefault: string;
    constructor() {
        this.urlDefault = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';
    }

    // read / get
    getPoke(): Promise<Array<PokeApi>> {
        return fetch(this.urlDefault).then((response) => response.json());
    }
}

export class PokePages {
    urlPagination: string;
    constructor() {
        this.urlPagination =
            'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20';
    }

    getPokePage(): Promise<Array<PokePages>> {
        return fetch(this.urlPagination).then((response) => response.json());
    }
}
/*




fetch(‘https://pokeapi.co/api/v2/pokemon?limit=151')  .then(response => response.json())  .then(allpokemon => console.log(allpokemon))
    // create / post
    createTask(task: IPokemon): Promise<PokeApi> {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'content-type': 'application/json',
            },
        }).then((response) => response.json());
    }

    // delete
    deleteTask(id: number): Promise<Response> {
        return fetch(`${this.url}/${id}`, {
            method: 'DELETE',
        });
    }

    // uptate / patch
    updateTask(id: number, partialTask: Partial<IPokemon>): Promise<Task> {
        return fetch(`${this.url}/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(partialTask),
            headers: {
                'content-type': 'application/json',
            },
        }).then((response) => response.json());
    }

*/
