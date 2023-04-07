import { Typography, TypographyProps } from '@mui/material'

export const PMTypography = ({children, ...props}: TypographyProps) => {
  return (
    <Typography {...props}>{children}</Typography>
  )
}
