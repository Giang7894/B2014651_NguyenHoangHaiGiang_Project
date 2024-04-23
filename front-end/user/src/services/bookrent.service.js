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
    async get(id) {
        return (await this.api.get(`/${id}`)).data;
    }
    async find(data) {
        return (await this.api.put('/', data)).data;
    }

    async findReaderBook(id) {
        return (await this.api.get(`/detail/${id}`)).data;
    }
}

export default new BookRentService();