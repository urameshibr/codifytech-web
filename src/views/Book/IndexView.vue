<template>
  <div>
    <v-container>
      <v-row>
        <v-col
            v-for="book in books"
            :key="`book-${book.id}`"
            cols="6"
            md="4"
        >
          <book-card
            :book="book"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import {ListBooksAction} from "@/actions/Book/ListBooksAction";
import Books from "@/router/books";
import {defineComponent} from "vue";
import {Book} from "@/models/Book";
import BookCard from "@/components/book/BookCard.vue";

export default defineComponent({
  name: "IndexView",
  components: {BookCard},

  data: () => ({
    books: [] as Book[]
  }),

  methods: {
    async fetchAll() {
      const response = await ListBooksAction.handle();
      // @ts-ignore
      this.books = response.data;
    }
  },

  created() {
    this.fetchAll();
  }
})
</script>
