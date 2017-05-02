import React, {Component}                   from 'react'
import ReactDOM                             from 'react-dom'
import {
    Router,
    Route,
    Link,
    browserHistory
}                                           from 'react-router'
import {BrowserRouter}                      from 'react-router-dom'
import {createStore, applyMiddleware}       from 'redux'
import {Provider}                           from 'react-redux'
import promiseMiddleware                    from 'redux-promise'

import reducers                             from './reducers/reducer'
import Blog                                 from './components/blog.jsx'

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        <BrowserRouter history={browserHistory}>
            <Route path="/" component={Blog} />
        </BrowserRouter>
    </Provider>, document.getElementById("redux-app"))
