import React from 'react'
import HomeContainer from './home/HomeContainer'
import ImportantContainer from './important tasks/ImportantContainer'
import FinishedContainer from './finished tasks/FinishedContainer'

export default function Pages({page, home, important, finished}) {
    function renderPage() {
        switch (page){
            case "home":
                return < HomeContainer home={home}/>

            case "important tasks":
                return < ImportantContainer important={important}/>
            
            case "finished tasks":
                return < FinishedContainer finished={finished}/>

            default:
                break;
        }
    }
    
    return (
        <div>
            {renderPage()}
        </div>
    )
}
