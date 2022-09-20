
<script>
export default {
  name: 'MenuItem',
  functional: true, // 表明当前组件是个函数组件
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  // 渲染函数
  render (h, context) {
    const { icon, title } = context.props
    const vnodes = []
    const classStr = 'iconfont icon-' + icon
    if (icon) {
      vnodes.push(<i class={classStr} ></i>)
    }
    if (title) {
      vnodes.push(<span slot="title">{title}</span>)
    }
    return vnodes
  }
}
</script>

<style lang="less" scoped>
.iconfont{
    font-size:18px;
    color:#bfcbd9;
}
</style>
