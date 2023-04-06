import { Autocomplete, AutocompleteProps } from '@mui/material'

export interface PMAutocompleteProps<
T, 
Multiple extends boolean | undefined, 
DisableClearable extends boolean | undefined, 
FreeSolo extends boolean | undefined
> extends AutocompleteProps<T, Multiple, DisableClearable, FreeSolo> {}

export const PMAutocomplete = <T, Multiple, DisableClearable, FreeSolo>({ ...props}:PMAutocompleteProps<
T, 
Multiple extends boolean | undefined ? any : any, 
DisableClearable extends boolean | undefined ? any : any, 
FreeSolo extends boolean | undefined ? any : any>
): JSX.Element => {
  return (
    <Autocomplete {...props} />
  )
}
