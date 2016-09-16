import React from 'react';
import GlobalHeader from './components/GlobalHeader/HeaderComponent';
import GlobalNav from './components/GlobalNav/NavigationComponent';

const App = function App(props) {
    return (
        <div>
            <GlobalHeader pathname={props.location.pathname}></GlobalHeader>
            <main className='content'>{props.children}</main>
            <GlobalNav></GlobalNav>
        </div>
    );
};

export default App;
