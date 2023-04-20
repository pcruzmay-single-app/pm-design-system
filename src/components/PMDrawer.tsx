import { Drawer, DrawerProps } from '@mui/material'

export const PMDrawer = ({children, ...props}: DrawerProps) => {
  return (
    <Drawer {...props}>{children}</Drawer>
  )
}
