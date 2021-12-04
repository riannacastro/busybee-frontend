import React from 'react'
import HomeContainer from './home/HomeContainer'
import ImportantContainer from './important tasks/ImportantContainer'
import FinishedContainer from './finished tasks/FinishedContainer'
import {
    Switch,
    Route
} from 'react-router-dom';

export default function Pages({home, important, finished}) {
    // function renderPage() {
    //     switch (page){
    //         case "home":
    //             return < HomeContainer home={home}/>

    //         case "important tasks":
    //             return < ImportantContainer important={important}/>
            
    //         case "finished tasks":
    //             return < FinishedContainer finished={finished}/>

    //         default:
    //             break;
    //     }
    // }
    
    return (
       <Switch>
           <Route exact path="/home" component={() => < HomeContainer home={home} />} />
           <Route exact path="/important">important</Route>
           <Route exact path="/finished">finished</Route>
       </Switch>
    )
}
