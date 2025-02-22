import { Center, Spinner, SpinnerProps } from '@chakra-ui/react'

function Splash(props: SpinnerProps) {
  return (
    <Center w="100vw" h="100vh" bg="gray.100" {...props}>
      <Spinner
        borderWidth="4px"
        animationDuration="0.65s"
        css={{ '--spinner-track-color': 'colors.gray.200' }}
        color="primary.500"
        size="xl"
      />
    </Center>
  )
}

export default Splash
