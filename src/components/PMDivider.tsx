import { Divider, DividerTypeMap } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'

export const PMDivider = ({...props}: {props: OverridableComponent<DividerTypeMap<{}, "hr">>}) => {
  return (
    <Divider {...props} />
  )
}
