import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Student from './Student';
import Admin from './Admin';
import Class from './Class';
import Tuition from './Tuition';
import Home from './Home';

const Main = () => (
    
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/student" component={Student} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/class" component={Class} />
        <Route exact path="/tuition" component={Tuition} />
    </Switch>
)

export default Main;