'use client'

import { ReactElement, cloneElement } from 'react'

import { useDisclosure } from '@chakra-ui/react'

interface OpenBtnProps {
  button: ReactElement
  target: ReactElement
}

export const OpenBtn = ({ button, target }: OpenBtnProps) => {
  const { open, setOpen } = useDisclosure()
  return (
    <>
      {cloneElement(button, {
        onClick: () => setOpen(true),
      })}
      {cloneElement(target, {
        open,
        onOpenChange: (e: { open: boolean }) => setOpen(e.open),
      })}
    </>
  )
}
