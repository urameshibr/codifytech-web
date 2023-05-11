<template>
  <div>
    <v-card
        class="mx-auto book-card"
    >
      <span class="book-card__actions">
        <v-btn
            fab
            color="warning"
            dark
            small
            @click="editBook(book.id)"
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </span>

      <v-img
          src="@/assets/book.png"
          eager
      />

      <v-card-title>
        <h6>{{ $props.book.title }}</h6>
      </v-card-title>

      <v-card-subtitle>
        <p>
          Autores:
          <span
              v-for="author in $props.book.authors"
              class="d-flex align-center"
          >

            {{ author.name }}
            </span>
        </p>

      </v-card-subtitle>

      <v-card-actions>
        <v-btn
            color="orange lighten-2"
            text
            @click="show = !show"
        >
          <v-icon>
            mdi-account-box-outline
          </v-icon>
          Detalhes
        </v-btn>

        <v-spacer></v-spacer>

        <v-icon>
          {{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
        </v-icon>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            {{ $props.book.description }}
          </v-card-text>

          <v-card-subtitle>
            <span class="d-flex align-center">
              <v-icon
                  class="mr-2"
              >
                mdi-book-open
              </v-icon>
              400 páginas
            </span>
          </v-card-subtitle>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {Book} from "@/models/Book";

export default defineComponent({
  name: "BookCard",

  props: {
    book: {
      type: Object as () => Book,
      required: true,
    }
  },

  data: () => ({
    show: false,
  }),

  methods: {
    editBook(book_id: string|number) {
      this.$emit('edit-book', book_id);
    }
  },
})
</script>

<style lang="scss">
.book-card {
  position: relative;

  &__actions {
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 1;
  }
}
</style>