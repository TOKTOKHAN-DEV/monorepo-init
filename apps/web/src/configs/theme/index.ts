// import { extendTheme } from '@chakra-ui/react'
// import { components } from './components'
// import { foundations } from './foundations'
// const overrides = {
//   components,
//   ...foundations,
// }
// export default extendTheme(overrides)
import { createSystem, defaultConfig } from '@chakra-ui/react'

export default createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: `'Figtree', sans-serif` },
        body: { value: `'Figtree', sans-serif` },
      },
    },
  },
})
