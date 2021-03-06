import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import MainContainer from './components/MainContainer';
import MarketDetailPage from './components/MarketDetailPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
  </Route>
)