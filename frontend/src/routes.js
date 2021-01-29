import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserListing from './Pages/UserListing';
import UserDetails from './Pages/UserDetails';
import UserRepos from './Pages/UserRepos';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>

                <Route path="/userlisting" component={UserListing}/>
                <Route path="/userdetails/:username" component={UserDetails}/>
                <Route path="/userepos/:username" component={UserRepos}/>

            </Switch>
        </BrowserRouter>
    );
}