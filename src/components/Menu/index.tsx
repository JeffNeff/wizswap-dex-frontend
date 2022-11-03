import React, { useContext, useEffect, useState } from 'react'
import { Menu as UikitMenu, ConnectorId } from '@wizswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import { allLanguages } from 'constants/localisation/languageCodes'
import { LanguageContext } from 'hooks/LanguageContext'
import useTheme from 'hooks/useTheme'
import { injected, walletconnect } from 'connectors'
import { usePairContract } from 'hooks/useContract'
import links, { socials } from './config'

const Menu: React.FC = (props) => {
  const { account, activate, deactivate } = useWeb3React()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const [price, setPrice] = useState(0)
  const usdcWizt = "0x03a01ad071984001c70d98d250a4f521f5649bf2";
  const contract = usePairContract(usdcWizt)

  useEffect(() => {
    (async () => {
      const reserves = await contract?.getReserves()
      if (reserves) {
        const priceWizT = ((reserves.reserve1 / 10 ** 6) / (reserves.reserve0 / 10 ** 18))
        setPrice(priceWizT)
      }
    })()
  }, [contract])

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
      cakePriceUsd={price}
      cakePriceLink="!#"
      /* profile={profile} */
      {...props}
    />
  )
}

export default Menu
