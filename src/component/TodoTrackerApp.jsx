import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import TodoTrackerListComponent from './TodoTrackerListComponent';
import TodoTrackerComponent from './TodoTrackerComponent';

class TodoTrackerApp extends Component {
    render() {
        return (
            <Router>
                <div align='center'>
                    <Switch>
                        <Route path="/" exact component={TodoTrackerListComponent} />
                        <Route path="/todo/" exact component={TodoTrackerListComponent} />
                        <Route path="/todo/:action/:id" exact component={TodoTrackerComponent} />
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default TodoTrackerApp