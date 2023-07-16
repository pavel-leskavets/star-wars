import React from 'react'
import { Backdrop, CircularProgress } from '@mui/material'

type TProps = {
  isShown: boolean
}

export const ProgressBar: React.FC<TProps> = ({ isShown }) => (
  <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={isShown}
  >
    <CircularProgress size={60} />
  </Backdrop>
)
