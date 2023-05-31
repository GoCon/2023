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
      title: 'Main',
      description:
        '「platinum"Go"ld」「"Go"ld」「Silver」スポンサーのパートナー企業さまのブースとコミュニティのブースがあり、企業紹介、クイズ、ハンズオンなどさまざまなコンテンツを準備していただいております。\n' +
        'お気軽にご参加いただき、お楽しみください。\n' +
        '「ビンGo」ゲームの問題も各企業さまに出題頂いております。各ブースを周って回答を聞いてみましょう！\n' +
        '他には、Goに関わる書籍や記事を集めた「Go Books」やGoのユーザー企業、OSS、コミュニティの情報を集めた「Go Users」もあります。\n' +
        '参加者が自由にホワイトボード（Miro）で情報を共有できるようになっています。\n' +
        '商業誌に限らず本を執筆されてる方、Goを使ってる事を知ってほしい企業のみなさま、コミュニティやOSSの宣伝などにご活用ください。\n' +
        '何か不明点等あれば、Main会場内にある運営ブースにお越しください。\n'
    },
    {
      title: 'Room A sponsored by Go inc.',
      description:
        'トークセッションだけではなく、スポンサーセッション、LT、Ask the Speaker、Opening、Closingが行われます。なお、Room Aがいっぱいの場合は、ゲートページに遷移しますので、そこからRoom Aのサテライト会場をご利用ください。\n'
    },
    {
      title: 'Room B sponsored by Kanmu',
      description:
        'トークセッションとAsk the Speakerが行われます。ご興味あるセッションに是非、ご参加ください。なお、Room Bがいっぱいの場合は、ゲートページに遷移しますので、そこからRoom Bのサテライト会場をご利用ください。\n'
    }
  ]

  const communityBoothItems = [
    {
      title: 'Kyoto.go LT & 雑談会場 「畳」',
      description:
        'こんにちは！　京都のほうから来ましたKyoto.goです！\nオンラインでのLT会やもくもく会などを月1回のペースで開催しています。\n今回、Kyoto.goではランチタイムにLT大会を開催します。1人3分のスーパーライトニングトーク形式を予定しています（発表者はconnpassでの事前募集枠と当日飛び入り参加枠で募集しています）。発表の合間には参加者同士の雑談タイムを設けて、Gopher同士でワイワイとGoの知見を深め合える時間をご提供します。\nなお、発表者の方にはKyoto.go特製GopherくんNFT (Non-Fungible Token) を配布予定です。（ガス代は不要です！）\nオンライン開催を始めて以来、Kyoto.goは「京都は概念」を合言葉に全国・全世界からご参加をいただいております。全世界のGopherの皆様、どうぞお気軽にお越しください。'
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

  const contentsItems = [
    {
      title: 'Ask the Speaker',
      description:
        '12時、15時、16時20分、17時30分と開催し、それぞれの回にて複数名の登壇者にご参加いただきます。\nトークセッションの登壇者に直接質問できる機会ですので、是非ご活用ください。\nタイムテーブルは以下のリンクから確認できます。\nhttps://docs.google.com/spreadsheets/d/1hRRkYazKpy4b5DZgSwTx3dV8YEHyjMZPdwiRRQXtrB0/edit#gid=0'
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
        <Box
          width="80%"
          height="8px"
          sx={{ margin: '40px', borderRadius: '4px', backgroundColor: Colors.background.secondary }}
        />
        <Typography variant="h2">{t('community_booth_information_title')}</Typography>
        {communityBoothItems.map(({ title, description }, i) => (
          <BoothCard key={i} title={title} description={description} />
        ))}
        <Box
          width="80%"
          height="8px"
          sx={{ margin: '40px', borderRadius: '4px', backgroundColor: Colors.background.secondary }}
        />
        <Typography variant="h2">{t('contents_information_title')}</Typography>
        {contentsItems.map(({ title, description }, i) => (
          <BoothCard key={i} title={title} description={description} />
        ))}
      </Box>
    </Layout>
  )
}
