<template>
  <v-app id="inspire">
    <b-header/>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col>
            <v-sheet
                min-height="70vh"
                rounded="lg"
            >

              <router-view/>

            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import BHeader from "@/components/layout/BHeader.vue";

export default {
  name: 'App',
  components: {BHeader},
}
</script>