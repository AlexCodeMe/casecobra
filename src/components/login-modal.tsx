import React, { Dispatch, SetStateAction } from 'react'

type Props = {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function LoginModal({
    isOpen,
    setIsOpen
}: Props) {
  return (
    <div>LoginModal</div>
  )
}