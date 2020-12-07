import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import TodoApplicationComponent from '../component/TodoApplicationComponent';

const TodoApplicationRouter = () => {
    return (
        <Router>
            <div align='center'>
                <Switch>
                    <Route path="/" exact component={TodoApplicationComponent} />
                    <Route path="/todo/" exact component={TodoApplicationComponent} />
                </Switch>
            </div>
        </Router>
    );
}

export default TodoApplicationRouter