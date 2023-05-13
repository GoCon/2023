/**
 * Type for the information of each sponsor.
 */
export type SponsorInfo = {
  id: number // the order of display that is determined by lottery.
  name: string // company name, also as an "alt" for next/image.
  logo: string // path to the logo image.
  description?: string // this is only used for the Platinum "Go"ld and the "Go"ld sponsor's introduction pages.
}

const platinumSponsors: SponsorInfo[] = [
  {
    id: 1,
    name: 'GO株式会社',
    logo: 'sponsors/platinum/01_go.png',
    description:
      'GO株式会社（旧： 株式会社Mobility Technologies）は、JapanTaxi株式会社と、株式会社ディー・エヌ・エーのタクシーアプリ事業などが統合して2020年に誕生しました。「移動で人を幸せに。」をミッションに、交通課題・社会課題の解決を実現するべく、タクシーアプリ『GO』を展開しています。今後も業界において圧倒的なシェアを有する『GO』のさらなる発展のみならず、人材不足や車両のEV化等タクシー業界全体の社会課題解決、またタクシー以外のモビリティ領域でのソリューション提供を推進していきます。'
  },
  {
    id: 2,
    name: '株式会社カンム',
    logo: 'sponsors/platinum/02_kanmu.png',
    description:
      '世界には金融サービスを利用することができないというunbanked層が存在します。 日本ではunbanked層は少ないのですが、面倒、難しい、怖い、不安という気持ちから 様々な金融サービスから距離をとっている心理的unbanked層が多いと感じています。 そんな心理的unbankedを解決するソフトウェアを開発します。'
  }
]

const goldSponsors: SponsorInfo[] = [
  {
    id: 3,
    name: 'MODE, Inc.',
    logo: 'sponsors/gold/03_mode.jpg',
    description:
      'MODEは、B2B向けのIoTプラットフォームを提供しており、シリコンバレーと東京の2拠点で開発を進めています。従来の個別のIoTソリューションと違い、エッジコンピューティング・データ基盤・BIツールまで至る、現実世界とクラウドまでの経路を"フルスタック"な技術で提供しています。エッジコンピューティングのためのシステムプログラミングから、クラウドサイドのプラットフォーム設計・開発まであらゆるレイヤーのソフトウェアの技術を要求されるため、大変ながらも刺激的なサービス提供現場と、手前味噌ながら感じています。'
  },
  {
    id: 4,
    name: 'BASE株式会社',
    logo: 'sponsors/gold/04_base.jpg',
    description:
      'BASE株式会社は「Payment to the People, Power to the People.」をミッションに掲げ、個人やスモールチームに向けて、EC/決済/金融のサービスを展開しています。'
  }
]

const silverSponsors: SponsorInfo[] = [
  { id: 5, name: 'WED株式会社', logo: 'sponsors/silver/05_wed.png' },
  { id: 6, name: '株式会社ビットキー', logo: 'sponsors/silver/06_bitkey.png' },
  { id: 7, name: '株式会社LayerX', logo: 'sponsors/silver/07_layerx.png' },
  { id: 8, name: '株式会社マクアケ', logo: 'sponsors/silver/08_makuake.png' },
  { id: 9, name: '株式会社TVer', logo: 'sponsors/silver/09_tver.jpg' },
  { id: 10, name: '株式会社カウシェ', logo: 'sponsors/silver/10_kauche.jpg' },
  { id: 11, name: 'ウォンテッドリー株式会社', logo: 'sponsors/silver/11_wantedly.png' },
  { id: 12, name: '株式会社カミナシ', logo: 'sponsors/silver/12_kaminashi.png' },
  // { id: 13, name: 'エムスリー株式会社', logo: 'sponsors/silver/13_m3.png' },
  { id: 14, name: '株式会社Voicy', logo: 'sponsors/silver/14_voicy.png' },
  { id: 15, name: '株式会社Kiva', logo: 'sponsors/silver/15_kiva_proteger.png' },
  { id: 16, name: '株式会社ナレッジワーク', logo: 'sponsors/silver/16_knowledge_work.png' },
  { id: 17, name: '株式会社リクルート', logo: 'sponsors/silver/17_recruit.jpg' },
  { id: 18, name: '株式会社ミラティブ', logo: 'sponsors/silver/18_mirrativ.png' },
  { id: 19, name: '株式会社Hacobu', logo: 'sponsors/silver/19_hacobu.png' },
  { id: 20, name: 'ZOZO, Inc.', logo: 'sponsors/silver/20_zozo.jpg' },
  { id: 21, name: 'フラー株式会社', logo: 'sponsors/silver/21_fuller.png' },
  {
    id: 22,
    name: 'matsuri technologies株式会社',
    logo: 'sponsors/silver/22_matsuri_technologies.png'
  },
  { id: 23, name: '株式会社ドワンゴ', logo: 'sponsors/silver/23_dwango.png' },
  { id: 24, name: '株式会社インフキュリオン', logo: 'sponsors/silver/24_infcurion.png' },
  {
    id: 25,
    name: '弁護士ドットコム株式会社',
    logo: 'sponsors/silver/25_bengoshi_com_cloud_sign.png'
  },
  { id: 26, name: '株式会社バニッシュ・スタンダード', logo: 'sponsors/silver/26_vanish_standard.png' },
  { id: 27, name: '株式会社アンドパッド', logo: 'sponsors/silver/27_andpad.png' },
  { id: 28, name: '株式会社ヤプリ', logo: 'sponsors/silver/28_yappli.png' },
  { id: 29, name: '株式会社ハイヤールー', logo: 'sponsors/silver/29_hire_roo.webp' },
  { id: 30, name: '株式会社SODA', logo: 'sponsors/silver/30_soda.jpg' },
  { id: 31, name: '株式会社SocialDog', logo: 'sponsors/silver/31_social_dog.png' },
  { id: 32, name: 'コネヒト株式会社', logo: 'sponsors/silver/32_connehito.png' },
  { id: 33, name: '株式会社マネーフォワード', logo: 'sponsors/silver/33_money_forward.png' },
  { id: 34, name: '株式会社サイバーエージェント', logo: 'sponsors/silver/34_cyber_agent.png' },
  { id: 35, name: '株式会社メルカリ', logo: 'sponsors/silver/35_mercari.png' },
  { id: 36, name: '株式会社Newbees', logo: 'sponsors/silver/36_newbees.png' },
  { id: 37, name: 'ミイダス株式会社', logo: 'sponsors/silver/37_miidas.png' },
  { id: 38, name: '株式会社Gaudiy', logo: 'sponsors/silver/38_gaudiy.png' },
  {
    id: 39,
    name: '株式会社BuySell Technologies',
    logo: 'sponsors/silver/39_buysell_technologies.png'
  },
  { id: 40, name: '株式会社はてな', logo: 'sponsors/silver/40_hatena.png' }
]

const bronzeSponsors: SponsorInfo[] = [
  { id: 41, name: 'テイラー株式会社', logo: 'sponsors/bronze/41_tailor.png' },
  { id: 42, name: '株式会社カオナビ', logo: 'sponsors/bronze/42_kaonavi.png' },
  { id: 43, name: '株式会社ディー・エヌ・エー', logo: 'sponsors/bronze/43_dena.png' },
  { id: 44, name: '株式会社モリサワ', logo: 'sponsors/bronze/44_morisawa.png' },
  { id: 45, name: '株式会社フクロウラボ', logo: 'sponsors/bronze/45_fukurou_labo.jpg' },
  { id: 46, name: '合同会社ザウエル', logo: 'sponsors/bronze/46_zauel.png' },
  { id: 47, name: '株式会社Showcase Gig', logo: 'sponsors/bronze/47_showcase_gig.jpg' },
  { id: 48, name: 'STORES 株式会社', logo: 'sponsors/bronze/48_stores.png' },
  { id: 49, name: '株式会社トレタ', logo: 'sponsors/bronze/49_toreta.png' },
  { id: 50, name: '株式会社MIXI', logo: 'sponsors/bronze/50_mixi.png' },
  { id: 51, name: 'freee株式会社', logo: 'sponsors/bronze/51_freee.png' },
  { id: 52, name: 'and factory株式会社', logo: 'sponsors/bronze/52_and_factory.png' },
  { id: 53, name: '株式会社muneee', logo: 'sponsors/bronze/53_muneee.png' }
]

/**
 * List of all sponsors information (company name, path to logo, description).
 * This assumed with using in the sponsors list and the introduction for each sponsor page.
 */
export const sponsors = {
  platinum: platinumSponsors,
  gold: goldSponsors,
  silver: silverSponsors,
  bronze: bronzeSponsors
}
