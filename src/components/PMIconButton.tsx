import { IconButton, IconButtonProps } from '@mui/material'
import React from 'react'

export const PMIconButton = ({children, ...props}: IconButtonProps) => {
  return (
    <IconButton {...props}>{children}</IconButton>
  )
}
