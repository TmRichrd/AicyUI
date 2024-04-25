<template>
  <div :class="bem.b()">
    <div :class="bem.e('content')" :style="`padding-left:${node.level * 16}px`">
      <span :class="[bem.e('expand-icon'), { expanded: expanded && !node.isLeaf }, bem.is('leaf', node.isLeaf)]"
        @click="handleExpand">
        <AicyIcon size="16" color="pink">
          <Switcher v-if="!isLoading" />
          <Loading v-if="isLoading" />
        </AicyIcon>
      </span>
      <span>{{ node?.label }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import Loading from "@aicy-ui/components/internal-icon/Loading"
import Switcher from "@aicy-ui/components/internal-icon/Switcher"
import AicyIcon from "@aicy-ui/components/icon"
import { createNamespace } from '@aicy-ui/utils/create';
import { treeNodeEmitts, treeNodeProps } from './tree';
import { computed } from "vue";

const bem = createNamespace('tree-node')
const props = defineProps(treeNodeProps)
const emit = defineEmits(treeNodeEmitts)
function handleExpand() {
  emit('toggle', props.node)
}
const isLoading = computed(() => {
  return props.loadingKeys!.has(props.node.key)
})
</script>

<style scoped></style>../../internal-icon/Loading../../internal-icon/Loading../../internal-icon/Switcher../../internal-icon/Switcher