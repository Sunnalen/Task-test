export type TSizeBtn = 'l' | 'm'

export interface ISharedButtonProps {
  size: TSizeBtn;
}

export type TButtonSizeClass = Record<TSizeBtn, string>