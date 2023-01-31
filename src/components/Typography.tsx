import { css } from '@emotion/react'
import theme from '../styles/theme'
import { ThemeId } from '../styles/emotion'

interface Props {
  label: string
  fontWeight: string
  fontSize: string
  color?: string
  fontStyle?: string
  lineHeight?: string
  paddingTop?: string
  paddingBottom?: string
  themeId?: ThemeId
}

function BigTitle({
  label,
  fontWeight,
  fontSize,
  fontStyle,
  lineHeight,
  paddingTop,
  paddingBottom,
  themeId,
}: Props) {
  const styles = css({
    color: themeId ? `${theme[themeId].color}` : '#000',
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
