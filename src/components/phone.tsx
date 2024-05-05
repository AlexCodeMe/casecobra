import { cn } from '@/lib/utils'
import { flightRouterStateSchema } from 'next/dist/server/app-render/types'
import React, { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string
  dark?: boolean
}

export default function Phone({
  imgSrc,
  className,
  dark = false,
  ...props
}: Props) {
  return (
    <div {...props}
      className={cn(
        'relative pointer-events-none z-50 overflow-hidden',
        className
      )}>
      <img src={
          dark  
            ? '/phone-template-dark-edges.png'
            : '/phone-template-white-edges.png' 
        }
        alt='phone image'
        className='pointer-events-none z-50 select-none' />

      <div className='absolute -z-10 inset-0'>
        <img src={imgSrc}
          alt='phone overlay'
          className='object-cover min-w-full min-h-full' />
      </div>
    </div>
  )
}