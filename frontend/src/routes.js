import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserListing from './Pages/UserListing';
import UserDetails from './Pages/UserDetails';
import UserRepos from './Pages/UserRepos';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>

                <Route exact path="/" component={UserListing}/>
                <Route exact path="/:username/userdetails" component={UserDetails}/>
                <Route exact path="/:username/userepos" component={UserRepos}/>

            </Switch>
        </BrowserRouter>
    );
}