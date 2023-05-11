export const api = {
    base_url: 'http://localhost/api',
    books: {
        list: {
            method: 'get',
            uri: '/books'
        },
        show: {
            method: 'get',
            uri: '/books/:id'
        },
        store: {
            method: 'post',
            uri: '/books'
        },
        update: {
            method: 'put',
            uri: '/books/:id'
        },
        destroy: {
            method: 'delete',
            uri: '/books/:id'
        },
    },
    authors: {
        list: {
            method: 'get',
            uri: '/authors'
        },
    },
}