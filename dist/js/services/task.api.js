export class TaskApi {
    constructor() {
        this.url = 'http://localhost:3000/tasks';
    }
    // read / get
    getTask() {
        return fetch(this.url).then((response) => response.json());
    }
    // create / post
    createTask(task) {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'content-type': 'application/json',
            },
        }).then((response) => response.json());
    }
    // delete
    deleteTask(id) {
        return fetch(`${this.url}/${id}`, {
            method: 'DELETE',
        });
    }
    // uptate / patch
    updateTask(id, partialTask) {
        return fetch(`${this.url}/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(partialTask),
            headers: {
                'content-type': 'application/json',
            },
        }).then((response) => response.json());
    }
}
