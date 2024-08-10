import { FC } from 'react'
import { IModalFooterProps } from 'shared/ui/modal/model/interface'
import { StyledModalFooter } from 'shared/ui/modal/model/styles'

export const ModalFooter: FC<IModalFooterProps> = ({ children, ...rest }) => {
  return (
    <StyledModalFooter className={'modal-footer'} {...rest}>
      {children}
    </StyledModalFooter>
  )
}
