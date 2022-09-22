<template>
    <div class="app-breadcrumb">
        <el-breadcrumb separator="/">
            <transition-group tag="" name="breadcrumb">
                <el-breadcrumb-item :to="{ path: '/' }" v-for="(item,index) in levelList" :key="item.path">
                    <span class="no-redirect" v-if="item.reditect==='noredirect' || index===levelList.length==1">
                        {{item.meta.title}}
                    </span>
                    <a v-else href="javascript:void()" @click.prevent="handleClick(item)">   {{item.meta.title}}</a>
                </el-breadcrumb-item>
            </transition-group>
        </el-breadcrumb>
    </div>
</template>
<script>
import pathToRegexp from 'path-to-regexp'
export default {
  name: 'Breadcrumb',
  data () {
    return {
      levelList: []// 面包屑数据
    }
  },
  created () {
    this.getBreadCrumb()
  },
  watch: {
    $route (route) {
      if (route.path.startsWidth('/redirect')) {
        return
      }
      this.getBreadCrumb()
    }
  },
  methods: {
    // 获取面包屑数据
    getBreadCrumb () {
      let metched = this.$route.matched.filter(item => item.meta && item.meta.title)
      const first = metched[0]
      if (!this.isDashboard(first)) {
        metched = [{ path: '/home', meta: { title: '首页' } }].concat(metched)
      }
      this.levelList = metched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
      console.log(this.$route)
    },
    // 判度是否是首页
    isDashboard (route) {
      const name = route && route.meta.title
      if (!name) {
        return false
      }
      return name.trim().toLocalLowerCase() === '首页'
    },
    handleClick (item) {
      const { redirect, path } = item
      if (redirect) {
        this.$router.push(redirect)
        return
      }
      this.$router.push(this.pathComplie(path))
    },
    pathComplie (path) { // 将参数和url进行拼接
      const { params } = this.$route
      const toPath = pathToRegexp.compile(path)
      return toPath(params)
    }
  }
}
</script>
<style lang=''>
</style>
