import createAppClient from './api.service';

class BookRentService{
    constructor(baseUrl = '/api/bookrent') {
        this.api = createAppClient(baseUrl);
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
    async borrowBook(id,data) {
        return (await this.api.put(`/action/${id}`,data)).data;
    }

    async returnBook(id,data) {
        return (await this.api.patch(`/action/${id}`,data)).data;
    }

    async approve(id) {
        return (await this.api.put(`/detail/${id}`)).data;
    }

    async cancel(id) {
        return (await this.api.delete(`/detail/${id}`)).data;
    }
}

export default new BookRentService();