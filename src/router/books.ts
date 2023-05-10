const bookRoutes = [
    {
        path: '/livros',
        name: 'books.index',
        component: () => import(/* webpackChunkName: "Book.IndexView" */ '../views/Book/IndexView.vue')
    }
];

export default bookRoutes;