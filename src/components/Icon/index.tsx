import React from 'react'
import { IconPropTypes } from './types'
import './index.scss'

const Icon = (props: IconPropTypes): JSX.Element => {
  const {
    name,
    type,
    size = 'medium',
    withWrapper = false,
    onClick,
    className = '',
    refHandler
  } = props

  let content = (
    <i
      ref={refHandler}
      onClick={onClick}
      className={`icon icon--${size} icon--${type} ${className} icon-${name}`}
    />
  )

  if (withWrapper) {
    content = <span className="icon-wrapper">{content}</span>
  }

  return content
}

export default Icon
