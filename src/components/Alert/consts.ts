import { TIconTypes } from '../Icon/types'

export const TYPE_MAPPING: { [key: string]: TIconTypes } = {
  warning: 'warning',
  success: 'success',
  error: 'danger',
  information: 'information',
  discovery: 'discovery'
}

export const ICONS_MAPPING: { [key: string]: string } = {
  warning: 'warning-hover',
  success: 'checkmark-hover',
  error: 'error-hover',
  information: 'info-hover',
  discovery: 'info-hover'
}
