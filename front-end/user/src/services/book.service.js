import CreateAppClient from './api.service';


class BookService{
    constructor(baseUrl = "/api/book") {
        this.api = CreateAppClient(baseUrl);
    }

    async getAll() {
        return (await this.api.get('/')).data;
    }

    async get(id) {
        return (await this.api.get(`/${id}`)).data;
    }
    
}

export default new BookService();