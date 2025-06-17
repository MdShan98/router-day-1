import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyUi/DaisyNav'
import Navbar from './Components/Nabvar/Navbar'
import PricingOption from './Components/Pricingoption/PricingOption'
import Results from './Components/Results/Results'

function App() {

  const pricingPromise = fetch('PricingData.json')
  .then(res=>res.json())
  

  return (
    <>
      <header>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <PricingOption pricingPromise={pricingPromise}></PricingOption>
        </Suspense>

        <Results>
          
        </Results>
      </main>
    </>
  )
}

export default App
