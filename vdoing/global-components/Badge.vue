<script>
export default {
  functional: true,
  props: {
    type: {
      type: String,
      default: 'tip'
    },
    raw: {
      type: Boolean,
      default: false
    },
    text: String,
    vertical: {
      type: String,
      default: 'top'
    }
  },
  render (h, { props, slots }) {
    return h('span', {
      class: props.raw
        ? ['badge', props.type]
        : ['badge', 'fixed', props.type],
      style: {
        verticalAlign: props.vertical
      }
    }, props.text || slots().default)
  }
}
</script>

<style lang="stylus" scoped>
.badge
  display inline-block
  border-radius 3px
  padding 0 6px
  color white
  background-color #42b983
  &.fixed
    font-size 14px
    height 18px
    line-height 18px
  &.tip, &.green
    background-color #42b983
  &.error
    background-color #DA5961 // #f66
  &.warning, &.warn, &.yellow
    background-color darken(#ffe564, 35%)
  & + &
    margin-left 5px
</style>
