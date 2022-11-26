import React from 'react'
import { ButtonBase, Typography } from '@mui/material'
import { Colors } from 'src/styles/color'

type ButtonProps = {
  text: string
  width?: string | number
  onClick?: () => void
}

export const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <ButtonBase
      sx={{
        hight: '54px',
        minWidth: { md: '360px', xs: '280px' },
        borderRadius: '100px',
        p: '16px 24px',
        backgroundColor: Colors.button.primary.enabled
      }}
      onClick={onClick}
    >
      <Typography fontSize="16px" sx={{ color: Colors.button.primary.text }}>
        {text}
      </Typography>
    </ButtonBase>
  )
}
