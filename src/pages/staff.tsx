import { Box } from '@mui/material'
import type { GetStaticProps, NextPage } from 'next'
import { PageHeading } from 'src/components/atoms'
import { Layout } from 'src/components/commons'
import { StaffCardList } from 'src/components/organisms/StaffCardList'
import { staff } from 'src/modules/staff'
import { Colors } from 'src/styles/color'

export const Page: NextPage = () => {
  return (
    <Layout>
      <PageHeading>Staff</PageHeading>
      <Box sx={{ backgroundColor: Colors.background.secondary, py: { xs: '40px', md: '80px' } }}>
        <StaffCardList staff={staff} />
      </Box>
    </Layout>
  )
}

// NOTE: next exportで静的ファイルとして生成するため空のpropsを宣言する
export const getStaticProps: GetStaticProps = async () => {
  return { props: {} }
}

export default Page
