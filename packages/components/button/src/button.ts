// 存储组件的属性和相关事件

import { ExtractPropTypes, PropType } from 'vue'

// size组件的大小
export type Size = 'large' | 'default' | 'small'

// type 颜色展现类型
export type Type =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'default'

// circle 是否为圆形按钮
export type Circle = boolean
// round 是否为圆角按钮
export type Round = boolean
// loading 是否加载中状态
export type Loading = boolean
// disabled 是否禁用状态
export type Disabled = boolean
// text 文本按钮
export type Text = boolean
// native-type 原生 type 属性
export type NativeType = 'button' | 'submit' | 'reset'
// icon-placement 图标位置
export type IconPlacement = 'left' | 'right'
// 插槽 icon

export const buttonProps = {
  size: String as PropType<Size>,
  type: {
    type: String as PropType<Type>,
    default: 'default',
    validator: (value: string) => {
      return [
        'primary',
        'success',
        'warning',
        'danger',
        'info',
        'default'
      ].includes(value)
    }
  },
  round: Boolean,
  circle: Boolean,
  loading: Boolean,
  disabled: Boolean,
  text: Boolean,
  nativeType: {
    type: String as PropType<NativeType>,
    default: '',
    validator: (value: string) => {
      return ['button', 'submit', 'reset'].includes(value)
    }
  },
  iconPlacement: {
    type: String as PropType<IconPlacement>,
    default: 'left',
    validator: (value: string) => {
      return ['left', 'right'].includes(value)
    }
  }
} as const

export const buttonEmits = {
  click: (event: MouseEvent) => event instanceof MouseEvent,
  mousedown: (event: MouseEvent) => event instanceof MouseEvent,
  mouseup: (event: MouseEvent) => event instanceof MouseEvent,
  mouseenter: (event: MouseEvent) => event instanceof MouseEvent,
  mouseleave: (event: MouseEvent) => event instanceof MouseEvent
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonEmits = typeof buttonEmits
