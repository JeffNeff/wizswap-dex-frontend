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
  const usdcWizt = "0x7aDc8786dDd0ea67fcd0B4e6f22cAd6e36eC9f06";
  const contract = usePairContract(usdcWizt)

  useEffect(() => {
    (async () => {
      try {
        const reserves = await contract?.getReserves()
        if (reserves) {
          const priceWizT = ((reserves.reserve0 / 10 ** 6) / (reserves.reserve1 / 10 ** 18))
          setPrice(priceWizT)
        }
      } catch (error) {
        // console.log('no liquidity for usdc/wizt');
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
      removeNav
      /* profile={profile} */
      {...props}
    />
  )
}

export default Menu
