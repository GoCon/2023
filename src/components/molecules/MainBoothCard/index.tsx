import { Typography, Box } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Button } from 'src/components/atoms'
import { replaceUrlWithLink } from 'src/modules/util/text'

const description =
  '「platinum"Go"ld」「"Go"ld」「Silver」スポンサーのパートナー企業さまのブースとコミュニティのブースがあり、企業紹介、クイズ、ハンズオンなどさまざまなコンテンツを準備していただいております。\n' +
  'お気軽にご参加いただき、お楽しみください。\n' +
  '「ビンGo」ゲームの問題も各企業さまに出題頂いております。各ブースを周って回答を聞いてみましょう！\n' +
  '他には、Goに関わる書籍や記事を集めた「Go Books」やGoのユーザー企業、OSS、コミュニティの情報を集めた「Go Users」もあります。\n' +
  '参加者が自由にホワイトボード（Miro）で情報を共有できるようになっています。\n' +
  '商業誌に限らず本を執筆されてる方、Goを使ってる事を知ってほしい企業のみなさま、コミュニティやOSSの宣伝などにご活用ください。\n' +
  '何か不明点等あれば、Main会場内にある運営ブースにお越しください。\n'

export const MainBoothCard = () => {
  const { t } = useTranslation()
  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} py={4}>
      <Typography variant="h3">Main</Typography>
      <Typography
        variant="body2"
        sx={{ mb: '24px', maxWidth: '680px', wordBreak: 'break-word', whiteSpace: 'pre-wrap' }}
      >
        {replaceUrlWithLink(description)}
      </Typography>
      <a href="https://bin.gocon.jp/" target="_blank">
        <Button text={t('bingo')} />
      </a>
      <Typography variant="caption" sx={{ my: '8px' }}>
        {`※ ${t('need_connpass_number')}`}
      </Typography>
    </Box>
  )
}
