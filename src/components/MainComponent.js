import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent/HomeComponent';
import Pairing from './PairingComponent';
import Suggest from './SuggestComponent';

// function Main(props) {
//     return (
//         <div>
//             <Header />
//             <TransitionGroup>
//                 <CSSTransition classNames="page" timeout={300}>
//                     <Switch >
//                         <Route exact path='/home' component={Home} />
//                         <Route exact path='/pairing' component={Pairing} />
//                         <Route exact path='/suggest' component={Suggest} />
//                         <Redirect to='/home' />
//                     </Switch>
//                 </CSSTransition>
//             </TransitionGroup> 
//             <Footer />

//         </div>
//     );
// }
const Main = withRouter(({ location }) => (
    <React.Fragment>
    <Header />
    <TransitionGroup>
        <CSSTransition
            key={location.key}
            classNames="page"
            timeout={300}
        >
            <Switch location={location}>
                <Route exact path='/home' component={Home} />
                <Route exact path='/pairing' component={Pairing} />
                <Route exact path='/suggest' component={Suggest} />
                <Redirect to='/home' />
            </Switch>
        </CSSTransition>
    </TransitionGroup>
    <Footer />
    </React.Fragment>
));
export default Main;