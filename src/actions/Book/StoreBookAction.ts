import Vue from 'vue';
import {Book} from '@/models/Book';
import {api} from '@/config/api';
import {Connectable} from "@/actions/Connectable";

export class StoreBookAction extends Connectable {
    static async handle(book: Book): Promise<Book> {
        const {method, uri} = api.books.store;
        const params = book;

        const response = await StoreBookAction.request({
            method,
            uri,
            params
        });

        return response.data as Book;
    }
}
