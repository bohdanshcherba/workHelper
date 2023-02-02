
const people = {
    head: {
        brain: {},
        eye: {}
    }
}

let a = JSON.stringify(people)
JSON.parse(a)

class Storage {
    #storage: any;
    constructor(storage) {
        this.#storage = storage
    //this.#storage.setItem('multi-tool-app-notes', JSON.stringify([]))
    }
    async getItem(key){
        try {
            const items = await this.#storage.getItem(key)
            return JSON.parse(items)
        }
        catch (e) {
            console.log(e)
        }
    }
    async setItem(key, value){
        try {
            await this.#storage.setItem(key, JSON.stringify(value))
        }
        catch (e) {
            console.log(e)
        }
    }
    removeItem(key){
        this.#storage.removeItem(key)
    }
}

export {Storage}
