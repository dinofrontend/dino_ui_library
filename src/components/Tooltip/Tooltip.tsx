import React, {useEffect, useRef, useState} from 'react'
import classNames from 'classnames'
import {Text} from '../Text'
import {useGetTooltipStyles, useHideOnScroll} from '../../hooks'
import {TTooltipProps} from './types'

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
        hovered = false
    } = props

    const [isHovered, setIsHovered] = useState(hovered)
    const [parent, setElement] = useState<HTMLElement | null>(elemRef || null)
    const [toolTipCurrentWidth, setToolTipCurrentWidth] = useState<number>(0)

    useEffect(() => {
        if (id) {
            const element = document.getElementById(id.toString())
            setElement(element)
        }
    }, [id])

    const onMouseEnter = () => {
        setIsHovered(true)
    }
    const onMouseLeave = () => setIsHovered(false)

    useHideOnScroll(onMouseLeave)

    const {tooltipStyles, tooltipPosition} = useGetTooltipStyles({
        elemRef: parent,
        tooltipRef: tooltipRef.current,
        initialPosition: position,
        toolTipCurrentWidth: toolTipCurrentWidth
    })

    useEffect(() => {
        if (parent) {
            parent.addEventListener('mouseenter', onMouseEnter)
            parent.addEventListener('mouseleave', onMouseLeave)
        }

        return () => {
            parent?.removeEventListener('mouseenter', onMouseEnter)
            parent?.removeEventListener('mouseleave', onMouseLeave)
        }
    }, [parent])

    useEffect(() => {
        if (isHovered) {
            if (typeof tooltipRef?.current?.clientWidth === 'number') {
                setToolTipCurrentWidth(tooltipRef?.current?.clientWidth)
            }
        } else {
            setToolTipCurrentWidth(0)
        }
    }, [isHovered])

    if (!isHovered) {
        return null
    }

    return (
        <>
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
        </>
    )
}
