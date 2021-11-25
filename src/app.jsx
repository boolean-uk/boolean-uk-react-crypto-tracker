import { useEffect, useState } from 'react'

import MainDetail from './components/mainDetail'

// const dummyData = [
//   {
//     id: 'bitcoin',
//     symbol: 'btc',
//     name: 'Bitcoin',
//     image:
//       'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
//     current_price: 34489,
//     market_cap: 648204207380,
//     market_cap_rank: 1,
//     fully_diluted_valuation: 724177804281,
//     total_volume: 24764916416,
//     high_24h: 36239,
//     low_24h: 34485,
//     price_change_24h: -1749.76310646315,
//     price_change_percentage_24h: -4.82846,
//     market_cap_change_24h: -32716207786.573853,
//     market_cap_change_percentage_24h: -4.8047,
//     circulating_supply: 18796887,
//     total_supply: 21000000,
//     max_supply: 21000000,
//     ath: 47095,
//     ath_change_percentage: -26.77572,
//     ath_date: '2021-04-14T11:54:46.763Z',
//     atl: 43.9,
//     atl_change_percentage: 78448.81383,
//     atl_date: '2013-07-05T00:00:00.000Z',
//     roi: null,
//     last_updated: '2021-08-25T09:02:15.952Z'
//   },
//   {
//     id: 'ethereum',
//     symbol: 'eth',
//     name: 'Ethereum',
//     image:
//       'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
//     current_price: 2267.77,
//     market_cap: 265892628976,
//     market_cap_rank: 2,
//     fully_diluted_valuation: null,
//     total_volume: 15480135024,
//     high_24h: 2432.65,
//     low_24h: 2267.3,
//     price_change_24h: -164.880186187215,
//     price_change_percentage_24h: -6.77781,
//     market_cap_change_24h: -19366747255.32428,
//     market_cap_change_percentage_24h: -6.78917,
//     circulating_supply: 117248400.1865,
//     total_supply: null,
//     max_supply: null,
//     ath: 3090.18,
//     ath_change_percentage: -26.62907,
//     ath_date: '2021-05-12T14:41:48.623Z',
//     atl: 0.280314,
//     atl_change_percentage: 808741.30185,
//     atl_date: '2015-10-20T00:00:00.000Z',
//     roi: {
//       times: 86.6568880617258,
//       currency: 'btc',
//       percentage: 8665.688806172579
//     },
//     last_updated: '2021-08-25T09:02:19.493Z'
//   }
// ]

function App() {
  // This piece of state keeps the id from the selected coin to be displayed in the MainDetail component
  const [selectedCripto, setSelectedCripto] = useState(null)

  // This function gives you whether a coin has been selected or not
  // You will need this for the SideListItem component
  function isSelectedCripto(id) {
    return selectedCripto === id
  }

  return (
    /* These (<> </>) are called React Fragments, and allow us to return more than one top element */
    <>
      <aside className="side-list">
        <ul>{/* This is where the side list goes */}</ul>
      </aside>
      <main className="main-detail">
        {selectedCripto
          ? 'Create the main detail component here'
          : 'Select a coin bro!'}
        {/* News feed component needs to go here */}
      </main>
    </>
  )
}

export default App
