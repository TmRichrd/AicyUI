<template>
  <button @click="emitClick" @mousedown="mouseDown"
    :class="[bem.b(), bem.m(type), bem.m(size), bem.is('round', round), bem.is('disabled', disabled), bem.is('loading', loading), bem.is('text', text),bem.is('circle', circle), bem.is('block', block), bem.is('plain', plain), bem.is('shadow', shadow), bem.is('icon', isIcon)]"
    :type="nativeType" :disabled="disabled || loading">
    <template v-if="iconPlacement === 'left'">
      <LoadingComponent v-if="loading"></LoadingComponent>
      <AicyIcon v-if="slots.icon">
        <Component :is="slots.icon"></Component>
      </AicyIcon>
    </template>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
    <template v-if="iconPlacement === 'right'">
      <LoadingComponent v-if="loading"></LoadingComponent>
      <AicyIcon v-if="slots.icon" :class="bemIcon.e('right')">
        <Component :is="slots.icon"></Component>
      </AicyIcon>
    </template>
  </button>
</template>

<script setup lang="ts">
defineOptions({
  name: 'AicyButton',
  inheritAttrs: false,
})
import LoadingComponent from "@aicy-ui/components/internal-icon/Loading"
import { createNamespace } from "@aicy-ui/utils/create"
import { buttonEmits, buttonProps } from "./button"
import { useSlots } from "vue";
const bem = createNamespace('button')
const bemIcon = createNamespace('icon')
const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)
const slots = useSlots()

const emitClick = (e: MouseEvent) => {
  emit('click', e)
}
const mouseDown = (e: MouseEvent) => {
  emit('mousedown', e)
}
</script>
