'use client'

import React from 'react'

import { ChakraProvider, defaultSystem } from '@chakra-ui/react'

import { ColorModeProvider } from '@/components/ui/color-mode'

// import theme from '@/configs/theme'
// import fonts from '@/configs/theme/foundations/typography/fonts'
// import { COOKIE_KEYS } from '@/constants/cookie-keys'
// import { clientCookie } from '@/stores/cookie/store'

// const coveredTheme: Record<string, any> = {
//   ...theme,
//   fonts,
// }

export const ThemeProvider = ({ ...props }: { children: React.ReactNode }) => {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
