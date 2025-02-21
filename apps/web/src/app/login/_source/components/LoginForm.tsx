'use client'

import { useTransition } from 'react'

import { Route } from 'next'
import { useRouter, useSearchParams } from 'next/navigation'

import { Box, BoxProps, Button, Input } from '@chakra-ui/react'

import { Field } from '@/components/ui/field'

import { login } from '../actions/login'
import useLoginForm from '../hooks/useLoginForm'

interface LoginFormProps extends BoxProps {}

const LoginForm = ({ ...basisProps }: LoginFormProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const returnUrl = searchParams.get('returnUrl') as Route

  const [isPending, startTransition] = useTransition()

  const {
    handleSubmit,
    setError,
    register,
    formState: { errors, isValid, isDirty },
  } = useLoginForm()

  const setLoginError = () => {
    setError('id', {
      message: ' ',
    })
    setError('password', {
      message: ' ',
    })
  }

  /**
   * react-query 의 mutate hook 등을 사용하지 않는 경우
   * useTransition 훅을 사용하여 작업을 감싸고
   * isPending 으로 작업 상태를 받아서 로딩 처리 하는 방법이 있습니다.
   * @see https://react.dev/reference/react/startTransition
   */
  const onSubmit = handleSubmit((data) => {
    startTransition(async () => {
      // try {
      //   const response = await login(data)
      //   if (response) {
      //     router.replace(returnUrl || '/')
      //   } else {
      //     setLoginError()
      //   }
      // } catch (error) {
      //   setLoginError()
      // }
    })
  })

  return (
    <Box as="form" {...basisProps}>
      <Field label="회원 아이디" required errorText={errors.id?.message}>
        <Input
          {...register('id')}
          autoComplete="off"
          placeholder="이메일 주소"
        />
      </Field>

      <Field label="비밀번호" required errorText={errors.password?.message}>
        <Input
          {...register('password')}
          type="password"
          autoComplete="off"
          placeholder="비밀번호"
        />
      </Field>
      <Button
        border="1px solid black"
        type="submit"
        w="100%"
        mt="40px"
        onClick={onSubmit}
        loading={isPending}
        disabled={!isDirty || !isValid}
      >
        로그인
      </Button>
    </Box>
  )
}

export default LoginForm
