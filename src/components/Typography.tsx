import { css } from '@emotion/react'
import React from 'react'

interface Props {
  label: string
  fontWeight: string
  fontSize: string
  fontStyle?: string
  lineHeight?: string
  paddingTop?: string
  paddingBottom?: string
}

function BigTitle({
  label,
  fontWeight,
  fontSize,
  fontStyle,
  lineHeight,
  paddingTop,
  paddingBottom,
}: Props) {
  const styles = css({
    fontWeight: `${fontWeight}`,
    fontSize: `${fontSize}`,
    fontStyle: `${fontStyle ? fontStyle : ''}`,
    lineHeight: `${lineHeight ? lineHeight : '0'} `,
    paddingTop: `${paddingTop ? paddingTop : '0'} `,
    paddingBottom: `${paddingBottom ? paddingBottom : '0'} `,
    letterSpacing: '0.25px',
    fontFamily: 'SF Pro Display',
    display: 'block',
  })
  return <span css={styles}>{label}</span>
}

export default BigTitle
