import { ExtendList, List, ListTypeMap } from '@mui/material'

interface ListProps {
    props: ExtendList<ListTypeMap<{}, "ul">>
    children: JSX.Element
}

export const PMList = ({children, ...props}: ListProps) => {
  return (
    <List {...props}>{children}</List>
  )
}
