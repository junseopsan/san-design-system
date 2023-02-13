import { css } from '@emotion/react' 

const fontSizeMap = {
  nine: 9,
  oneZero: 10,
  oneOne: 11,
  oneTwo: 12,
  oneThree: 13,
  oneFive: 15,
  oneSix: 16,
  oneSeven: 17,
  twoZero: 20,
  twoTwo: 22,
  twoEight: 28,
  threeFour: 34,
  sixZero: 60,
} as const 

const fontWeightMap = {
  normal: 400,
  semiBold: 600,
  bold: 700,
} as const

const generateTypography = (
  size: keyof typeof fontSizeMap,
  weight: keyof typeof fontWeightMap,
  fontFamily?:string,
  textTransform?:string
) => {
  return css`
    font-size: ${fontSizeMap[size]}px;
    font-weight: ${fontWeightMap[weight]};
    font-family: ${fontFamily};
    text-transform: ${textTransform};
  `
}

const list = [
  {name: 'hugeTitle60', size: 'sixZero', weight: 'nomal'},
  {name: 'hugeTitle60Bold', size: 'sixZero', weight: 'bold'},
  {name: 'largeTitle34', size: 'threeFour', weight: 'normal'},
  {name: 'largeTitle34Bold', size: 'threeFour', weight: 'bold'},
  {name: 'titleOne28', size: 'twoEight', weight: 'normal'},
  {name: 'titleOne28Bold', size: 'twoEight', weight: 'bold'},
  {name: 'titleTwo22', size: 'twoTwo', weight: 'normal'},
  {name: 'titleTwo22Bold', size: 'twoTwo', weight: 'bold'},
  {name: 'titleThree20', size: 'twoZero', weight: 'normal'},
  {name: 'titleThree20Bold', size: 'twoZero', weight: 'bold'},
  {name: 'headlines17SemiBold', size: 'oneSeven', weight: 'semiBold'},
  {name: 'headlines17SemiBoldItalic', size: 'oneSeven', weight: 'semiBold'},
  {name: 'callout16', size: 'oneSix', weight: 'normal'},
  {name: 'callout16SemiBold', size: 'oneSix', weight: 'semiBold'},
  {name: 'callout16Italic', size: 'oneSix', weight: 'normal', fontFamily: 'italic'},
  {name: 'callout16SemiBoldItalic', size: 'oneSix', weight: 'semiBold', fontFamily: 'italic'},
  {name: 'subheadline15', size: 'oneFive', weight: 'normal'},
  {name: 'subheadline15SemiBold', size: 'oneFive', weight: 'semiBold'},
  {name: 'subheadline15Italic', size: 'oneFive', weight: 'normal', fontFamily: 'italic'},
  {name: 'subheadline15SemiBoldItalic', size: 'oneFive', weight: 'semiBold', fontFamily: 'italic'},
  {name: 'body17', size: 'oneSeven', weight: 'normal'},
  {name: 'body17SemiBold', size: 'oneSeven', weight: 'semiBold'},
  {name: 'body17Italic', size: 'oneSeven', weight: 'normal', fontFamily: 'italic'},
  {name: 'body17SemiBoldItalic', size: 'oneSeven', weight: 'semiBold', fontFamily: 'italic'},
  {name: 'footnote13', size: 'oneThree', weight: 'normal'},
  {name: 'footnote13SemiBold', size: 'oneThree', weight: 'semiBold'},
  {name: 'footnote13Italic', size: 'oneThree', weight: 'normal', fontFamily: 'italic'},
  {name: 'footnote13SemiBoldItalic', size: 'oneThree', weight: 'semiBold', fontFamily: 'italic'},
  {name: 'captions12', size: 'oneTwo', weight: 'normal'},
  {name: 'captions12SemiBold', size: 'oneTwo', weight: 'semiBold'},
  {name: 'captions12Italic', size: 'oneTwo', weight: 'normal', fontFamily: 'italic'},
  {name: 'captions12SemiBoldItalic', size: 'oneTwo', weight: 'semiBold', fontFamily: 'italic'},
  {name: 'captions11', size: 'oneOne', weight: 'normal'},
  {name: 'captions11SemiBold', size: 'oneOne', weight: 'semiBold'},
  {name: 'captions11Italic', size: 'oneOne', weight: 'normal'},
  {name: 'captions11SemiBoldItalic', size: 'oneOne', weight: 'semiBold', fontFamily: 'italic'},
  {name: 'captions10SemiBold', size: 'oneZero', weight: 'semiBold'},
  {name: 'rubric15', size: 'oneFive', weight: 'normal', fontFamily: '', textTransform:'uppercase'},
  {name: 'rubric15SemiBold', size: 'oneFive', weight: 'semiBold', fontFamily: '', textTransform:'uppercase'},
  {name: 'rubric15Bold', size: 'oneFive', weight: 'bold', fontFamily: '', textTransform:'uppercase'},
  {name: 'rubric13', size: 'oneThree', weight: 'normal', fontFamily: '', textTransform:'uppercase'},
  {name: 'rubric13SemiBold', size: 'oneThree', weight: 'semiBold', fontFamily: '', textTransform:'uppercase'},
  {name: 'rubric13Bold', size: 'oneThree', weight: 'bold', fontFamily: '', textTransform:'uppercase'},
  {name: 'rubric17Bold', size: 'oneSeven', weight: 'bold', fontFamily: '', textTransform:'uppercase'},
  {name: 'rubric11Bold', size: 'oneOne', weight: 'bold', fontFamily: '', textTransform:'uppercase'},
  {name: 'rubric9Bold', size: 'nine', weight: 'bold', fontFamily: '', textTransform:'uppercase'},
]
// interface IKeys {
//   size: string;
//   weight: string;
//   fontFamily?: string;
//   textTransform?: string;
// };

const typography = Object.assign({}, ...list.map((item) => ({ [item.name]: generateTypography(item.size as any, item.weight as any, item.fontFamily, item.textTransform)})));
const theme = {
  typography,
}

export type Typography = keyof typeof typography

export default theme;