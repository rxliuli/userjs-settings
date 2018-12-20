<template>
  <v-container
    fluid
    fill-height
  >
    <v-layout
      align-center
      justify-center
    >
      <v-flex
        xs12
        sm6
      >
        <v-card>
          <v-img src="@/assets/logo.jpg"></v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">user.js 配置</h3>
              <div>这里是 rxliuli 写的 user.js 的配置网站，欢迎来到这儿进行配置！</div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn
              flat
              color="info"
              href="https://github.com/rxliuli"
            >GitHub</v-btn>
            <v-btn
              flat
              color="info"
              href="https://blog.rxliuli.com"
            >Blog</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({

  }),
  methods: {
  },
  mounted () {

  }
}
</script>