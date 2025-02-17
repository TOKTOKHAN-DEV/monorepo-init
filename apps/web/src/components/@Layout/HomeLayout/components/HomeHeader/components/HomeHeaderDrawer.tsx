import { BoxProps, Button, DrawerRootProps, Text } from '@chakra-ui/react'

import DrawerBasis from '@/components/@Drawer/DrawerBasis'
import { DrawerActionTrigger, DrawerTitle } from '@/components/ui/drawer'

interface HomeHeaderDrawerProps extends Omit<DrawerRootProps, 'children'> {
  bodyProps?: BoxProps
}

const HomeHeaderDrawer = ({ bodyProps, ...props }: HomeHeaderDrawerProps) => {
  return (
    <DrawerBasis //
      header={<DrawerTitle>Drawer Title</DrawerTitle>}
      body={<Text>body</Text>}
      footer={
        <>
          <DrawerActionTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerActionTrigger>
          <Button>Save</Button>
        </>
      }
      styles={{
        header: { bg: 'white' },
        content: { bg: 'white' },
        body: { ...bodyProps },
      }}
      {...props}
    />
  )
}

export default HomeHeaderDrawer
