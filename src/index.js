import React, {Component}                   from 'react'
import ReactDOM                             from 'react-dom'
import {
    Router,
    Route,
    Link,
    browserHistory
}                                           from 'react-router'
import {createStore, applyMiddleware}       from 'redux'
import {Provider}                           from 'react-redux'
import {ReduxPromise}                       from 'redux-promise'

import reducers                             from './reducers/index'
import Blog                                 from './components/blog.jsx'

const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        <Router history={browserHistory}>
            <Route path="/" component={Blog} />
        </Router>
    </Provider>, document.getElementById("redux-app"))
