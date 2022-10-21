export class PokeApi {
    constructor() {
        this.url = 'https://pokeapi.co/api/v2/pokemon/limit=20&offset=0';
    }
    // read / get
    getPoke() {
        return fetch(this.url).then((response) => response.json());
    }
}
/*
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
