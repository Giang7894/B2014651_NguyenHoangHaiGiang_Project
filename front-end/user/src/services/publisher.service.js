import createAppClient from './api.service';

class PublisherService{
    constructor(baseUrl = '/api/publisher') {
        this.api = createAppClient(baseUrl);
    }

    async getAll() {
        return (await this.api.get('/')).data;
    }
    async get(id) {
        return (await this.api.get(`/${id}`)).data;
    }
}

export default new PublisherService();