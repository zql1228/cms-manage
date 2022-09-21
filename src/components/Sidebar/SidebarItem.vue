<template>
  <div  class="menu-wrapper">
    <!-- 没有子菜单的情况 -->
    <template v-if="hasOneShowChild(item.children,item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren) && !item.alwayShow">
        <app-link v-if="item.redirect!='noRedirect' && onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
            <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown':!isNext}">
                <i class="el-icon-tickets" />{{onlyOneChild.meta.title}}
            </el-menu-item>
        </app-link>
    </template>
    <!-- 有子菜单的情况 -->
    <el-submenu v-else  ref="submenu" :index="resolvePath(item.path)">
        <template slot="title">
            <Item
            v-if="item.meta"
            :icon="item.meta && item.meta.icon"
            :title="item.meta.title"
            />
        </template>
        <!-- 递归 -->
        <sidebar-item
          v-for="child in item.children"
          :key="child.path"
          :is-nest="true"
          :item="child"
          :basePath="resolvePath(child.path)"
          class="next-menu"
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
  props: {
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
      onlyOneChild: '' // 菜单数据
    }
  },
  mounted () {
    // console.log(this.item)
  },
  methods: {
    // 判断当前菜单是否包含子菜单

    hasOneShowChild (children = [], parent) { // 判断是否有子菜单
      // 判断子菜单是否有数据
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false // 隐藏
        } else {
          // this.onlyOneChild = item
          return true
        }
      })
      // 根据是否包含子菜单来决定页面渲染的数据,如果没有，就渲染父级的数据
      if (showingChildren.length === 0) { // noShowingChildren 是否有子菜单
        this.onlyOneChild = { ...parent, path: '', noShowingChildren: true }
        return true
      }
      return false // 表示存在子菜单，所以div不显示
    },
    // 返回链接的标识
    resolvePath (routerPath) {
      // 判断连接是否存在
      if (Validator.isExternal(routerPath)) {
        return routerPath
      }
      // 判断父级菜单的路径
      if (Validator.isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routerPath) // 链接拼接
    }
  }

}
</script>

<style lang="less" scoped>
#app .hideSidebar .el-submenu__title.iconfont{
    margin-left:18px ;
}
</style>
