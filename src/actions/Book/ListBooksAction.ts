import Vue from 'vue';
import {Book} from '@/models/Book';
import {api} from '@/config/api';

export class ListBooksAction {
    static async handle(): Promise<Book[]> {
        const {method, uri} = api.books.list;
        const params = {
            include: [
                'authors'
            ]
        }
        const response = await Vue.prototype.$axios[method](`${api.base_url}${uri}`, {params});

        return response.data;
    }
}
