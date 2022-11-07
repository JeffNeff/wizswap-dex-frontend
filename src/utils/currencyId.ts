import { Currency, ETHER, Token } from '@wizswap-libs/sdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'ETHONE'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}

export default currencyId
