import { Box, BoxProps } from '@mui/material'

export const PMBox = ({children, ...props}: BoxProps) => {
  return (
    <Box {...props}>{children}</Box>
  )
}
