import React from 'react'
import HomeContainer from './home/HomeContainer'
import ImportantContainer from './important tasks/ImportantContainer'
import FinishedContainer from './finished tasks/FinishedContainer'

export default function Pages({page}) {
    function renderPage() {
        switch (page){
            case "home":
                return < HomeContainer />

            case "important tasks":
                return < ImportantContainer />
            
            case "finished tasks":
                return < FinishedContainer />

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
