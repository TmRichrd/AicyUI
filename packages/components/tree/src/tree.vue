<template>
  <div :class="bem.b()">
    <AicyTreeNode v-for="node in flattenTree" :key="node.key" :node="node" :expanded="isExpanded(node)" @toggle="toggleExpand" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { TreeNode, TreeOption, treeProps } from './tree';
import { createNamespace } from '@aicy-ui/utils/create';
import AicyTreeNode from "./treeNode.vue"
const bem = createNamespace('tree')

defineOptions({
  name: "AicyTree"
})
const props = defineProps(treeProps)
const tree = ref<TreeNode[]>([])
function createOptions(key: string, label: string, children: string) {
  return {
    getKey(node: TreeOption) {
      return node[key] as string;
    },
    getLabel(node: TreeOption) {
      return node[label] as string;
    },
    getChildren(node: TreeOption) {
      return node[children] as TreeOption[];
    }
  }
}
const treeOptions = createOptions(props.keyField, props.labelField, props.childrenField)

function createTree(data: TreeOption[]): any {
  function traversal(data: TreeOption[], parent: TreeNode | null = null) {
    return data.map((node) => {
      const children = treeOptions.getChildren(node) || []
      const treeNode: TreeNode = {
        key: treeOptions.getKey(node),
        label: treeOptions.getLabel(node),
        children: [],
        rawNode: node,
        level: parent ? parent.level + 1 : 0,
        isLeaf: node.isLeaf ?? children.length === 0,
      }
      if (children.length > 0) {
        treeNode.children = traversal(children, treeNode)
      }
      return treeNode
    })
  }
  const result: TreeNode[] = traversal(data)
  return result
}
watch(
  () => props.data,
  (data: TreeOption[]) => {
    tree.value = createTree(data)
  },
  { immediate: true }
)

const expandedKeysSet = ref(new Set(props.defaultExpandedKeys))
const flattenTree = computed(() => {
  let expandedKeys = expandedKeysSet.value
  let flattenNodes: TreeNode[] = []
  const nodes = tree.value
  const stack: TreeNode[] = []

  for (let i = nodes.length - 1; i >= 0; --i) {
    stack.push(nodes[i])
  }
  while (stack.length) {
    const node = stack.pop()
    if (!node) continue
    flattenNodes.push(node)
    if (expandedKeys.has(node.key)) {
      const children = node.children
      if (children) {
        for (let i = node.children.length - 1; i >= 0; --i) {
          stack.push(node.children[i])
        }
      }
    }
  }

  return flattenNodes
})

function isExpanded(node: TreeNode): boolean {
  return expandedKeysSet.value.has(node.key)
}

function collpase(node: TreeNode) {
  expandedKeysSet.value.delete(node.key)
}

function expand(node: TreeNode) {
  expandedKeysSet.value.add(node.key)

}
function toggleExpand(node: TreeNode) {
  const expandKeys = expandedKeysSet.value
  if (expandKeys.has(node.key)) {
    collpase(node)
  } else {
    expand(node)
  }
}
</script>

<style scoped></style>