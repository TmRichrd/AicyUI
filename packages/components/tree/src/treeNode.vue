<template>
  <div :class="bem.b()">
    <div :class="bem.e('content')" :style="`padding-left:${node.level * 16}px`">
      <span :class="[bem.e('expand-icon'), { expanded: expanded && !node.isLeaf }, bem.is('leaf', node.isLeaf)]"
        @click="handleExpand">
        <AicyIcon size="16" color="pink">
          <Switcher />
        </AicyIcon>
      </span>
      <span>{{ node?.label }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import Switcher from "./icon/Switcher"
import AicyIcon from "@aicy-ui/components/icon"
import { createNamespace } from '@aicy-ui/utils/create';
import { treeNodeEmitts, treeNodeProps } from './tree';

const bem = createNamespace('tree-node')
const props = defineProps(treeNodeProps)
const emit = defineEmits(treeNodeEmitts)
function handleExpand() {
  emit('toggle', props.node)
}
</script>

<style scoped></style>