import React from 'react';
import { Switch, Route } from 'react-router-dom';

//components
import Alert from '../Layout/Alert/Alert';

// pages
import Home from '../../pages/Home/Home';

const Routing = (props) => {
    return (
        <main>
            <Alert />
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </main>
    );
};

export default Routing;