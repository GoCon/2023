import { Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { type FC } from 'react'
import Image from 'next/image'
import { Colors } from 'src/styles/color'
import { Twitter as TwitterIcon, GitHub as GitHubIcon, Link as LinkIcon } from '@mui/icons-material'
import { type StaffInfo } from 'src/modules/staff'

type Props = StaffInfo

export const StaffCard: FC<Props> = ({ name, icon, organizationName, twitterLink, githubLink, otherLink }) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        flexDirection: { xs: 'row', sm: 'column' },
        justifyContent: { xs: 'flex-start', sm: 'center' },
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: Colors.background.primary,
        p: 3,
        borderRadius: '20px'
      }}
    >
      <Grid>
        <Image
          src={icon}
          alt={`${name}'s icon`}
          width={120}
          height={120}
          style={{ objectFit: 'contain', borderRadius: '50%' }}
          unoptimized
        />
      </Grid>
      <Grid sx={{ flexGrow: 1, display: 'grid', placeContent: 'center', gap: 3 }}>
        <Grid sx={{ display: 'flex', flexDirection: 'column', gap: 1, textAlign: 'center' }}>
          <Typography variant="h4">{name}</Typography>
          {organizationName && (
            <Typography variant="subtitle1" sx={{ color: Colors.text.secondary }}>
              {organizationName}
            </Typography>
          )}
        </Grid>
        <Grid sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          {twitterLink && (
            <a href={twitterLink} target="_blank">
              <TwitterIcon sx={{ color: Colors.text.primary, ':hover': { color: Colors.text.secondary } }} />
            </a>
          )}
          {githubLink && (
            <a href={githubLink} target="_blank">
              <GitHubIcon sx={{ color: Colors.text.primary, ':hover': { color: Colors.text.secondary } }} />
            </a>
          )}
          {otherLink && (
            <a href={otherLink} target="_blank">
              <LinkIcon sx={{ color: Colors.text.primary, ':hover': { color: Colors.text.secondary } }} />
            </a>
          )}
        </Grid>
      </Grid>
    </Grid>
  )
}
