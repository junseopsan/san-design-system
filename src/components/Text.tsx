import React from 'react'
import styled from '@emotion/styled'
import theme, { Typography } from '../styles/theme'

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  typography: Typography
}

type SpanProp = Pick<Props, 'typography'>

// 반복되는 행위를 제거한다.
// id name class 사용할수 없다.
export function Text({
  typography,
  children,
  ...props
}: React.PropsWithChildren<Props>) {
  return (
    <Span typography={typography} {...props}>
      {children}
    </Span>
  )
}

const Span = styled.span<SpanProp>`
  ${(props) => theme.typography[props.typography]};
`
