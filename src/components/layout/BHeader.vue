<template>
  <div>
    <v-app-bar
        app
        color="white"
        flat
    >
      <v-container class="py-0 fill-height">
        <v-menu
            v-model="showMenu"
            offset-y
        >
          <template #activator="{on, attrs}">
            <v-avatar
                class="mr-10"
                color="grey darken-1"
                size="32"
                v-bind="attrs"
                v-on="on"
            ></v-avatar>
          </template>

          <v-card>
            <v-list>
              <v-list-item>
                <v-list-item-avatar>
                  <img
                      src="@/assets/profile-picture-placeholder.png"
                      :alt="user.name"
                  >
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>{{ user.name }}</v-list-item-title>
                  <v-list-item-subtitle>Leitor</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                  <v-btn
                      fab
                      x-small
                      elevation="0"
                  >
                    <v-icon
                        color="warning"
                    >
                      mdi-pencil
                    </v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list>
              <v-list-item>
                <v-list-item-title>Sair</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>

        <v-spacer></v-spacer>

        <v-responsive>
          <v-text-field
              dense
              flat
              hide-details
              rounded
              solo-inverted
          ></v-text-field>
        </v-responsive>

        <v-spacer></v-spacer>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
export default {
  name: "BHeader",

  data: () => ({
    user: {
      name: 'Lucas Rodrigues'
    },
    showMenu: false,
  }),
}
</script>

<style scoped>

</style>