<template>
  <v-app>
    <v-navigation-drawer
      persistent
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>
    <v-content>
      <router-view />
    </v-content>
    <v-footer
      fixed
      app
    >
      <span>&copy; rxliuli 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
import routes from '@/router/routes'

export default {
  data () {
    return {
      drawer: true,
      items: [],
      title: 'Vuetify.js'
    }
  },
  methods: {
    init () {
      console.log(routes)
      window.routes = routes
    }
  },
  mounted () {
    this.init()
  },
  name: 'App'
}
</script>
