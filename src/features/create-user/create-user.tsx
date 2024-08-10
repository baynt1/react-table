import dayjs from 'dayjs'
import { ICreateUserProps } from 'features/create-user/model/interface'
import { useUserSchema } from 'features/create-user/model/schema'
import { optionsArray } from 'features/create-user/model/utils'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useCreateUserMutation } from 'shared/api/users/users-query'
import { Date } from 'shared/ui/form/date'
import { Input } from 'shared/ui/form/input'
import { MultiSelect } from 'shared/ui/form/multi-select'
import { BaseModal } from 'shared/ui/modal'
import { ModalFooter } from 'shared/ui/modal/ui/modal-footer'
import * as yup from 'yup'

import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, Typography } from '@mui/material'

export const CreateUser: FC<ICreateUserProps> = ({ open, handleToggle, defaultValue }) => {
  const { createUser: createUserSchemas } = useUserSchema()
  const methods = useForm({
    defaultValues: defaultValue
      ? defaultValue
      : {
          firstName: '',
          lastName: '',
          email: '',
          birthDate: dayjs(),
          bank: [],
        },
    resolver: yupResolver(createUserSchemas),
  })

  const [createUser] = useCreateUserMutation()

  const handleSubmit = async (data: yup.InferType<typeof createUserSchemas>) => {
    try {
      await createUser({ ...data, birthDate: dayjs(data.birthDate).format('YYYY-MM-DD') }).then(
        () => handleToggle(),
      )
    } catch (error) {
      console.error('Failed to create user:', error)
    }
  }

  return (
    <BaseModal handleToggle={handleToggle} isOpen={open}>
      <Typography variant={'h6'} sx={{ marginBottom: '10px' }}>
        {defaultValue ? 'Редактирование пользователя' : 'Новый пользователь'}
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
        <Input control={methods.control} name={'firstName'} label={'Имя'} required={true} />
        <Input control={methods.control} name={'lastName'} label={'Фамилия'} />
        <Input control={methods.control} name={'email'} label={'Почта'} />
        <Date control={methods.control} name={'birthDate'} label={'Дата'} required={true} />
        <MultiSelect control={methods.control} name={'bank'} options={optionsArray} />
      </Box>

      <ModalFooter>
        <Button variant={'contained'} onClick={methods.handleSubmit(handleSubmit)}>
          {defaultValue ? 'Изменить' : 'Создать'}
        </Button>
      </ModalFooter>
    </BaseModal>
  )
}
