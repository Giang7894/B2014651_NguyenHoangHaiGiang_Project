import CreateAppClient from './api.service';

class BookService{
    constructor(baseUrl = "/api/book") {
        this.api = CreateAppClient(baseUrl);
    }

    async getAll() {
        return (await this.api.get('/')).data;
    }

    async create(data) {
        return (await this.api.post('/', data)).data;
    }

    async deleteAll() {
        return (await this.api.delete('/')).data;
    }

    async get(id) {
        return (await this.api.get(`/${id}`)).data;
    }
    
    async update(id, data) {
        return (await this.api.put(`${id}`, data)).data;
    }

    async delete(id) {
        return (await this.api.delete(`${id}`)).data;
    }

    async borrowBook(id) {
        return (await this.api.patch(`${id}`)).data;
    }

    async returnBook(id) {
        return (await this.api.post(`${id}`)).data;
    }
}

export default new BookService();