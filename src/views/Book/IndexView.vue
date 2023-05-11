<template>
  <div>
    <v-container>
      <v-row>
        <v-col
            v-for="book in books"
            :key="`book-${book.id}`"
            cols="6"
            md="6"
        >
          <book-card
              :book="book"
              @edit-book="editBook"
          />
        </v-col>
      </v-row>
    </v-container>
    <save-book-modal
        :show.sync="modal.show"
        :book="book"
        :authors="authors"
    />
  </div>
</template>

<script lang="ts">
import {ListBooksAction} from "@/actions/Book/ListBooksAction";
import Books from "@/router/books";
import {defineComponent} from "vue";
import {Book} from "@/models/Book";
import BookCard from "@/components/book/BookCard.vue";
import SaveBookModal from "@/components/book/SaveBookModal.vue";
import {GetBookAction} from "@/actions/Book/GetBookAction";
import {Author} from "@/models/Author";
import {ListAuthorsAction} from "@/actions/ListAuthorsAction";

export default defineComponent({
  name: "IndexView",
  components: {
    SaveBookModal,
    BookCard
  },

  data: () => ({
    books: [] as Book[],
    authors: [] as Author[],
    book: {
      id: null,
      title: '',
      page_amount: 0,
      cover_image: '',
      description: '',
    } as Book,
    modal: {
      show: false,
    }
  }),

  methods: {
    async fetchAll() {
      const booksResponse = await ListBooksAction.handle();
      // @ts-ignore
      this.books = booksResponse.data;

      const authorsResponse = await ListAuthorsAction.handle();
      // @ts-ignore
      this.authors = authorsResponse.data;
    },
    async editBook(book_id: string | number) {
      await this.resetBook();
      const response = await GetBookAction.handle(book_id);
      // @ts-ignore
      this.book = response.data;
      this.modal.show = !this.modal.show;
    },
    resetBook() {
      this.book = {
        id: null,
        title: '',
        page_amount: 0,
        cover_image: '',
        description: '',
      } as Book;
    }
  },

  created() {
    this.fetchAll();
  }
})
</script>
