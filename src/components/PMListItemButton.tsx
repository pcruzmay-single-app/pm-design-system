import { ExtendButtonBase, ListItemButton, ListItemButtonTypeMap } from '@mui/material'
import React from 'react'

interface PMListItemButtonProps {
    props: ExtendButtonBase<ListItemButtonTypeMap<{}, "div">>;
    children: JSX.Element
}

export const PMListItemButton = ({children, ...props}:PMListItemButtonProps) => {
  return (
    <ListItemButton {...props}>{children}</ListItemButton>
  )
}
