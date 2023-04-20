import { ListItemText, ListItemTextProps } from '@mui/material'

interface PMListItemTextProps {
    props: <PrimaryTypographyComponent extends React.ElementType = "span",
    SecondaryTypographyComponent extends React.ElementType = "p">(props: ListItemTextProps<PrimaryTypographyComponent, 
        SecondaryTypographyComponent>) => JSX.Element

}

export const PMListItemText = ({...props}: PMListItemTextProps) => {
  return (
    <ListItemText {...props} />
  )
}
