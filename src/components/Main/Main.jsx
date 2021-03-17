import React from 'react';
import {Route } from 'react-router-dom';
import Reviews from './Reviews/Reviews';
import Profile from './Profile/Profile';
import Projects from './Projects/Projects';
import Messages from './Messages/Messages';

const Main = () => {
  return (
      <main>
        <Route path='/Profile' component={Profile} />
        <Route path='/Projects' component={Projects} />
        <Route path='/Reviews' component={Reviews} />
        <Route path='/Messages' component={Messages} />
      </main>

  );
}

export default Main;