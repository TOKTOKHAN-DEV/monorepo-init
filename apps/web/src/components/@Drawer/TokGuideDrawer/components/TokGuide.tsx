'use client'

import { Box, Tabs, Text } from '@chakra-ui/react'

import { Bookmarks } from './contents/Bookmarks'
import { Examples } from './contents/Examples'
import { State } from './contents/State'

export const TokGuide = () => {
  return (
    <Box>
      <Text>
        환영합니다. 해당 보일러템플릿은 똑똑한개발자에서 제공하는 여러 모듈로
        이루어져 있습니다.
      </Text>
      <Box>
        <Tabs.Root mt="24px" defaultValue="bookmarks">
          <Tabs.List>
            <Tabs.Trigger value="bookmarks">Bookmarks</Tabs.Trigger>
            <Tabs.Trigger value="examples">Examples</Tabs.Trigger>
            <Tabs.Trigger value="state">State</Tabs.Trigger>
            <Tabs.Indicator />
          </Tabs.List>
          <Tabs.Content value="bookmarks">
            <Bookmarks />
          </Tabs.Content>
          <Tabs.Content value="examples">
            <Examples />
          </Tabs.Content>
          <Tabs.Content value="state">
            <State />
          </Tabs.Content>
        </Tabs.Root>
      </Box>
    </Box>
  )
}
