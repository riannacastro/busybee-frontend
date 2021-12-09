import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TasksContainer from './home/ListContainer';

export default function Pages() {
    
    return (
       <Switch>
           <Route path="/tasks" 
                component={routerProps => <TasksContainer routerInfo={routerProps} />}
            /> 
       </Switch>
    )
}
