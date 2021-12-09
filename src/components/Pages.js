import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
    Switch,
    Route
} from 'react-router-dom';

export default function Pages() {
    
    return (
       <Switch>
           <Route exact path="/home" 
                component={routerProps => <HomeContainer routerInfo={routerProps} />}
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
