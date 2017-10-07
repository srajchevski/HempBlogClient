
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';//middleware that resolves promises
import Immutable from 'immutable';
import rootReducer from './reducers/index';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {syncHistoryWithStore, routerMiddleware, push} from 'react-router-redux';
import thunk from 'redux-thunk';

//Components(containers)
import App from './App';
import Home from './routes/home/home';
import Category from './routes/category/category';
import Post from './routes/post/post';

//Page components
//import Dashboard from './components/pages/dashboard/dashboard';

const middlewares = [thunk];
const middleware = routerMiddleware(browserHistory)
middlewares.push(middleware);
const initialState = Immutable.Map();
const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
);

const createSelectLocationState = () => {
  let prevRoutingState, prevRoutingStateJS;
  return (state) => {
    const routingState = state.get('routing'); // or state.routing
    if (typeof prevRoutingState === 'undefined' || prevRoutingState !== routingState) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }
    return prevRoutingStateJS;
  };
};

const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState: createSelectLocationState
  }
);

function goToTop() {
  window.scrollTo(0, 0)
}

ReactDOM.render(
    <Provider store={store}>
      <Router onChange={goToTop()} history={browserHistory}>
          <Route path="/" component={App}>
              <IndexRoute component={Home} />
              <Route path="/:category" component={Category} />
              <Route path="/posts/:id" component={Post} />

          </Route>

      </Router>
    </Provider>
    , document.getElementById('app')
);
