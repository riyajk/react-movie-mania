import React, {Component} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {createLogger} from 'redux-logger';

import MovieList from './containers/movie';
import MovieDetails from './containers/MovieDetails';
import Nav from './components/NavBar';

import reducers from './reducers'

export const history = new createBrowserHistory();

const logger = createLogger();

const middleware = [logger, thunk];

const store = createStore(reducers, applyMiddleware(...middleware));

class App extends Component {
  render() {
    return (<div className="row">
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Route path="/" component={Nav}/>
            <Switch>
              <Route path="/" exact component={MovieList}/>
              <Route path="/movies/:movieName" component={MovieDetails}/>
            </Switch>
          </div>
        </Router>
      </Provider>
    </div>);
  }
}

export default App;
