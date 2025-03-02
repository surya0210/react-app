import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data/data";
import Section from './Section';
import Tabs from "./Tabs";

export default function Examples(){
    const [selectedTopic,setSelectedTopic]=useState();

    let tabContent='Please click here';
    
    function handleSelect(selectedButton){
      setSelectedTopic(selectedButton);
      
    };

    return (
        <Section title="Examples" id="examples">
          <Tabs 
            ButtonsContainer="menu"
            buttons={<>
                  <TabButton 
                          isSelected={selectedTopic==="components"} 
                          onSelect={()=>handleSelect('components')}
                      >
                          Components
                  </TabButton>
                  <TabButton 
                          isSelected={selectedTopic==="jsx"} 
                          onSelect={()=>handleSelect('jsx')}
                      >
                          JSX
                  </TabButton>
                  <TabButton 
                          isSelected={selectedTopic==="props"} 
                          onSelect={()=>handleSelect('props')}
                      >
                          Props
                  </TabButton>
                  <TabButton 
                          isSelected={selectedTopic==="state"} 
                          onSelect={()=>handleSelect('state')}
                      >
                          State
                  </TabButton>
              </>}>
            {!selectedTopic && <p>Please select a topic</p>}
            {selectedTopic && <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
            }
          </Tabs>
        </Section>    
    );
}