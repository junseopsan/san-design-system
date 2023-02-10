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
  normal:400,
  semiBold:600,
  bold:700,
}

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

// todo : generateTypography 추상화. 반복을 줄여보자. iterate. map. 클로져. 커링기법. 등등. 리버스 엔지니어링. emotion. react. <- 리버스 엔지니어링. 
// 리액트 렌더링. 라이브러리를 전체 x. 렌더링 해주는 부분. 시간이 걸려도 천천히 한줄씩. 인사이트. 어떻게든.
// 리버스 엔지니어링. 남들 안하는 행위를 할수록 스코프가 좁아진다. 호기심에서 시작한다. 성장을 위해 x 오래가지 못한다. 
// tsx html markup. babel. 추상구문트리. webpack 웹 번들링. 호기심.
// 에프랩 없이 멘토링. 나 혼자서 할 수 있어야 한다. 감사합니다. 깃허브.
// 내 성장에 누군가의 디펜더시가 걸려이으면 좋지않다.
// 선두에 있을려면 혼자 해야한다. 제 앞에 있을 필요 없다. 
// 버셀. 3억. 트위터. 트위터. 
// 패턴. 커스텀훅. 훅병. 스트릭트. 컴포넌트패턴. 

const typography = {
  hugeTitle60: generateTypography("sixZero","normal"),
  hugeTitle60Bold: generateTypography("sixZero", "bold"),
  largeTitle34: generateTypography("threeFour", "normal"),
  largeTitle34Bold: generateTypography("threeFour", "bold"),
  titleOne28: generateTypography("twoEight", "normal"), 
  titleOne28Bold: generateTypography("twoEight", "bold"), 
  titleTwo22: generateTypography("twoTwo", "normal"), 
  titleTwo22Bold: generateTypography("twoTwo", "bold"), 
  titleThree20: generateTypography("twoZero", "normal"), 
  titleThree20Bold: generateTypography("twoZero", "bold"), 
  headlines17SemiBold: generateTypography("oneSeven", "semiBold"), 
  headlines17SemiBoldItalic: generateTypography("oneSeven", "semiBold"), 
  callout16: generateTypography("oneSix", "normal"), 
  callout16SemiBold: generateTypography("oneSix", "semiBold"), 
  callout16Italic: generateTypography("oneSix", "normal", 'italic'), 
  callout16SemiBoldItalic: generateTypography("oneSix", "semiBold", 'italic'), 
  subheadline15: generateTypography("oneFive", "normal"), 
  subheadline15SemiBold: generateTypography("oneFive", "semiBold"), 
  subheadline15Italic: generateTypography("oneFive", "normal", 'italic'), 
  subheadline15SemiBoldItalic: generateTypography("oneFive", "semiBold", 'italic'), 
  body17: generateTypography("oneSeven", "normal"), 
  body17SemiBold: generateTypography("oneSeven", "semiBold"), 
  body17Italic: generateTypography("oneSeven", "normal", 'italic'), 
  body17SemiBoldItalic: generateTypography("oneSeven", "semiBold", 'italic'), 
  footnote13: generateTypography("oneThree", "normal"), 
  footnote13SemiBold: generateTypography("oneThree", "semiBold"), 
  footnote13Italic: generateTypography("oneThree", "normal", 'italic'), 
  footnote13SemiBoldItalic: generateTypography("oneThree", "semiBold", 'italic'), 
  captions12: generateTypography("oneTwo", "normal"), 
  captions12SemiBold: generateTypography("oneTwo", "semiBold"), 
  captions12Italic: generateTypography("oneTwo", "normal", 'italic'), 
  captions12SemiBoldItalic: generateTypography("oneTwo", "semiBold", 'italic'), 
  captions11: generateTypography("oneOne", "normal"), 
  captions11SemiBold: generateTypography("oneOne", "semiBold"), 
  captions11Italic: generateTypography("oneOne", "normal"), 
  captions11SemiBoldItalic: generateTypography("oneOne", "semiBold", 'italic'), 
  captions10SemiBold: generateTypography("oneZero", "semiBold"), 
  rubric15: generateTypography("oneFive", "normal", '', 'uppercase'), 
  rubric15SemiBold: generateTypography("oneFive", "semiBold", '', 'uppercase'), 
  rubric15Bold: generateTypography("oneFive", "bold", '', 'uppercase'), 
  rubric13: generateTypography("oneThree", "normal", '', 'uppercase'), 
  rubric13SemiBold: generateTypography("oneThree", "semiBold", '', 'uppercase'), 
  rubric13Bold: generateTypography("oneThree", "bold", '', 'uppercase'), 
  rubric17Bold: generateTypography("oneSeven", "bold", '', 'uppercase'), 
  rubric11Bold: generateTypography("oneOne", "bold", '', 'uppercase'), 
  rubric9Bold: generateTypography("nine", "bold", '', 'uppercase'), 
} as const

const theme = {
  typography
}

export type Typography = keyof typeof typography

export default theme;