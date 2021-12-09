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
           <Route exact path="/home" 
                component={routerProps => <HomeContainer home={this.props.home}
                routerInfo={routerProps} />}
            />
           <Route exact path="/important" 
                component={routerProps => <ImportantContainer important={this.props.important} 
                routerInfo={routerProps} />}
           />
           <Route exact path="/finished" 
                component={routerProps => <FinishedContainer finished={this.props.finished} 
                routerInfo={routerProps} />}
           />
           <Route exact path="/newlist" 
                component={routerProps => <FinishedContainer finished={this.props.finished} 
                routerInfo={routerProps} />}
           />
           {/* <Route exact path="/home/:id" component={routerProps => <FinishedContainer finished={finished} routerInfo={routerProps} />}/> maybe put in new component for show */} 
       </Switch>
    )
}
