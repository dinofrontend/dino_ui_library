import React, {
  forwardRef,
  ReactElement,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState
} from 'react'
import classNames from 'classnames'
import { Input } from '../../Input'
import {
  useOnOutsideClick,
  useGetElemSizes,
  useGetElemPositions,
  useGetHasBottomSpace,
  useGetHasTopSpace
} from '../../../hooks'
import { getStringWidth, setTranslationValue } from '../../../utils/helpers'
import { Footer, Loading } from '../SharedComponents'
import { MultiBase } from './MultiBase/MultiBase'
import { MultiSelectGrouped } from './MultiSelectGrouped/MultiSelectGrouped'
import { MultiSelectWithTabs } from './MultiSelectWithTabs/MultiSelectWithTabs'
import { TMultiSelectPropTypes } from '../types'
import { SELECTED_VISIBLE_MIN_COUNT, TRANSLATIONS_DEFAULT_VALUES } from '../constants'
import { useChangePositionsOnScroll } from '../../../hooks/useChangePositionsOnScroll'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const MultiSelect = forwardRef((props: TMultiSelectPropTypes, ref): ReactElement | null => {
  const {
    withTabs,
    isGrouped,
    options,
    footerButtonProps = {
      confirm: {
        buttonText: 'Apply'
      },
      cancel: { buttonText: 'Cancel' }
    },
    selectedItems,
    setSelectedItems,
    name,
    setFieldValue,
    value,
    label,
    placeHolder,
    isRequiredField,
    translations,
    labelAddons,
    isLoading,
    className = '',
    disabled,
    dropdownWidth,
    align = 'left',
    checkboxInfo,
    size,
    ...rest
  } = props

  const localizations = { ...TRANSLATIONS_DEFAULT_VALUES, ...translations }

  const { overflowText } = localizations

  const initialSelected = (value as TSelectedValue[]) || selectedItems

  const inputRef = useRef<HTMLInputElement | null>(null)
  const [dropdownRef, setDropdownRef] = useState<HTMLDivElement | null>(null)

  const [isOpen, setIsOpen] = useState(false)
  const [selectedValues, setSelectedValues] = useState<TSelectedValue[]>(initialSelected)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const closeDropdown = () => setIsOpen(false)
  const openDropdown = () => setIsOpen(true)

  const { width } = useGetElemSizes(containerRef.current)

  const hasChange = useMemo(() => {
    if (selectedValues?.length !== initialSelected?.length) {
      return true
    }

    return (
      selectedValues?.findIndex(
        (value) => initialSelected?.findIndex((i: TSelectOption) => i.value === value.value) === -1
      ) !== -1
    )
  }, [selectedValues, initialSelected])

  useEffect(() => {
    setSelectedValues((value as TSelectedValue[]) || [])
  }, [value])

  useEffect(() => {
    if (selectedItems) {
      setSelectedValues(selectedItems || [])
    }
  }, [selectedItems])

  const cancelSelectedItems = useCallback(() => {
    if (selectedValues?.length) {
      setSelectedValues(selectedValues as TSelectedValue[])
    }

    if (hasChange) {
      setSelectedValues(initialSelected)
    }
    closeDropdown()
  }, [hasChange, initialSelected])

  useOnOutsideClick(containerRef.current, cancelSelectedItems, isOpen, useId())
  useChangePositionsOnScroll(inputRef?.current, dropdownRef)

  const submitSelectedValue = (selections: TSelectedValue[], isChecked: boolean) => {
    if (setSelectedItems) {
      setSelectedItems(selections, isChecked)
    }
    if (name && setFieldValue) {
      setFieldValue(name, selections)
    }

    closeDropdown()
  }

  const applySelectedItems = (isChecked: boolean) => {
    submitSelectedValue(selectedValues, isChecked)
  }

  const checkIsValueOverflowed = useCallback(
    (value: string) => {
      const elemWidth = getStringWidth(value, 14)
      return elemWidth > width - 80 // padding and width of (+number)
    },
    [width]
  )

  const toggleDropdown = (e?: TClickEventType) => {
    const clickedElement = e?.target as HTMLDivElement
    if (e && clickedElement.className && clickedElement.className.indexOf('icon-') !== -1) {
      setIsOpen(!isOpen)
      e.preventDefault()
    } else {
      openDropdown()
    }
  }

  const onItemSelect = useCallback((item: TSelectedValue) => {
    setSelectedValues((selected: TSelectedValue[]) => [...selected, item])
  }, [])

  const onItemDeselect = (item: TSelectedValue) => {
    setSelectedValues((selected: TSelectedValue[]) =>
      selected.filter((optionValue: TSelectedValue) => optionValue.value !== item.value)
    )
  }

  const selectedItemsLabels = useMemo(() => {
    if (!selectedValues || !selectedValues.length) {
      return ''
    }
    const onlyLabels = selectedValues.map((selected) => selected.label)
    const joinedLabel = onlyLabels.join(', ')

    return checkIsValueOverflowed(joinedLabel)
      ? setTranslationValue(overflowText, selectedValues.length)
      : joinedLabel
  }, [options, selectedValues, checkIsValueOverflowed])

  const optionsCount = useMemo(() => {
    if (isGrouped || withTabs) {
      const typed_options = options as TSelectGroupOptions
      return typed_options.reduce((acc: number, option: TSelectGroupOption) => {
        const { data } = option
        return acc + data.length
      }, 0)
    }
    return options.length
  }, [options])
  const { bottom, left, top, right } = useGetElemPositions(inputRef.current)
  const { width: containerWidth } = useGetElemSizes(containerRef.current)

  const SelectComp = withTabs ? MultiSelectWithTabs : isGrouped ? MultiSelectGrouped : MultiBase

  const { hasBottomSpace, bottomSpace } = useGetHasBottomSpace({
    element: dropdownRef,
    input: inputRef.current
  })

  const hasTopSpace = useGetHasTopSpace({
    element: dropdownRef,
    input: inputRef.current
  })

  return (
    <div className={classNames('select select--multi', className)} ref={containerRef}>
      <div onClick={toggleDropdown}>
        <Input
          readonly
          label={label}
          ref={inputRef}
          className="select__input"
          placeholder={placeHolder}
          required={isRequiredField}
          currentValue={selectedItemsLabels}
          rightIconProps={{ name: isOpen ? 'caret-up-hover' : 'caret-down-hover', size: 'xsmall' }}
          labelAddons={labelAddons}
          disabled={disabled}
          size={size}
        />
      </div>

      <>
        {isOpen && (
          <div
            className="select__options"
            ref={setDropdownRef}
            style={{
              left: align === 'left' ? left : right - (dropdownWidth || containerWidth),
              width: dropdownWidth || containerWidth,
              top: hasBottomSpace || !hasTopSpace ? bottom : 'initial',
              bottom: hasBottomSpace || !hasTopSpace ? 'initial' : window.innerHeight - top + 10
            }}
          >
            {isLoading ? (
              <Loading />
            ) : (
              <>
                <SelectComp
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  options={options}
                  isOpen={isOpen}
                  hasBottomSpace={hasBottomSpace}
                  translations={localizations}
                  selectedValues={selectedValues}
                  onItemSelect={onItemSelect}
                  onItemDeselect={onItemDeselect}
                  toggleDropdown={toggleDropdown}
                  setSelectedValues={setSelectedValues}
                  checkIsValueOverflowed={checkIsValueOverflowed}
                  isSearchAvailable={optionsCount > SELECTED_VISIBLE_MIN_COUNT}
                  scrollableContentStyle={{
                    ...(!hasBottomSpace && !hasTopSpace ? { maxHeight: bottomSpace - 65 - 56 } : {})
                  }} // 65 - height of the top content, 56 - height of the footer
                  {...rest}
                />
              </>
            )}
            {options.length ? (
              <Footer
                checkboxInfo={checkboxInfo}
                hasChange={hasChange}
                buttonProps={footerButtonProps}
                onCancel={cancelSelectedItems}
                onApply={applySelectedItems}
              />
            ) : null}
          </div>
        )}
      </>
    </div>
  )
})

MultiSelect.displayName = 'MultiSelect'
