import '@emotion/react'

type themeId = 'gray' | 'darkGray'

declare module '@emotion/react' {
  export interface Theme 
  {
    [key in themeId]: {
      background: string;
      color: string;
    }
  }
}