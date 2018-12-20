<template>
  <v-app>
    <!-- 导航栏 -->
    <v-navigation-drawer
      persistent
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              user.js 脚本设置
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-divider></v-divider>

      <v-list
        dense
        class="pt-0"
      >
        <v-list-tile
          v-for="item in items"
          :key="item.title"
          @click="toggle(item.path)"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <!-- 工具栏 -->
    <v-toolbar app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="titleNow"></v-toolbar-title>
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
      titleNow: ''
    }
  },
  methods: {
    init () {
      this.items = routes.map(route => ({
        title: route.name,
        icon: 'route',
        path: route.path
      }))
    },
    toggle (path) {
      this.$router.push(path)
    }
  },
  mounted () {
    this.init()
  },
  beforeUpdate () {
    this.titleNow = this.$route.name
  },
  name: 'App'
}
</script>
