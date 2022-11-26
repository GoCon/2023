import React from 'react'
import { ButtonBase, Typography } from '@mui/material'
import { Colors } from 'src/styles/color'

type ButtonProps = {
  text: string
  width?: string | number
  onClick?: () => void
}

export const Button = ({ text, width = '370px', onClick }: ButtonProps) => {
  return (
    <ButtonBase
      sx={{
        hight: '54px',
        width,
        borderRadius: '100px',
        background: Colors.button.primary.enabled,
        px: '24px',
        py: '16px'
      }}
      onClick={onClick}
    >
      <Typography fontSize="16px" sx={{ color: Colors.button.primary.text }}>
        {text}
      </Typography>
    </ButtonBase>
  )
}
