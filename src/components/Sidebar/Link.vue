<template>
  <component :is="linkProps(to)">
    <slot></slot>
  </component>
</template>

<script>
import { Validator } from '@bigbighu/cms-utils'
export default {
  props: {
    to: {
      type: String,
      required: true
    }
  },
  methods: {
    linkProps (url) {
      if (Validator.isExternal(url)) {
        return { // 外部链接
          is: 'a',
          href: url,
          target: '_blank',
          rel: 'noopener'
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
