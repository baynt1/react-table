import { FC } from 'react'
import { IBaseModalProps } from 'shared/ui/modal/model/interface'
import { StyledContent, StyledModal, StyledToggle } from 'shared/ui/modal/model/styles'

import CloseIcon from '@mui/icons-material/CloseRounded'
import { Backdrop, Fade, Modal, Slide } from '@mui/material'

export const BaseModal: FC<IBaseModalProps> = ({
  variant = 'right',
  handleToggle,
  isOpen,
  children,
  ...rest
}) => {
  const AnimationComponent = variant === 'right' ? Slide : Fade

  return (
    <Modal
      open={isOpen}
      onClose={() => handleToggle()}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
      {...rest}
    >
      <AnimationComponent direction={variant === 'right' ? 'left' : undefined} in={isOpen}>
        <StyledModal className={'base-modal'} variant={variant}>
          <StyledToggle onClick={handleToggle}>
            <CloseIcon />
          </StyledToggle>
          <StyledContent className={'base-modal-content'}>{children}</StyledContent>
        </StyledModal>
      </AnimationComponent>
    </Modal>
  )
}
