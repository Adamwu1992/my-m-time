import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/Home';
import City from './containers/City';
import MovieDetail from './containers/MovieDetail';
import UserCenter from './containers/UserCenter';

const route = (
  <Fragment>
    <Route path="/" component={Home} />
    <Route path="/city" component={City} />
    <Route path="/movie_detail" component={MovieDetail} />
    <Route path="/user" component={UserCenter} />
  </Fragment>
);

export default route;