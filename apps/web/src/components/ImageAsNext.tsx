import { Ref, forwardRef, memo } from 'react'

import Image from 'next/image'
import { ImageProps } from 'next/image'

import { Box, BoxProps, useControllableState } from '@chakra-ui/react'

import { Skeleton } from '@/components/ui/skeleton'

export interface ImageAsNextProps extends Omit<BoxProps, 'fill'> {
  src: ImageProps['src']
  alt: ImageProps['alt']
  fill?: boolean
  loader?: ImageProps['loader']
  quality?: ImageProps['quality']
  priority?: ImageProps['priority']
  loading?: ImageProps['loading']
  placeholder?: ImageProps['placeholder']
  blurDataURL?: ImageProps['blurDataURL']
  unoptimized?: ImageProps['unoptimized']
  onLoad?: ImageProps['onLoad']
  onError?: ImageProps['onError']
  sizes?: ImageProps['sizes']
  isDisabledSkeleton?: boolean
  isLoading?: boolean
}

const ImageAsNext = forwardRef(function ImageAsNext(
  {
    src,
    alt,
    fill = true,
    loader,
    quality,
    priority = false,
    loading,
    placeholder,
    blurDataURL,
    unoptimized,
    onLoad,
    onError,
    sizes = 'auto',
    isLoading,
    isDisabledSkeleton,
    ...props
  }: ImageAsNextProps,
  ref: Ref<HTMLImageElement>,
) {
  const [_isLoading, setIsLoading] = useControllableState({
    value: isLoading,
    defaultValue: true,
  })

  const isShowSkelton = !isDisabledSkeleton && _isLoading

  return (
    <Box position="relative" overflow="hidden" objectFit="contain" {...props}>
      <Skeleton
        w="100%"
        h="100%"
        position="absolute"
        objectFit="inherit"
        objectPosition="inherit"
        loading={!isShowSkelton}
      >
        <Image
          ref={ref}
          src={src}
          alt={alt}
          fill={fill}
          loader={loader}
          quality={quality}
          priority={priority}
          loading={loading}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          unoptimized={unoptimized}
          onLoad={(t) => {
            setIsLoading(false)
            onLoad?.(t)
          }}
          onError={(t) => {
            setIsLoading(false)
            onError?.(t)
          }}
          sizes={sizes}
          style={{
            objectFit: 'inherit',
            objectPosition: 'inherit',
          }}
        />
      </Skeleton>
    </Box>
  )
})

export default memo(ImageAsNext)
