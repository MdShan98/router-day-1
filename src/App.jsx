import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyUi/DaisyNav'
import Navbar from './Components/Nabvar/Navbar'
import PricingOption from './Components/Pricingoption/PricingOption'
import Results from './Components/Results/Results'
import axios from 'axios'
import MarksChart from './Components/MarksChart/MarksChart'

function App() {

  const pricingPromise = fetch('PricingData.json')
  .then(res=>res.json())
  const marksPromise = axios.get('marks.json')
  

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

        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>

        {/* <Results>

        </Results> */}
      </main>
    </>
  )
}

export default App
