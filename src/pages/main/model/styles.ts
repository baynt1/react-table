import { Box, styled } from '@mui/material'

export const StyledMainContainer = styled(Box)(() => ({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#2F4B6A',
}))

export const StyledMainBox = styled(Box)(({ theme }) => ({
  width: '80%',
  height: '80%',
  borderRadius: 5,
  padding: 10,
  background: theme.palette.common.white,
  display: 'flex',
  gap: '20px',
  flexDirection: 'column',
}))
