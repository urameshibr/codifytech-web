import Vue from 'vue';
import {Book} from '@/models/Book';
import {api} from '@/config/api';

export class GetBookAction {
    static async handle(book_id: string | number): Promise<Book> {
        const {method, uri} = api.books.show;
        const uri_id: string = uri.replace(':id', String(book_id));
        const params = {
            include: [
                'authors'
            ]
        }

        const response = await Vue.prototype.$axios[method](`${api.base_url}${uri_id}`, {params});

        return response.data;
    }
}
