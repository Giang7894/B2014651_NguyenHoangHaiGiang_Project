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
        return (await this.api.put(`/${id}`, data)).data;
    }
    async login(data) {
        return (await this.api.post('/login', data)).data;
    }

    async register(data) {
        return (await this.api.post('/register',data)).data;
    }
}

export default new ReaderService();