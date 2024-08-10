import { FC } from 'react'
import { useController } from 'react-hook-form'
import { IFormItemProps } from 'shared/ui/form/model/interface'

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'

export const Date: FC<IFormItemProps> = ({ control, name, label, required = false }) => {
  const {
    field: { ref, ...restfield },
  } = useController({
    name,
    control,
    rules: { required: required },
  })

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']} sx={{ width: '100%' }}>
        <DatePicker {...restfield} inputRef={ref} label={label} sx={{ width: '100%' }} />
      </DemoContainer>
    </LocalizationProvider>
  )
}
