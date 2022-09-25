<template>
    <div class="page-left">
        <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item v-for="(item,index) in componentlist" :key="index" :title="item.title" class="component-item" :name="index">
            <ul class="component-list">
                <!-- diaggable 是否可以拖拽 -->
                <li v-for="(component,size) in item.components" :key="size" :class="draggableEnable(component)?'drag-enabled':'drag-disabled'"
                :diaggable="draggableEnable(component)"  @dragstart="onDragstart(component,$event)" @dragend="onDragend($event)">
                <i :class="component.iconClass" style="font-size:20px;"></i>
                <p class="name">{{component.name}}</p>
                <p class="name">{{`${componentMap[component.data.component]|0}/${component.maxNumForAdd}`}}</p>
                </li>
            </ul>
        </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
import componentlist from '../../../config/component-list'
export default {
  data () {
    return {
      activeNames: ['1', '2'],
      componentlist
    }
  },
  computed: {
    componentMap () {
      return this.$store.getters.pageComponentTotalMap
    }
  },
  methods: {
    draggableEnable (component) {

    },
    onDragstart () {

    },
    onDragend () {

    }

  }

}
</script>
  <style>

  </style>
