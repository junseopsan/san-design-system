import '@emotion/react'

type ThemeId = 'gray' | 'red'

declare module '@emotion/react' {
  export interface Theme 
  {
    [key in themeId]: {
      background: string;
      color: string;
    }
  }
}