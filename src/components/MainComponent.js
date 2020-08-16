import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent/HomeComponent';
import Pairing from './PairingComponent';
import Suggest from './SuggestComponent';

function Main(props) {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/home' component={Home} />
                <Route exact path='/pairing' component={Pairing} />
                <Route exact path='/suggest' component={Suggest} />
                <Redirect to='/home' />
            </Switch>
            <Footer />
        </div>
    );
}

export default Main;