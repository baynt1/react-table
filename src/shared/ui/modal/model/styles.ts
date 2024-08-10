import { IBaseModalProps } from 'shared/ui/modal/model/interface'

import { Box, styled } from '@mui/material'
import { BoxProps } from '@mui/material/Box/Box'

export const StyledModal = styled(Box)<BoxProps & Pick<IBaseModalProps, 'variant'>>(
  ({ theme, variant }) => ({
    position: 'absolute' as const,
    top: variant === 'center' ? '50%' : '0',
    left: variant === 'center' ? '50%' : 'unset',
    right: variant === 'center' ? 'unset' : '0',
    transform: variant === 'center' ? 'translate(-50%, -50%)' : 'none',
    minWidth: '30vw',
    maxWidth: variant === 'center' ? '35vw' : '70vw',
    height: variant === 'center' ? 'auto' : '100%',
    borderRadius: '5px',
    background: theme.palette.background.paper,
    outline: 'none',
    minHeight: variant === 'center' ? '70px' : 'auto',
    [theme.breakpoints.down('sm')]: {
      minWidth: '90vw',
    },
  }),
)

export const StyledToggle = styled(Box)(({ theme }) => ({
  display: 'grid',
  placeContent: 'center',
  position: 'absolute',
  top: '15px',
  left: '-30px',
  width: '30px',
  height: '30px',
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  cursor: 'pointer',
  borderRadius: '5px 0 0 5px',
}))

export const StyledContent = styled(Box)(() => ({
  overflow: 'auto',
  maxHeight: '100%',
  padding: '14px',
}))

export const StyledModalFooter = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  padding: '10px 14px',
  background: theme.palette.background.paper,
  borderRadius: '0 0 8px 8px',
  minHeight: '54px',
  display: 'flex',
  alignItems: 'center',
  columnGap: '10px',
  zIndex: '10',
}))
