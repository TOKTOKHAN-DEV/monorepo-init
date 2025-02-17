'use client'

import { BoxProps, DrawerBodyProps, DrawerRootProps } from '@chakra-ui/react'

import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
} from '@/components/ui/drawer'

interface DrawerBasisProps extends Omit<DrawerRootProps, 'children'> {
  header?: string | JSX.Element
  body?: string | JSX.Element
  footer?: string | JSX.Element
  styles?: {
    content?: BoxProps
    header?: BoxProps
    body?: BoxProps
    footer?: BoxProps
  }
}

export default function DrawerBasis({
  header,
  body,
  footer,
  styles,
  ...props
}: DrawerBasisProps) {
  return (
    <>
      <DrawerRoot placement={'end'} size={'sm'} {...props}>
        <DrawerBackdrop />
        <DrawerContent>
          <DrawerCloseTrigger />
          <DrawerHeader {...styles?.header}>{header}</DrawerHeader>
          <DrawerBody {...styles?.body}>{body}</DrawerBody>
          <DrawerFooter {...styles?.footer}>{footer}</DrawerFooter>
        </DrawerContent>
      </DrawerRoot>
    </>
  )
}
