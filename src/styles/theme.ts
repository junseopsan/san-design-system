import { css } from '@emotion/react' 

const fontNomalStyle = css`
  font-weight: 400;
`
const fontSemiBoldStyle = css`
  font-weight: 600;
`
const fontBoldStyle = css`
  font-weight: 700;
`
const fontItalicStyle = css`
  font-style: italic;
`
const hugeTitleCmmStyle = css`
    font-size: 60px;
    line-height: 70px;
    letter-spacing: 0.25px;
`
const largeTitleCmmStyle = css`
    font-size: 34px;
    line-height: 41px;
    letter-spacing: 0.374px;
`
const titleOneCmmStyle = css`
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 0.364px;
`
const titleTwoCmmStyle = css`
    font-size: 22px;
    line-height: 28px;
    letter-spacing: 0.35px;
`
const titleThreeCmmStyle = css`
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.38px;
`
const headlinesCmmStyle = css`
    font-size: 17px;
    line-height: 22px;
    letter-spacing: -0.408px;
`
const calloutCmmStyle = css`
    font-size: 16px;
    line-height: 21px;
    letter-spacing: -0.32px;
`
const subheadlineCmmStyle = css`
    font-size: 15px;
    line-height: 20px;
    letter-spacing: -0.24px;
`
const bodyCmmStyle = css`
    font-size: 17px;
    line-height: 22px;
    letter-spacing: -0.408px;
`
const footnoteCmmStyle = css`
    font-size: 13px;
    line-height: 16px;
    letter-spacing: -0.078px;
`
const captions1CmmStyle = css`
    font-size: 12px;
    line-height: 16px;
`
const captions2CmmStyle = css`
    font-size: 11px;
    line-height: 12px;
    letter-spacing: 0.066px;
`
const captions3CmmStyle = css`
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.07px;
`
const rubric1CmmStyle = css`
    font-size: 15px;
    line-height: 22px;
    letter-spacing: -0.21px;
    text-transform: uppercase;
`
const rubric2CmmStyle = css`
    font-size: 13px;
    line-height: 22px;
    letter-spacing: -0.07px;
    text-transform: uppercase;
`
const rubric3CmmStyle = css`
    font-size: 17px;
    line-height: 22px;
    letter-spacing: -0.41px;
    text-transform: uppercase;
`
const rubric4CmmStyle = css`
    font-size: 11px;
    line-height: 16px;
    letter-spacing: -0.41px;
    text-transform: uppercase;
`
const rubric5CmmStyle = css`
    font-size: 9px;
    line-height: 22px;
    text-transform: uppercase;
`

const typography = {
  hugeTitle60: css`
    ${hugeTitleCmmStyle}
    ${fontNomalStyle}
  `,
  hugeTitle60Bold: css`
    ${hugeTitleCmmStyle}
    ${fontBoldStyle}
  `,
  largeTitle34: css`
    ${largeTitleCmmStyle}
    ${fontNomalStyle}
  `,
  largeTitle34Bold: css`
    ${largeTitleCmmStyle}
    ${fontBoldStyle}
  `,
  titleOne28: css`
    ${titleOneCmmStyle}
    ${fontNomalStyle}
  `,
  titleOne28Bold: css`
    ${titleOneCmmStyle}
    ${fontBoldStyle}
  `,
  titleTwo22: css`
    ${titleTwoCmmStyle}
    ${fontNomalStyle}
  `,
  titleTwo22Bold: css`
    ${titleTwoCmmStyle}
    ${fontBoldStyle}
  `,
  titleThree20: css`
    ${titleThreeCmmStyle}
    ${fontNomalStyle}
  `,
  titleThree20Bold: css`
    ${titleThreeCmmStyle}
    ${fontBoldStyle}
  `,
  headlines17SemiBold: css`
    ${headlinesCmmStyle}
    ${fontSemiBoldStyle}
  `,
  headlines17SemiBoldItalic: css`
    ${headlinesCmmStyle}
    ${fontSemiBoldStyle}
    ${fontItalicStyle}
  `,
  callout16: css`
    ${calloutCmmStyle}
    ${fontNomalStyle}
  `,
  callout16SemiBold: css`
    ${calloutCmmStyle}
    ${fontSemiBoldStyle}
  `,
  callout16Italic: css`
    ${calloutCmmStyle}
    ${fontItalicStyle}
  `,
  callout16SemiBoldItalic: css`
    ${calloutCmmStyle}
    ${fontSemiBoldStyle}
    ${fontItalicStyle}
  `,
  subheadline15: css`
    ${subheadlineCmmStyle}
    ${fontNomalStyle}
  `,
  subheadline15SemiBold: css`
    ${subheadlineCmmStyle}
    ${fontSemiBoldStyle}
  `,
  subheadline15Italic: css`
    ${subheadlineCmmStyle}
    ${fontItalicStyle}
  `,
  subheadline15SemiBoldItalic: css`
    ${subheadlineCmmStyle}
    ${fontSemiBoldStyle}
    ${fontItalicStyle}
  `,
  body17: css`
    ${bodyCmmStyle}
    ${fontNomalStyle}
  `,
  body17SemiBold: css`
    ${bodyCmmStyle}
    ${fontSemiBoldStyle}
  `,
  body17Italic: css`
    ${bodyCmmStyle}
    ${fontItalicStyle}
  `,
  body17SemiBoldItalic: css`
    ${bodyCmmStyle}
    ${fontSemiBoldStyle}
    ${fontItalicStyle}
  `,
  footnote13: css`
    ${footnoteCmmStyle}
    ${fontNomalStyle}
  `,
  footnote13SemiBold: css`
    ${footnoteCmmStyle}
    ${fontSemiBoldStyle}
  `,
  footnote13Italic: css`
    ${footnoteCmmStyle}
    ${fontItalicStyle}
    `,
  footnote13SemiBoldItalic: css`
    ${footnoteCmmStyle}
    ${fontSemiBoldStyle}
    ${fontItalicStyle}
    `,
    captions12: css`
      ${captions1CmmStyle}
      ${fontNomalStyle}
    `,
    captions12SemiBold: css`
      ${captions1CmmStyle}
      ${fontSemiBoldStyle}
    `,
    captions12Italic: css`
      ${captions1CmmStyle}
      ${fontNomalStyle}
      ${fontItalicStyle}
    `,
    captions12SemiBoldItalic: css`
      ${captions1CmmStyle}
      ${fontSemiBoldStyle}
      ${fontItalicStyle}
    `,
    captions11: css`
      ${captions2CmmStyle}
      ${fontNomalStyle}
    `,
    captions11SemiBold: css`
      ${captions2CmmStyle}
      ${fontSemiBoldStyle}
    `,
    captions11Italic: css`
      ${captions2CmmStyle}
      ${fontNomalStyle}
      ${fontItalicStyle}
    `,
    captions11SemiBoldItalic: css`
      ${captions2CmmStyle}
      ${fontSemiBoldStyle}
      ${fontItalicStyle}
    `,
    captions10SemiBold: css`
      ${captions3CmmStyle}
      ${fontSemiBoldStyle}
    `,
    rubric15: css`
      ${rubric1CmmStyle}
      ${fontNomalStyle}
    `,
    rubric15SemiBold: css`
      ${rubric1CmmStyle}
      ${fontSemiBoldStyle}
    `,
    rubric15Bold: css`
      ${rubric1CmmStyle}
      ${fontBoldStyle}
    `,
    rubric13: css`
      ${rubric2CmmStyle}
      ${fontNomalStyle}
    `,
    rubric13SemiBold: css`
      ${rubric2CmmStyle}
      ${fontSemiBoldStyle}
    `,
    rubric13Bold: css`
      ${rubric2CmmStyle}
      ${fontBoldStyle}
    `,
    rubric17Bold: css`
      ${rubric3CmmStyle}
      ${fontBoldStyle}
    `,
    rubric11Bold: css`
      ${rubric4CmmStyle}
      ${fontBoldStyle}
    `,
    rubric9Bold: css`
      ${rubric5CmmStyle}
      ${fontBoldStyle}
    `,
} as const

const theme = {
  typography
}

export type Typography = keyof typeof typography

export default theme;