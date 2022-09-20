<template>
  <div class="has-logo">
    <p @click="goHome" class="system-title">
        <img  src="../../assets/logo.png" alt=""/>
        <span>cms页面配置系统</span>
    </p>
    <el-scrollbar wrap-class="scroll-wrapper">
        <el-menu :default-active="activeMenu" :collapse="true" background-color="#304156"
        text-color="#bfcbd9" :unique-opened="true" active-text-color="#409eff" :collapse-transition="false">
        <SidebarItem v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path">
        </SidebarItem>
        </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import menuData from './menuData'
import SidebarItem from '@/components/Sidebar/SidebarItem.vue'
export default {
  name: 'Sidebar',
  components: { SidebarItem },
  data: () => {
    return {
      permission_routes: menuData
    }
  },
  computed: {
    activeMenu () {
      const { path, meta } = this.$route
      // 判断当前是否定义了默认展开的菜单
      if (meta.activeMenu) {
        return meta.activeMenu
      } else {
        return path
      }
    }

  },
  mounted () {

  },
  methods: {
    goHome () {

    }
  }

}
</script>

<style lang="less" scoped>
.menu-nodata{
    padding-top:25px;
    color:#ccc;
    text-align: center;
    font-size: 14px;
}
.system-title{
  padding-top:8px;
  text-align: center;
  img,span{vertical-align: middle;}
  img{width:40px;}
  color:#fff;
  font-size: 16px;
  span{padding-left:10px;}
}
</style>
