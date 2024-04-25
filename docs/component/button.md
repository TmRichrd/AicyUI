# Button 按钮

常用的操作按钮

## 基础用法

> 使用`type`、`round`来定义按钮的样式。

<p>
<AicyButton type="primary">Primary</AicyButton>
<AicyButton type="success">Success</AicyButton>
<AicyButton type="info">Info</AicyButton>
<AicyButton type="warning">Warning</AicyButton>
<AicyButton type="danger">Danger</AicyButton>
</p>

<p>
<AicyButton type="primary" round>Primary</AicyButton>
<AicyButton type="success" round>Success</AicyButton>
<AicyButton type="info" round>Info</AicyButton>
<AicyButton type="warning" round>Warning</AicyButton>
<AicyButton type="danger" round>Danger</AicyButton>
</p>

<p>
<AicyButton type="primary" circle>
<template #icon>
  <CreateOutline/>
</template>
</AicyButton>
<AicyButton type="success" circle>
<template #icon>
  <ShareSocialOutline/>
</template>
</AicyButton>

<AicyButton type="info" circle>
<template #icon>
  <TrashOutline/>
</template>
</AicyButton>

<AicyButton type="warning" circle>
<template #icon>
  <SearchOutline/>
</template>
</AicyButton>

<AicyButton type="danger" circle>
<template #icon>
  <CloudUploadOutline/>
</template>
</AicyButton>
</p>

```vue
<AicyButton type="primary">Primary</AicyButton>
<AicyButton type="success">Success</AicyButton>
<AicyButton type="info">Info</AicyButton>
<AicyButton type="warning">Warning</AicyButton>
<AicyButton type="danger">Danger</AicyButton>

<AicyButton type="primary" round>Primary</AicyButton>
<AicyButton type="success" round>Success</AicyButton>
<AicyButton type="info" round>Info</AicyButton>
<AicyButton type="warning" round>Warning</AicyButton>
<AicyButton type="danger" round>Danger</AicyButton>

<AicyButton type="primary" circle>
<template #icon>
  <CreateOutline/>
</template>
</AicyButton>
<AicyButton type="success" circle>
<template #icon>
  <ShareSocialOutline/>
</template>
</AicyButton>

<AicyButton type="info" circle>
<template #icon>
  <TrashOutline/>
</template>
</AicyButton>

<AicyButton type="warning" circle>
<template #icon>
  <SearchOutline/>
</template>
</AicyButton>

<AicyButton type="danger" circle>
<template #icon>
  <CloudUploadOutline/>
</template>
</AicyButton>
```

## 禁用状态

> 按钮不可用状态。

<AicyButton type="primary" disabled>Primary</AicyButton>
<AicyButton type="success" disabled>Success</AicyButton>
<AicyButton type="info" disabled>Info</AicyButton>
<AicyButton type="warning" disabled>Warning</AicyButton>
<AicyButton type="danger" disabled>Danger</AicyButton>

```vue
<AicyButton type="primary" disabled>Primary</AicyButton>
<AicyButton type="success" disabled>Success</AicyButton>
<AicyButton type="info" disabled>Info</AicyButton>
<AicyButton type="warning" disabled>Warning</AicyButton>
<AicyButton type="danger" disabled>Danger</AicyButton>
```

## 文字按钮

> 没有边框和背景色的按钮。

<AicyButton type="primary" text>Text</AicyButton>
<AicyButton text="info" disabled>Text</AicyButton>

```vue
<AicyButton type="primary" text>Text</AicyButton>
<AicyButton text="info" disabled>Text</AicyButton>
```

## 图标按钮

> 带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

<script setup lang="ts">
import { CreateOutline,ShareSocialOutline,TrashOutline,SearchOutline,CloudUploadOutline } from '@vicons/ionicons5'
</script>
<AicyButton type="primary">
<template #icon>
  <CreateOutline/>
</template>
</AicyButton>
<AicyButton type="primary">
<template #icon>
  <ShareSocialOutline/>
</template>
</AicyButton>

<AicyButton type="primary">
<template #icon>
  <TrashOutline/>
</template>
</AicyButton>

<AicyButton type="primary">
<template #icon>
  <SearchOutline/>
</template>
搜索
</AicyButton>

<AicyButton type="primary" iconPlacement="right">
<template #icon>
  <CloudUploadOutline/>
</template>
上传
</AicyButton>

```vue
<script setup lang="ts">
import {
  CreateOutline,
  ShareSocialOutline,
  TrashOutline,
  SearchOutline,
  CloudUploadOutline
} from '@vicons/ionicons5'
</script>
<AicyButton type="primary">
<template #icon>
  <CreateOutline/>
</template>
</AicyButton>
<AicyButton type="primary">
<template #icon>
  <ShareSocialOutline/>
</template>
</AicyButton>

<AicyButton type="primary">
<template #icon>
  <TrashOutline/>
</template>
</AicyButton>

<AicyButton type="primary">
<template #icon>
  <SearchOutline/>
</template>
搜索
</AicyButton>

<AicyButton type="primary" iconPlacement="right">
<template #icon>
  <CloudUploadOutline/>
</template>
上传
</AicyButton>
```

## 加载中

> 点击按钮后进行数据加载操作，在按钮上显示加载状态。

<AicyButton type="primary" disabled loading>加载中</AicyButton>

```vue
<AicyButton type="primary" disabled loading>加载中</AicyButton>
```

## 不同尺寸

> Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

<AicyButton size="large">大型按钮</AicyButton>
<AicyButton size="default">默认按钮</AicyButton>
<AicyButton size="small">小型按钮</AicyButton>

```vue
<AicyButton size="large">大型按钮</AicyButton>
<AicyButton size="default">默认按钮</AicyButton>
<AicyButton size="small">小型按钮</AicyButton>
```
## API

### Button Props

| 名称         | 类型  | 可选值                                             | 默认值 | 尺寸         |
| -------------- | ------- | ----------------------------------------------------- | ------- | -------------- |
| size           | string  | large / default / small                               | default | 大小         |
| type           | string  | primary / success / warning / danger / info / default | default | 类型         |
| round          | boolean | -                                                     | false   | 是否圆角按钮 |
| circle         | boolean | -                                                     | false   | 是否圆形按钮 |
| loading        | boolean | -                                                     | false   | 是否加载中状态 |
| disabled       | boolean | -                                                     | false   | 是否禁用状态 |
| native-type    | string  | button / submit / reset                               | button  | 原生 type 属性 |
| text           | boolean | -                                                     | false   | 是否为文字 |
| icon-placement | string  | left / right                                          | left    | 图标位置   |

## Slots
### Button Slots
| 插槽名 | 说明         |
| ------ | -------------- |
| icon   | 自定义图标内容 |