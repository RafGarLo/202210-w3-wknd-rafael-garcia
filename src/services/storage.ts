export class Store<T> {
    // store: string;
    constructor(public store: string = 'Tasks') {
        // this.store = store
    }

    getStore(): Array<T> {
        const dataString = localStorage.getItem(this.store);
        if (!dataString) return [];
        return JSON.parse(dataString);
    }

    setStore(data: Array<T>) {
        localStorage.setItem(this.store, JSON.stringify(data));
    }
}
