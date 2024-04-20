import createAppClient from './api.service';

class ReaderService{
    constructor(baseUrl = '/api/reader') {
        this.api = createAppClient(baseUrl);
    }

    async getAll() {
        return (await this.api.get('/')).data;
    }
    async get(id) {
        return (await this.api.get(`/${id}`)).data;
    }
    async update(id, data) {
        return (await this.api.put(`${id}`, data)).data;
    }
}

export default new ReaderService();