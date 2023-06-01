import { Box, Typography } from '@mui/material'
import type { NextPage } from 'next'
import { useTranslation } from 'react-i18next'
import { Layout } from 'src/components/commons'
import { Colors } from 'src/styles/color'
import { BoothCard } from 'src/components/molecules'
import { VenueInfoSection } from 'src/components/organisms'

type boothItem = {
  title: string
  description: string
}

export const PageFloorGuide: NextPage = () => {
  const { t } = useTranslation()
  const boothItems: boothItem[] = [
    {
      title: 'Kyoto.go LT & 雑談会場 「畳」',
      description:
        'こんにちは！　京都のほうから来ましたKyoto.goです！　普段はオンラインでのLT会、もくもく会などを月1回のペースで開催しています。 (https://kyotogo.connpass.com/) \n\nKyoto.goのコミュニティブースでは、15:00の休憩時間にアンカンファレンスを開催します。Gopher同士で気になる話題を持ち寄って、ワイワイとGoの知見を深め合える時間をご提供します。\nまた、ブースではKyoto.go特製GopherくんNFT (Non-Fungible Token) を配布予定です。（ガス代は不要です！）\n\nオンライン開催を始めて以来、Kyoto.goは「京都は概念」を合言葉に全国・全世界からご参加をいただいております。全世界のGopherの皆様、どうぞお気軽にお越しください。'
    },
    {
      title: 'Gopherラジオ',
      description:
        'Go のアプリケーションについて、設計について話し合ったり、開発をモブプログラミングで進めたりします。参加者は聞くだけも OK！参加しても OK！わいわい楽しいコミュニティブースです。\n\n12:00 - 13:00 Go の歴史と変遷 Looking back on history of Go\n13:50 - 14:50 Go の開発について語ろう How do you develop in Go ?\n15:00 - 16:00 ChatGPT は良い Go のコードを書けるのか !? Get ChatGPT to write Go !?'
    },
    {
      title: 'Umeda.go + TinyGo ',
      description:
        '本ブースでは、 TinyGo の組込ハンズオンとしてシンプルな自作キーボードの作成を行います。基本的には Wio Terminal (https://akizukidenshi.com/catalog/g/gM-15275/) を使って説明しますが、それ以外の TinyGo で遊べるマイコン (https://sago35.hatenablog.com/entry/2023/02/13/220248) のうち samd51 / rp2040 / nrf52840 を搭載したマイコンであれば使用可能です。キーボードとして使いたいので、何らかのボタンを持っているか、外付けできたほうが良いです。\nUmeda.go は、プログラミング言語 Go に関するテックトークなどのイベントをやっています。名前が示す通り、大阪を中心として活動しています。技術レベル・知識を問わず、Goを学びたい人が気軽に相談できるコミュニティ を目指しています。イベントアカウントをフォローしておくと、随時イベント情報をお知らせいたします。\nhttps://twitter.com/umedago'
    }
  ]

  return (
    <Layout>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'} py={{ md: 10, xs: 4 }} px="24px" mt="100px">
        <Typography variant="h2">{t('floor_guide_title')}</Typography>
        <VenueInfoSection />
        <Box
          width="80%"
          height="8px"
          sx={{ margin: '40px', borderRadius: '4px', backgroundColor: Colors.background.secondary }}
        />
        <Typography variant="h2">{t('booth_information_title')}</Typography>
        {boothItems.map(({ title, description }, i) => (
          <BoothCard key={i} title={title} description={description} />
        ))}
      </Box>
    </Layout>
  )
}
