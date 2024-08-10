import { Control, FieldValues } from 'react-hook-form'

export interface IFormItemProps {
  control: Control<FieldValues, any>
  name: string
  label?: string
  required?: boolean
}
