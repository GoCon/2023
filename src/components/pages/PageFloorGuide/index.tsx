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
        'こんにちは！　京都のほうから来ましたKyoto.goです！\nオンラインでのLT会やもくもく会などを月1回のペースで開催しています。\n今回、Kyoto.goではランチタイムにLT大会を開催します。1人3分のスーパーライトニングトーク形式を予定しています（発表者はconnpassでの事前募集枠と当日飛び入り参加枠で募集しています）。発表の合間には参加者同士の雑談タイムを設けて、Gopher同士でワイワイとGoの知見を深め合える時間をご提供します。\nなお、発表者の方にはKyoto.go特製GopherくんNFT (Non-Fungible Token) を配布予定です。（ガス代は不要です！）\nオンライン開催を始めて以来、Kyoto.goは「京都は概念」を合言葉に全国・全世界からご参加をいただいております。全世界のGopherの皆様、どうぞお気軽にお越しください。'
    },
    {
      title: 'Gopherラジオ',
      description:
        'Go のアプリケーションについて、設計について話し合ったり、開発をモブプログラミングで進めたりします。参加者は聞くだけも OK！参加しても OK！わいわい楽しいコミュニティブースです。'
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
        {boothItems.map((item, i) => (
          <BoothCard key={i} title={item.title} description={item.description} />
        ))}
      </Box>
    </Layout>
  )
}
