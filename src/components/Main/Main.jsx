import React from 'react';
import {Route } from 'react-router-dom';
import Reviews from './Reviews/Reviews';
import Profile from './Profile/Profile';
import Projects from './Projects/Projects';

const Main = () => {
  return (
      <main className="main">
        <Route path='/Profile' component={Profile} />
        <Route path='/Projects' component={Projects} />
        <Route path='/Reviews' component={Reviews} />
      </main>

  );
}

export default Main;