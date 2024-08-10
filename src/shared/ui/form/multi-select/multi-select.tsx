import { FC } from 'react'
import { useController } from 'react-hook-form'
import { IFormItemProps } from 'shared/ui/form/model/interface'

import { MenuItem, Select } from '@mui/material'

export const MultiSelect: FC<IFormItemProps & { options: { label: string; value: number }[] }> = ({
  control,
  name,
  label,
  required = false,
  options,
}) => {
  const {
    field: { ref, ...restfield },
  } = useController({
    name,
    control,
    rules: { required: required },
  })

  return (
    <Select {...restfield} inputRef={ref} size={'small'} required={required} multiple={true}>
      {options.map((item) => {
        return (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        )
      })}
    </Select>
  )
}
