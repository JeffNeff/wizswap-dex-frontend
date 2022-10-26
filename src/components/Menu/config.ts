import { MenuEntry } from '@wizswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://wizswap.net',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: '/',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  // {
  //   label: 'Farms',
  //   icon: 'FarmIcon',
  //   href: '/farms',
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://wizswap.finance/lottery',
  // },
  // {
  //   label: 'IWO',
  //   icon: 'PoolIcon',
  //   href: 'https://wizswap.finance/iwo',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'WizSwap',
        href: 'https://info.wizswap.finance/token/0xDa3fbBe2249E6C08b7b51e6bAd7A6Aa27219316e',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/wizswap/',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/wizswap/',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/wizswap/',
      },
      // {
      //   label: 'Docs',
      //   href: 'https://goosedefi.gitbook.io/wiz/',
      // },
      // {
      //   label: 'Blog',
      //   href: 'https://wizswap.medium.com/',
      // },
    ],
  },
  // {
  //   label: 'Partnerships/IWO',
  //   icon: 'IfoIcon',
  //   href:
  //     'https://google.com',
  // },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'ShieldIcon',
  //   href: 'https://certik.org/projects/wiz/',
  // },
]

export default config
