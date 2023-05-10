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
        }
    }
}