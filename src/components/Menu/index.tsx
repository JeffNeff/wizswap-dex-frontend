import React, { useContext } from 'react'
import { Menu as UikitMenu, ConnectorId } from '@wizswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import { allLanguages } from 'constants/localisation/languageCodes'
import { LanguageContext } from 'hooks/LanguageContext'
import useTheme from 'hooks/useTheme'
import useGetPriceData from 'hooks/useGetPriceData'
// import useGetLocalProfile from 'hooks/useGetLocalProfile'
import { injected, walletconnect } from 'connectors'
import links, { socials } from './config'

const Menu: React.FC = (props) => {
  const { account, activate, deactivate } = useWeb3React()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const priceData = useGetPriceData()

  const wizAddress = '0x6EefAABDA2c1405eeE7020b6520B7e32d700A3bb'
  const cakePriceUsd = priceData && priceData.data && priceData.data[wizAddress] ? Number(priceData.data[wizAddress].price) : Number(0)
  // const profile = useGetLocalProfile()

  return (
    <UikitMenu
      links={links}
      socials={socials}
      account={account as string}
      login={(connectorId: ConnectorId) => {
        if (connectorId === 'walletconnect') {
          return activate(walletconnect)
        }

        return activate(injected)
      }}
      logout={deactivate}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage?.code || ''}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      cakePriceUsd={cakePriceUsd}
      cakePriceLink="https://www.coingecko.com/en/coins/wiz"
      /* profile={profile} */
      {...props}
    />
  )
}

export default Menu
