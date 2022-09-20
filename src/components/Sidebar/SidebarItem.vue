<template>
  <div v-if="item.hidden" class="menu-wrapper">
    <!-- 没有子菜单的情况 -->
    <template v-if="hasOneShowChild(item.children,item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren) && !item.alwayShow">
        <app-link v-if="item.redirect!='noRedirect' && onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
            <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown':!isNext}">
                {{onlyOneChild.meta.title}}
            </el-menu-item>
        </app-link>
    </template>
    <el-submenu v-else  ref="submenu" :index="resolvePath(item.path)">
        <template slot="title">
            <item
            v-if="item.meta"
            :icon="item.meta && item.meta.icon"
            :title="item.meta.title"
            />
        </template>
        <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :basePath="resolvePath(child.path)"
        ></sidebar-item>
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'
import { Validator } from '@bigbighu/cms-utils'
import AppLink from './Link.vue'
import Item from './Item.vue'
import SidebarItem from './SidebarItem.vue'
export default {
  name: 'SidebarItem',
  components: { AppLink, Item, SidebarItem },
  path: {
    item: {
      type: Object,
      required: true
    },
    isNext: { // 是否有子菜单
      type: Boolean,
      defaullt: false
    },
    basePath: { // 基础路径
      type: String
    }
  },
  data () {
    return {

    }
  },
  methods: {
    // 判断当前菜单是否包含子菜单

    hasOneShowChild (children = [], parent) { // 判断是否有子菜单
      // 判断子菜单是否有内容
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false // 隐藏
        } else {
          this.onlyOneChild = item
          return true
        }
      })
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: '', noShowingChildren: true }
        return true
      }
      return false
    },
    resolvePath (routerPath) {
      if (Validator.isExternal(routerPath)) {
        return routerPath
      }
      if (Validator.isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routerPath)
    }
  }

}
</script>

<style lang="less" scoped>
#app .hideSidebar .el-submenu__title.iconfont{
    margin-left:18px ;
}
</style>
