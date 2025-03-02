import { useState } from 'react'
import componentsImg from './assets/components.png'
import jsxImg from './assets/jsx-ui.png'
import propsImg from './assets/config.png'
import stateImg from './assets/state-mgmt.png'
import Header from './components/Header/Header'
import CoreConcept from './components/CoreConcept'
import TabButton from './components/TabButton'
import { EXAMPLES,CORE_CONCEPTS } from './data/data'

function App() {
  const [selectedTopic,setSelectedTopic]=useState();

  let tabContent='Please click here';
  
  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
    
  };


  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem)=>(
              <CoreConcept key ={conceptItem.title}{...conceptItem}/>))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic==="components"} onSelect={()=>handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic==="jsx"} onSelect={()=>handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic==="props"} onSelect={()=>handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic==="state"} onSelect={()=>handleSelect('state')}>State</TabButton>
          </menu>
          {!selectedTopic && <p>Please select a topic</p>}
          {selectedTopic &&<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>}
          
        </section>
      </main>
    </div>
  );
}

export default App;