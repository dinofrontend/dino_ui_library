import React, { useState } from 'react'
import moment from 'moment'
import DatePicker, { registerLocale } from 'react-datepicker'
import hy from 'date-fns/locale/hy'
import Input from '../Input'
import { IRangeDatePickerProps } from './types'

import './index.scss'
import { TRangePickerValues } from '../../types/globals'
registerLocale('hy', hy)

const RangeDatePicker = (props: IRangeDatePickerProps): JSX.Element | null => {
  const { value, currentDates = [], setFieldValue, name, changeHandler } = props

  const dateInitialValue = value !== undefined && Array.isArray(value) ? value : currentDates

  const [rangeArray, setRangeDate] = useState(dateInitialValue)
  const onChange = (date: TRangePickerValues): void => {
    if (date && Array.isArray(date)) {
      setRangeDate(date)
      if (changeHandler) {
        changeHandler(date)
      }
      if (setFieldValue && name) {
        setFieldValue(name, date, { shouldValidate: true })
      }
    }
  }

  if (!Array.isArray(rangeArray)) {
    return null
  }
  return (
    <DatePicker
      startDate={rangeArray[0]}
      endDate={rangeArray[1]}
      selectsRange
      onChange={onChange}
      customInput={
        <div className="date-picker_input-container">
          <Input
            currentValue={`${moment(rangeArray[0]).format('MMMM d, YYYY')}  - ${moment(
              rangeArray[1]
            ).format('MMMM d, YYYY')}`}
          />
        </div>
      }
    />
  )
}

export default RangeDatePicker
