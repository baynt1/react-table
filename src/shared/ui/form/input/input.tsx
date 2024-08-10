import { FC } from 'react'
import { useController } from 'react-hook-form'
import { IFormItemProps } from 'shared/ui/form/model/interface'

import { TextField } from '@mui/material'

export const Input: FC<IFormItemProps> = ({ control, name, label, required = false }) => {
  const {
    field: { ref, ...restfield },
  } = useController({
    name,
    control,
    rules: { required: required },
  })

  return (
    <TextField {...restfield} inputRef={ref} size={'small'} label={label} required={required} />
  )
}
