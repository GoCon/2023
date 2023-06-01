import { Typography } from '@mui/material'
import { FC, ReactNode } from 'react'

export const PageHeading: FC<{ children: ReactNode; textAlign?: 'center' | 'left' }> = ({
  children,
  textAlign = 'center'
}) => {
  return (
    <Typography
      variant="h1"
      sx={{
        textAlign: textAlign,
        marginTop: { xs: '80px', sm: '160px' },
        marginBottom: { xs: '32px', sm: '72px' }
      }}
    >
      {children}
    </Typography>
  )
}
