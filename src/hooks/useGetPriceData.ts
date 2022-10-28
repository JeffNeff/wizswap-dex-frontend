import { useEffect, useState } from 'react'

type ApiResponse = {
  data: {
    [address: string]: {
      name: string
      symbol: string
      price:string
      price_ETH:string
    }
  }
  updated_at: string
}

const api = 'https://wiz-info-api-tau.vercel.app/api/tokens'

const useGetPriceData = () => {
  const [data, setData] = useState<ApiResponse | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api)
        const res: ApiResponse = await response.json()

        setData(res)
      } catch (error) {
        console.error('Unable to fetch price data:', error)
      }
    }

    fetchData()
  }, [setData])

  return data
}

export default useGetPriceData
