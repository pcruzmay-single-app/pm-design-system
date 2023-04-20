import { ListItem, ListItemBaseProps } from '@mui/material'
import { CommonProps, OverridableComponent, OverridableTypeMap } from '@mui/material/OverridableComponent';

type T = any
type K = any
type M = any

interface PMListItem {
    listItem: ((props: {
        href: string;
    } & {
        button: true;
    } & ListItemBaseProps & {
        components?: {
            Root?: React.ElementType;
        };
        componentsProps?: {
            root?: any;
        };
        slotProps?: {
            root?: any;
        };
        slots?: {
            root?: React.ElementType;
        };
    }) => JSX.Element);
    children: JSX.Element
}


export const PMListItem = ({children, ...listItem}: PMListItem) => {
  return (
    <ListItem {...listItem}>{children}</ListItem>
  )
}
