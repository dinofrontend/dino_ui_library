import { IconPropTypes } from '../Icon/types'
import { ReactNode } from 'react'

export type TStatusTypes =
  | 'primary'
  | 'disabled'
  | 'brand'
  | 'danger'
  | 'warning'
  | 'success'
  | 'information'
  | 'discovery'

export interface TStatusProps extends IFormCompProps {
  text?: string
  children?: ReactNode
  leftIconProps?: IconPropTypes
  rightIconProps?: JSX.Element
  type?: TStatusTypes
  size?: 'large' | 'medium' | 'small'
  className?: string
  withCircle?: boolean
  dataId?: string
}
