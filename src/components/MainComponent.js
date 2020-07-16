import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Login from './LoginComponent';
import Pairing from './PairingComponent';
import Suggest from './SuggestComponent';

class Main extends Component {

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/home' component={Login} />
                    <Route exact path='/pairing' component={Pairing} />
                    <Route exact path='/suggest' component={Suggest} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main;