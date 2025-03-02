import { useState } from 'react'
import componentsImg from './assets/components.png'
import jsxImg from './assets/jsx-ui.png'
import propsImg from './assets/config.png'
import stateImg from './assets/state-mgmt.png'
import Header from './components/Header/Header'
import CoreConcept from './components/CoreConcept'
import TabButton from './components/TabButton'
import { EXAMPLES } from './data/data'
import CoreConcepts from './components/CoreConcepts'
import Examples from './components/Examples'

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
    </>
  );
}

export default App;