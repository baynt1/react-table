import dayjs from 'dayjs'
import { StyledMainBox, StyledMainContainer } from 'pages/main/model/styles'
import { FC, useEffect, useMemo, useState } from 'react'
import { Outlet, useNavigate } from 'react-router'
import { useGetUsersQuery } from 'shared/api/users/users-query'
import { useAppDispatch } from 'shared/redux/store'
import { setUserTable } from 'shared/redux/users/users-slice'
import Table from 'shared/ui/table/table'

import { Box, Button } from '@mui/material'

export const MainPage: FC = () => {
  const navigate = useNavigate()
  const getUsers = useGetUsersQuery({})
  const dispatch = useAppDispatch()
  const [data, setData] = useState([])

  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'Индификатор',
      },
      {
        accessorKey: 'firstName',
        header: 'Имя',
      },
      {
        accessorKey: 'lastName',
        header: 'Фамилия',
      },
      {
        accessorKey: 'email',
        header: 'Почта',
      },
      {
        accessorKey: 'birthDate',
        header: 'Дата',
      },
      {
        accessorKey: 'bank',
        header: 'Масив',
      },
    ],
    [],
  )

  useEffect(() => {
    if (getUsers.isSuccess) {
      setData(
        getUsers.data.users.map((item) => {
          const user = {
            id: item.id,
            firstName: item.firstName,
            lastName: item.lastName,
            email: item.email,
            birthDate: dayjs(item.birthDate),
            bank: Array.isArray(item.bank) ? item.bank : [],
          }

          return {
            ...user,
            firstName: (
              <Box
                sx={{ color: 'primary.main', cursor: 'pointer' }}
                onClick={() => {
                  dispatch(setUserTable(user))
                  navigate(`/${item.id}`)
                }}
              >
                {item.firstName}
              </Box>
            ),
            birthDate: dayjs(item.birthDate).format('YYYY-MM-DD'),
          }
        }),
      )
    }
  }, [getUsers.isFetching])

  return (
    <>
      <StyledMainContainer>
        <StyledMainBox>
          <Button
            variant={'contained'}
            onClick={() => navigate('create')}
            sx={{ width: 'fit-content' }}
          >
            Добавить
          </Button>

          <Box
            sx={{
              height: 'calc(100% - 60px)',
              '& .MuiPaper-root': { height: '100%', overflow: 'auto' },
            }}
          >
            <Table data={data} columns={columns} />
          </Box>
        </StyledMainBox>
      </StyledMainContainer>

      <Outlet />
    </>
  )
}
