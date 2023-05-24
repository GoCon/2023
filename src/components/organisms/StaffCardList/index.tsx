import Grid from '@mui/material/Unstable_Grid2'
import { FC } from 'react'
import { StaffCard } from 'src/components/molecules/StaffCard'
import { StaffInfo } from 'src/modules/staff'

type Props = {
  staff: StaffInfo[]
}

export const StaffCardList: FC<Props> = ({ staff }) => {
  return (
    <Grid container spacing={4} sx={{ maxWidth: '1024px', margin: '0 auto' }}>
      {staff.map(({ name, icon, organizationName, twitterLink, githubLink, otherLink }, i) => (
        <Grid key={i} xs={12} sm={6} lg={4} sx={{ display: 'flex' }}>
          <StaffCard
            name={name}
            icon={icon}
            organizationName={organizationName}
            twitterLink={twitterLink}
            githubLink={githubLink}
            otherLink={otherLink}
          />
        </Grid>
      ))}
    </Grid>
  )
}
