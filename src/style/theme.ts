import { extendTheme } from '@chakra-ui/react'

const colors = {
  green: {
    900: '#00453a',
    700: '#00856f',
    100: '#dce9e2',
    50: '#f7f9f9'
  },
  beige: {
    100: '#fffaf1'
  }
}

const fonts = {
  body: "DM Sans"
}

export const theme = extendTheme({ colors, fonts })
