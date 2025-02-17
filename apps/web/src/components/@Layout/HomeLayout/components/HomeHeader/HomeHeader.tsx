'use client'

import { useState } from 'react'

import { Button, Flex, Link } from '@chakra-ui/react'

import { LogoIcon } from 'generated/icons/MyIcons'

import { LAYOUT } from '@/constants/layout'
import { ROUTES } from '@/generated/path/routes'

import HomeHeaderDrawer from './components/HomeHeaderDrawer'
import {
  HOME_HEADER_VARIANTS,
  HomeHeaderVariantType,
} from './constants/variants'

interface HomeHeaderProps {
  variant?: HomeHeaderVariantType
}

const HomeHeader = ({ variant = 'light' }: HomeHeaderProps) => {
  const [open, setOpen] = useState(false)

  const cssByVariant = HOME_HEADER_VARIANTS[variant]
  console.log('open', open)
  return (
    <>
      <Flex //
        as="header"
        px={{ base: '16px', md: '80px' }}
        alignItems="center"
        justifyContent="space-between"
        position="fixed"
        zIndex="-1"
        transition="all 0.3s"
        w="100%"
        h={LAYOUT.HEADER.HEIGHT}
        {...cssByVariant.header}
      >
        <Link href={ROUTES.MAIN}>
          <LogoIcon boxSize={'74px'} color={'brand.primary.500'} />
        </Link>
        <Button variant="outline" size="sm" onClick={() => setOpen(true)}>
          Open Drawer
        </Button>
      </Flex>
      <HomeHeaderDrawer
        open={open}
        onOpenChange={(e: { open: boolean }) => setOpen(e.open)}
        bodyProps={cssByVariant.drawer}
      />
    </>
  )
}

export default HomeHeader
