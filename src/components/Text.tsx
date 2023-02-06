import React from 'react'
import styled from '@emotion/styled'
import theme, { Typography } from '../styles/theme'

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  typography: Typography
  id?: string
  name?: string
  className?: string
}

type SpanProp = Pick<Props, 'typography'>

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
