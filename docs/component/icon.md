# Icon 图标

`AicyUI` 推荐使用 `xicons`作为图标库

```
$ pnpm install @vicons/ionicons5
```

## 使用图标

> 如果你想像用例一样直接使用图标，你需要全局注册组件，才能够直接在项目里使用。

<script setup lang="ts">
import { AddCircleOutline } from '@vicons/ionicons5'
</script>
<div>
<AicyIcon color="red" size="40">
    <AddCircleOutline />
</AicyIcon>
<AicyIcon color="green" size="40">
    <AddCircleOutline />
</AicyIcon>
<AicyIcon color="blue" size="40">
    <AddCircleOutline />
</AicyIcon>
<AicyIcon color="gray" size="40">
    <AddCircleOutline />
</AicyIcon>
</div>
<div>
<AicyIcon color="red" size="60">
    <AddCircleOutline />
</AicyIcon>
<AicyIcon color="green" size="60">
    <AddCircleOutline />
</AicyIcon>
<AicyIcon color="blue" size="60">
    <AddCircleOutline />
</AicyIcon>
<AicyIcon color="gray" size="60">
    <AddCircleOutline />
</AicyIcon>
</div>

```vue
<script setup lang="ts">
import { AddCircleOutline } from '@vicons/ionicons5'
</script>
<template>
  <AicyIcon color="red" size="40">
    <AddCircleOutline />
  </AicyIcon>
  <AicyIcon color="gray" size="60">
    <AddCircleOutline />
  </AicyIcon>
</template>
```

## API

### Icon Props

| 名称  | 类型             | 默认值    | 描述     |
| ----- | ---------------- | --------- | -------- |
| color | string           | undefined | 图片颜色 |
| size  | number ｜ string | undefined | 图片大小 |
