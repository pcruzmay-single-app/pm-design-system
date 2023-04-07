import { AppBar, AppBarProps } from '@mui/material'

export const PMAppBar = ({children, ...props}: AppBarProps) => {
  return (
    <AppBar {...props}>{children}</AppBar>
  )
}
