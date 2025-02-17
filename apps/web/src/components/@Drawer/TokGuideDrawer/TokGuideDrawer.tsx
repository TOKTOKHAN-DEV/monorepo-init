'use client'

import { Button, Drawer as ChakraDrawer } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
} from '@/components/ui/drawer'

import { TokGuide } from './components/TokGuide'

export const TokGuideDrawer = (props: Partial<ChakraDrawer.RootProps>) => {
  return (
    <DrawerRoot size="md" placement="end" {...props}>
      <DrawerBackdrop />
      <DrawerContent>
        <DrawerCloseTrigger />
        <DrawerHeader>
          <DrawerTitle>Drawer Title</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>{/* <TokGuide /> */}</DrawerBody>
        <DrawerFooter />
      </DrawerContent>
    </DrawerRoot>
  )
}
