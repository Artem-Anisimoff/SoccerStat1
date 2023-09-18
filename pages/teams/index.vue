<template>
  <div>
    <div class="matchKartochki">
      <v-container fluid>
        <v-data-iterator
          :items="Teams"
          :items-per-page.sync="itemsPerPage"
          :page.sync="page"
          :search="search"
          hide-default-footer
        >
          <template v-slot:header>
            <v-toolbar
              dark
              color="#018e98"
              class="mb-1"
            >
              <v-text-field
                v-model="search"
                clearable
                flat
                solo-inverted
                hide-details
                prepend-inner-icon="mdi-magnify"
                label="Поиск"
              ></v-text-field>
            </v-toolbar>
          </template>

          <template v-slot:default="props">
            <v-row>
              <v-col
                v-for="item in props.items"
                :key="item.name"
                cols="12"
                sm="6"
                md="4"
                lg="3"
              >
                <a @click.prevent="openTeams(item)">
                  <v-card>
                    <v-card-title class="subheading font-weight-bold">
                      {{ item.name }}
                    </v-card-title>
                    <div class="logo-container">
                      <slot name="TeamsEmbltm">
                        <img :src="item.crest" :height="60">
                      </slot>
                      
                    </div>
                    <v-divider></v-divider>
                  </v-card>
                </a>
              </v-col>
            </v-row>
          </template>

          <template v-slot:footer>
            <v-row
              class="mt-2"
              align="center"
              justify="center"
            >

              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    dark
                    text
                    color="primary"
                    class="ml-2"
                    v-bind="attrs"
                    v-on="on"
                  >
                    {{ itemsPerPage }}
                    <v-icon>mdi-chevron-down</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(number, index) in itemsPerPageArray"
                    :key="index"
                    @click="updateItemsPerPage(number)"
                  >
                    <v-list-item-title>{{ number }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>

              <v-spacer></v-spacer>

              <span
                class="mr-4
                grey--text"
              >
                Страница {{ page }}
              </span>
              <v-btn
                fab
                dark
                color="#018e98"
                class="mr-1"
                @click="nextPage"
              >
              <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
                <v-btn
                  fab
                  dark
                  color="#018e98"
                  class="ml-1"
                  @click="formerPage"
                >
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-row>
          </template>
        </v-data-iterator>
      </v-container>
    </div>


  </div>
</template>

<script>
  export default {
    name: 'IndexPage',

    data: () => ({
      itemsPerPageArray: [9, 19, 29, 39, 49],
        search: '',
        page: 5, 
        itemsPerPage: 10,
        keys: [
        ],
        items: [
          {
          },
          ],

    }),

    async fetch({store}) {
      if(store.getters['Teams/Teams'].length === 0) {
        await store.dispatch('Teams/fetch')
      }
    },

    computed: {
      Teams() {
        return this.$store.getters['Teams/Teams']
      },
      numberOfPages () {
        return Math.ceil(this.items.length / this.itemsPerPage)
      },
      filteredKeys () {
        return this.keys.filter(key => key !== 'Name')
      },
    },
  
    methods: {
      openTeams(team) {
        this.$router.push('/Teams/' + team.id)
      },
      nextPage () {
        if (this.page + 1 <= this.numberOfPages) this.page += 1
      },
      formerPage () {
        if (this.page - 1 >= 1) this.page -= 1
      },
      updateItemsPerPage (number) {
        this.itemsPerPage = number
      },
    }
  }
</script>

<style lang="scss">


/* Карточки */
.matchKartochki {
  position: absolute;
  width: 70%;
  left: calc(50% - 70%/2);
  top: 10%;
  .v-card:hover {
  box-shadow: 0px 0px 20px #018e98; /* Эффект тени */
  transition: box-shadow 0.1s ease; /* Плавное изменение тени */
}
}
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px; /* Высота контейнера, чтобы центрировать изображение */
  /* Добавляем эффект тени при наведении на карточку */
}

/* Конец - карточки */
</style>