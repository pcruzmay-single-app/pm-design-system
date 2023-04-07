import { Toolbar, ToolbarProps } from '@mui/material'

export const PMToolbar = ({children, ...props}: ToolbarProps) => {
  return (
    <Toolbar {...props}>{children}</Toolbar>
  )
}
