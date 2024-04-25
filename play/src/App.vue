<template>
  <div>
    <!-- <AicyIcon size="20" color="blue">
      <CashOutline />
    </AicyIcon>
    <AicyTree :data="data" :on-load="handleOnLoad"></AicyTree> -->

    <AicyButton @click="handleClick" @mousedown="mouseDown" size="medium" type="warning" text>
      删除
      <template #icon>
        <CloudUpload />
      </template>
    </AicyButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CloudUpload } from '@vicons/ionicons5'
import { TreeOption } from '@aicy-ui/components/tree';

const handleClick = (e:MouseEvent) => {
  console.log("🚀 ~ handleClick:", e);
}
const mouseDown = (e:MouseEvent) => {
  console.log("🚀 ~ mouseDown:", e);
}

function createData(level = 4, parentKey = ''): TreeOption[] {
  if (!level) return []
  const arr = new Array(6 - level).fill(0)
  return arr.map((_, idx: number) => {
    const key = parentKey + level + idx
    return {
      label: createLabel(level),
      key,
      children: createData(level - 1, key)
    }
  })
}
function createLabel(level: number) {
  if (level === 4) return '道生一'
  if (level === 3) return '一生二'
  if (level === 2) return '二生三'
  if (level === 1) return '三生万物'
  return ''
}
function nextLabel(currentLabel?: string | undefined | number): string {
  return '1'
}

const data = ref<TreeOption[]>(createData())
console.log("🚀 ~ data:", data);
const defaultCheckedKeys = ref([])
const defaultExpandedKeys = ref(['40', '4030'])
const handleOnLoad = (node: TreeOption) => {
  return new Promise<TreeOption[]>((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          label: nextLabel(node.label),
          key: node.key + nextLabel(node.label),
          isLeaf: false
        }
      ])
    }, 1000);
  })
}
</script>

<style scoped></style>
