import React from 'react'
import Box from '@mui/material/Box'
import { ImageListItem, Link } from '@mui/material'

export const Header = () => (
  <Box
    sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      flexGrow: 1,
      width: '100%',
      height: '60px',
      padding: '8px 16px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'rgb(36, 37, 38)',
      zIndex: 2,
    }}
  >
    <ImageListItem sx={{ maxWidth: '80px' }}>
      <img src="/star-wars-logo.png" alt="logo" />
    </ImageListItem>

    <Link
      href="https://github.com/pavel-leskavets/star-wars"
      target="_blank"
      underline="none"
    >
      Source code
    </Link>
  </Box>
)
