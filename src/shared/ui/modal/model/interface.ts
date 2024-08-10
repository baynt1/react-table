import { ReactNode } from 'react'

import { ModalProps } from '@mui/material'
import { BoxProps } from '@mui/material/Box/Box'

type TOmit = 'onClose' | 'open' | 'children'

export interface IBaseModalProps extends Omit<ModalProps, TOmit> {
  variant?: 'right' | 'center'
  handleToggle: () => void
  isOpen: boolean
  children?: ReactNode
}

export interface IModalFooterProps extends BoxProps {
  children?: ReactNode
}
