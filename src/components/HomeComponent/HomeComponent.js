import React, { Component } from 'react';
import SignIn from './SignInComponent';
import Title from './TitleComponent';

class Home extends Component {
    render() {
        return (
            <div>
                <Title />
                <SignIn />
            </div>
        );
    }
}

export default Home;