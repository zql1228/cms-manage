<template>
  <!-- 忽略eslint -->
  <!-- eslint-disable vue/require-component-is -->
  <component v-bind="linkProps(to)">
    <slot></slot>
  </component>
</template>

<script>
import { Validator } from '@bigbighu/cms-utils' // 判断是否是外部链接
export default {
  name: 'Link',
  props: {
    to: {
      type: String,
      required: true
    }
  },
  methods: {
    linkProps (url) {
      // 判断是否是外部链接
      if (Validator.isExternal(url)) {
        return { // 外部链接
          is: 'a',
          href: url,
          target: '_blank'
          // rel: 'noopener'
        }
      }
      return { // 内部链接
        is: 'router-link',
        to: url
      }
    }
  }
}
</script>

<style>

</style>
