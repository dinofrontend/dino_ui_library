import { InputHTMLAttributes, ReactElement, RefObject } from 'react'
export interface OtpCustomProps
  extends IFormCompProps,
    Omit<
      InputHTMLAttributes<HTMLInputElement>,
      'size' | 'onFocus' | 'value' | 'onChange' | 'autoComplete'
    > {
  className?: string
  size?: 'large' | 'small'
  currentValue?: string
  error?: string | ReactElement
  label?: string | ReactElement
  length: number
  disabled?: boolean
  required?: boolean
  ref?: RefObject<HTMLInputElement>
  style?: Record<string, string>
  type?: 'text' | 'number' | 'time' | 'password' | 'email' | 'file' | 'tel' | 'date' | 'numeric'
  handleChange?: (event: TChangeEventType, value: string) => void
  placeholder?: string
  helperText?: string
  successMessage?: string
  onFocus?: (event: TClickEventType) => void
}
