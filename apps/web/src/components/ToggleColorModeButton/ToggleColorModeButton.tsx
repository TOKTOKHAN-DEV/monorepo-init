'use client'

import { useColorMode } from '@/components/ui/color-mode'

import { ToggleColorModeButtonView } from './ToggleColorModeButton.view'

const ToggleColorModeButton = () => {
  const { toggleColorMode, colorMode } = useColorMode()
  return (
    <ToggleColorModeButtonView
      colorMode={colorMode}
      toggleColorMode={toggleColorMode}
    />
  )
}

export default ToggleColorModeButton
