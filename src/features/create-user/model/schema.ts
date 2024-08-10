import * as yup from 'yup'

export const useUserSchema = () => {
  const createUser = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required(),
    birthDate: yup.string().required(),
    bank: yup.array(),
  })

  return { createUser }
}
