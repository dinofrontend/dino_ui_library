import { ReactElement } from 'react'

export interface TRadioProps extends IFormCompProps {
  label?: string | ReactElement
  helperText?: string | ReactElement
  className?: string
  disabled?: boolean
  isSelected?: boolean
  iconProps?: ReactElement
  onClick?: (isChecked: boolean) => void
}

export type TRadioOptionItem = {
  value: number | string
  label: string
  helperText?: string | ReactElement
  dataId?: string
}

export interface TRadioGroupProps extends IFormCompProps {
  label?: string | ReactElement
  className?: string
  isHorizontal?: boolean
  selected: number | string
  options: TRadioOptionItem[]
  handleChange?: (selected: number | string) => void
  required?: boolean
  disabled?: boolean
  labelAddons?: ReactElement
}
