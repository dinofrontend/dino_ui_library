import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { Text } from '../Text'
import { useGetTooltipStyles, useHideOnScroll } from '../../hooks'
import { TTooltipProps } from './types'
import { Timeout } from 'react-number-format/types/types'

let timeoutId: Timeout | null = null
export const Tooltip = (props: TTooltipProps): JSX.Element | null => {
  const tooltipRef = useRef<HTMLDivElement | null>(null)
  const {
    size = 'large',
    text,
    className = '',
    position = 'bottom-left',
    dataId = '',
    id,
    elemRef,
    children,
    hovered = false,
    timer
  } = props

  const [isHovered, setIsHovered] = useState(hovered)
  const [parent, setElement] = useState<HTMLElement | null>(elemRef || null)

  useEffect(() => {
    if (id) {
      const element = document.getElementById(id.toString())
      setElement(element)
    }
  }, [id])

  const onMouseEnter = () => {
    if (timer) {
      timeoutId = setTimeout(() => setIsHovered(true), timer)
    } else {
      setIsHovered(true)
    }
  }
  const onMouseLeave = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    setIsHovered(false)
  }

  useHideOnScroll(onMouseLeave)

  const { tooltipStyles, tooltipPosition } = useGetTooltipStyles({
    elemRef: parent,
    tooltipRef: tooltipRef.current,
    initialPosition: position
  })

  useEffect(() => {
    if (parent) {
      parent.addEventListener('mouseenter', onMouseEnter)
      parent.addEventListener('mouseleave', onMouseLeave)
    }
  }, [parent])

  return (
    <>
      {isHovered && (
        <div
          style={tooltipStyles}
          data-id={dataId}
          className={classNames(`tooltip tooltip--${size} tooltip--${tooltipPosition}`, className)}
          ref={tooltipRef}
        >
          <Text
            dataId={`${dataId}-text`}
            className="tooltip__inner"
            type="primary"
            weight="regular"
            lineHeight="small"
            size={`${size == 'small' ? 'xsmall' : 'small'}`}
          >
            {text}
          </Text>
        </div>
      )}
      {children}
    </>
  )
}
