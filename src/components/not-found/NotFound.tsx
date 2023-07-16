import React from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'

type TProps = {
  isShown: boolean
}

export const NotFound: React.FC<TProps> = ({ isShown }) => {
  return !isShown ? null : (
    <Box sx={{ width: '100%', maxWidth: 500, margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom align="center">
        Nothing was found 🤷‍♂️
      </Typography>
    </Box>
  )
}
