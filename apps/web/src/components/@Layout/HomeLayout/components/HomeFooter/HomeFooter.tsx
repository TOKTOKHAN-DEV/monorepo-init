import { Container, ContainerProps, Link } from '@chakra-ui/react'

import { LogoIcon } from '@/generated/icons/MyIcons'
import { ROUTES } from '@/generated/path/routes'

export default function HomeFooter({ ...props }: ContainerProps) {
  return (
    <Container
      w={'100%'}
      display={'flex'}
      alignItems="center"
      flexDirection={'column'}
      justifyContent={'center'}
      {...props}
    >
      <Link href={ROUTES.MAIN}>
        <LogoIcon boxSize={'80px'} color={'icon.tertiary'} />
      </Link>
    </Container>
  )
}
