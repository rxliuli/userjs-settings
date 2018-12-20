<template>
  <v-container>
    <v-layout
      align-center
      justify-center
    >
      <v-flex
        sm6
        xs12
      >
        <v-text-field
          label="输入网站链接，会自动提取出域名"
          clearable
          v-model="domainNow"
        >
        </v-text-field>
        <v-btn
          color="primary"
          @click="add"
        >添加</v-btn>
        <v-list>
          <v-list-tile
            v-for="(item, i) in domains"
            :key="i"
            avatar
          >
            <v-list-tile-content>
              <v-list-tile-title>{{item}}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon
                color="pink"
                @click="del(i)"
              >delete</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
    <v-snackbar
      v-model="snackbar.val"
      :timeout="1000"
      right
      bottom
    >
      {{snackbar.text}}
      <v-btn
        flat
        color="primary"
        @click.native="snackbar.val = false"
      >Close</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import { parseUrl } from '@/util'
export default {
  data: () => ({
    domainNow: '',
    domains: [],
    snackbar: {
      val: false,
      text: ''
    },
    domainUtil: {}
  }),
  watch: {
    domains: {
      async handler () {
        await this.domainUtil.set(this.domains)
      },
      deep: true
    }
  },
  methods: {
    async init () {
      // 检测脚本
      if (!window.domainUtil) {
        this.showSnackbar('你还没有安装脚本，请先去 [https://greasyfork.org/] 安装脚本')
        this.domainUtil.list = () => {
          this.showSnackbar('你还没有安装脚本，请先去 [https://greasyfork.org/] 安装脚本')
        }
        this.domainUtil.set = () => {
          this.showSnackbar('你还没有安装脚本，请先去 [https://greasyfork.org/] 安装脚本')
        }
      } else {
        this.domainUtil = await window.domainUtil.list()
      }
      // 加载脚本
      this.domains = this.domainUtil.list()
    },
    add () {
      try {
        var domain = parseUrl(this.domainNow).domain
        if (this.domains.some(temp => temp === domain)) {
          this.domainNow = ''
          this.showSnackbar(`要添加域名 [${domain}] 已存在`)
          return
        }
        this.domains.push(domain)
        this.domainNow = ''
        this.showSnackbar(`添加域名 [${domain}] 成功`)
      } catch (err) {
        this.showSnackbar(`添加域名 [${this.domainNow}] 失败`)
      }
    },
    del (i) {
      var item = this.domains[i]
      this.domains.splice(i, 1)
      this.showSnackbar(`删除域名 [${item}] 成功`)
    },
    showSnackbar (text) {
      this.snackbar = {
        val: true,
        text: text
      }
    }
  },
  mounted () {
    this.init()
  }
}
</script>