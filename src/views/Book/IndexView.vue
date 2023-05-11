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
        @store-book="storeBook"
    />
    <div class="alert-wrapper">
      <span>
        <v-alert
            v-show="alert?.show"
            :color="alert?.type"
            dark
            :icon="alert?.icon"
            border="top"
            dismissible
            transition="scale-transition"
            origin="center center"
        >
          {{ alert?.text }}
        </v-alert>
      </span>
    </div>
    <span class="float-button-wrapper">
      <v-btn
          fab
          color="success"
          @click="toggleModal"
      >
        <v-icon>
          mdi-plus
        </v-icon>
        </v-btn>
    </span>
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
import {StoreBookAction} from "@/actions/Book/StoreBookAction";

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
      page_amount: 1,
      cover_image: '',
      description: '',
    } as Book,
    modal: {
      show: false,
    },
    alert: {
      show: false,
      type: 'success',
      icon: 'mdi-vuetify',
      text: '',
    },
    config: {
      alert_dimiss_seconds: 3,
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
      this.toggleModal();
    },
    resetBook() {
      this.book = {
        id: null,
        title: '',
        page_amount: 0,
        cover_image: '',
        description: '',
      } as Book;
    },
    toggleModal() {
      this.modal.show = !this.modal.show;
    },
    storeBook() {
      console.log(this.book)
      const book = StoreBookAction.handle(this.book);
      console.log(book);
      this.toggleModal();
      this.showAlert({
        show: true,
        type: 'success',
        icon: 'mdi-vuetify',
        text: 'Registro foi incluído',
      });
    },
    resetAlert() {
      this.alert = {
        ...this.alert,
        show: false,
        type: 'success',
        icon: 'mdi-vuetify',
        text: '',
      };
    },
    dismissAlert(seconds: number) {
      setTimeout(() => this.resetAlert(), (seconds * 1000))
    },
    showAlert({
                show,
                type,
                icon,
                text
              }: {
                show: boolean,
                type: string,
                icon: string,
                text: string
              },
              dismiss: number = 3
    ) {
      this.alert = {
        ...this.alert,
        show,
        type,
        icon,
        text,
      };
      this.dismissAlert(this.config.alert_dimiss_seconds);
    }
  },

  created() {
    this.fetchAll();
  }
})
</script>

<style lang="scss">
.float-button-wrapper {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

.alert-wrapper {
  position: fixed;
  min-height: 100px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  > span {
    width: calc(60%);
    max-width: 90%;
    display: flex;
    justify-content: center;
  }
}
</style>