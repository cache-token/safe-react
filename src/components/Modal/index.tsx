import Modal from '@material-ui/core/Modal'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import cn from 'classnames'
import React, { ReactElement, ReactNode } from 'react'

import { sm } from 'src/theme/variables'

const useStyles = makeStyles(
  createStyles({
    root: {
      alignItems: 'center',
      flexDirection: 'column',
      display: 'flex',
      overflowY: 'scroll',
    },
    paper: {
      position: 'relative',
      top: '68px',
      width: '500px',
      borderRadius: sm,
      backgroundColor: '#ffffff',
      boxShadow: '0 0 5px 0 rgba(74, 85, 121, 0.5)',
      '&:focus': {
        outline: 'none',
      },
      display: 'flex',
      flexDirection: 'column',
    },
  }),
)

interface GnoModalProps {
  children: ReactNode
  description: string
  // type copied from Material-UI Modal's `close` prop
  handleClose?: (event: Record<string, unknown>, reason: 'backdropClick' | 'escapeKeyDown') => void
  modalClassName?: string
  open: boolean
  paperClassName?: string
  title: string
}

const GnoModal = ({
  children,
  description,
  handleClose,
  modalClassName,
  open,
  paperClassName,
  title,
}: GnoModalProps): ReactElement => {
  const classes = useStyles()

  return (
    <Modal
      aria-describedby={description}
      aria-labelledby={title}
      className={cn(classes.root, modalClassName)}
      onClose={handleClose}
      open={open}
    >
      <div className={cn(classes.paper, paperClassName, 'classpep')}>{children}</div>
    </Modal>
  )
}

export default GnoModal
