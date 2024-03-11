<template>
  <div>
    <AicyIcon size="20" color="blue">
      <CashOutline />
    </AicyIcon>
    <AicyTree :data="data" label-field="label" key-field="key" children-field="children"
      :default-checked-keys="defaultCheckedKeys" :default-expanded-keys="defaultExpandedKeys"></AicyTree>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CashOutline } from '@vicons/ionicons5'

type Key = string | number

interface TreeOption {
  label?: Key
  key?: Key
  children?: TreeOption[]
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
const data = ref<TreeOption[]>(createData())
console.log("🚀 ~ data:", data);
const defaultCheckedKeys = ref([])
const defaultExpandedKeys = ref(['40', '4030'])
</script>

<style scoped></style>
