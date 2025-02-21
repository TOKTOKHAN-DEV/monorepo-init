import { Suspense } from 'react'

import { Metadata } from 'next'

import { Box, Code, List } from '@chakra-ui/react'

import Admonition from '@/components/@Templates/Admonition'
import TemplateLayout from '@/components/@Templates/TemplateLayout'

import LoginForm from './_source/components/LoginForm'
import SocialButton from './_source/components/SocialButton'

export const metadata: Metadata = {
  title: '로그인',
}

export default function LoginPage() {
  return (
    <TemplateLayout title={'Login'}>
      <Admonition title="로그인 페이지" type="info" mb={'20px'}>
        <Box mb={'10px'} textStyle={'pre-body-03'}>
          로그인 한 유저 Block: <Code>middleware - un-auth</Code>
          <List.Root px={'20px'}>
            <List.Item>로그인 페이지</List.Item>
            <List.Item>회원가입 페이지</List.Item>
          </List.Root>
        </Box>
        <Box textStyle={'pre-body-03'}>
          로그인 안 한 유저 Block: <Code>middleware - auth</Code>
          <List.Root px={'20px'}>
            <List.Item>마이 페이지</List.Item>
            <List.Item>주문 페이지</List.Item>
          </List.Root>
        </Box>
      </Admonition>
      <Suspense fallback="컴포넌트 내부에서 useSearchParams 훅을 사용한다면 서스펜스를 감싸주어야 합니다.">
        <Box maxW={'400px'} mx={'auto'}>
          <LoginForm />
        </Box>
      </Suspense>
      <Suspense fallback="컴포넌트 내부에서 useSearchParams 훅을 사용한다면 서스펜스를 감싸주어야 합니다.">
        <SocialButton />
      </Suspense>
    </TemplateLayout>
  )
}
