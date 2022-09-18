<template>
  <div class="has-logo">
    <el-scrollbar wrap-class="scroll-wrapper">
        <el-menu :default-active="activeMenu" :collapse="true" background-color="#304156"
        text-color="#bfcbd9" :unique-opened="true" active-text-color="#409eff" :collapse-transition="false">
        <SidebarItem v-for="route in permission_routes" :key="route.path" :item="route" :base-path="routh.path">

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
      if (meta.activeMenu) {
        return meta.activeMenu
      } else {
        return path
      }
    }

  },
  mounted () {

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
</style>
