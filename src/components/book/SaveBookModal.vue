<template>
  <v-row justify="center">
    <v-dialog
        v-model="$props.show"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
            dark
            color="primary"
        >
          <v-btn
              icon
              dark
              @click="$emit('update:show', false)"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Incluir um novo livro</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
                dark
                text
                @click="$emit('update:show', false)"
            >
              Cancelar
            </v-btn>
            <v-btn
                dark
                text
                @click="$emit('update:show', false)"
            >
              Salvar
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-container>
          <v-row>
            <v-col cols="4" md="4" sm="12">
              <v-img
                  src="@/assets/book.png"
                  width="300"
              />
            </v-col>
            <v-col cols="8" md="8" sm="12">
              <v-form>
                <v-text-field
                    label="Título"
                    autofocus
                    v-model="$props.book.title"
                />
                <v-text-field
                    label="Quantidade de páginas"
                    v-model="$props.book.page_amount"
                />
                <v-select
                    label="Autores"
                    :items="$props.authors"
                    item-text="name"
                    item-value="id"
                    multiple
                />
                <v-textarea
                    label="Descrição"
                    counter
                    :rules="rules.description"
                    v-model="$props.book.description"
                />
              </v-form>
            </v-col>
          </v-row>
        </v-container>

      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {Book} from "@/models/Book";
import {Author} from "@/models/Author";

export default defineComponent({
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    book: {
      type: Object as () => Book,
      default: () => ({
        id: null,
        title: '',
        page_amount: '',
        cover_image: '',
        description: '',
        authors: [] as Author[]
      })
    },
    authors: {
      type: Array as () => Author[],
      default: () => ([]),
    }
  },

  data: () => ({
    notifications: false,
    sound: true,
    widgets: false,
    rules: {
      description: [
        (value: string) => value?.length <= 255 || 'Máximo de 255 caracteres'
      ]
    }
  }),
})
</script>