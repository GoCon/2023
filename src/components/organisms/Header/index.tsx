import React from 'react'
import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import { Colors } from 'src/styles/color'

export const Header = () => {
  return (
    <AppBar position='static' sx={{ backgroundColor: Colors.background.gopher_blue }}>
      <Toolbar disableGutters sx={{ marginLeft: '10px' }}>
        <Typography
          variant='h6'
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Go Conference 2023
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
