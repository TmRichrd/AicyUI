<template>
  <i :class="bem.b()" :style="style">
    <slot></slot>
  </i>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { createNamespace } from '@aicy-ui/utils/create';
import { iconProps } from './icon';
const bem = createNamespace('icon')

defineOptions({
  name: "AicyIcon",
})

const props = defineProps(iconProps)

const style = computed(() => {
  if (!props.color && !props.size) return {};
  return {
    ...(props.size ? { 'width': props.size + 'px', 'height': props.size + 'px' } : {}),
    ...(props.color ? { 'color': props.color } : {})
  }
})
</script>

<style lang="scss" scoped></style>