import { ExtractPropTypes, PropType } from "vue"

export type Key = string | number

export interface TreeNode extends Required<TreeOption> {
  [x: string]: any
  node?: any
  level: number,
  rawNode: TreeOption,
  children: TreeNode[],
  isLeaf: boolean,
}

export interface TreeOption {
  label?: Key
  key?: Key
  children?: TreeOption[],
  isLeaf: boolean,
  [key: string]: unknown
}

export const treeProps = {
  data: {
    type: Array as PropType<TreeOption[]>,
    default: () => []
  },
  labelField: {
    type: String,
    default: 'label'
  },
  keyField: {
    type: String,
    default: 'key'
  },
  childrenField: {
    type: String,
    default: 'children'
  },
  defaultCheckedKeys: {
    type: Array as PropType<Key[]>,
    default: () => []
  },
  defaultExpandedKeys: {
    type: Array as PropType<Key[]>,
    default: () => []
  },
  onLoad: Function as PropType<(node: TreeOption) => Promise<TreeOption[]>>
} as const;

export const treeNodeProps = {
  node: {
    type: Object as PropType<TreeNode>,
    required: true,
  },
  expanded: {
    type: Boolean,
    required: true,
  },
  loadingKeys: {
    type: Object as PropType<Set<Key>>,
    required: true,
  }

} as const
export const treeNodeEmitts = {
  toggle: (node: TreeNode) => node
}

export type TreeNodeProps = Partial<ExtractPropTypes<typeof treeNodeProps>>
export type TreeProps = Partial<ExtractPropTypes<typeof treeProps>>
