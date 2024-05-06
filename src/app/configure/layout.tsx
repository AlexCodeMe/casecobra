import MaxWidthWrapper from '@/components/max-width-wrapper'
import Steps from '@/components/steps'
import React from 'react'

export default function ConfigureLayout({ children }: { children: React.ReactNode }) {
  return (
    <MaxWidthWrapper className='flex-1 flex flex-col'>
       <Steps />
      {children}
    </MaxWidthWrapper>
  )
}
