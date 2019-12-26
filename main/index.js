import { registerMicroApps, start } from 'qiankun';
import React from 'react';
import fetch from 'isomorphic-fetch';
import ReactDOM from 'react-dom';
import Framework from './Framework.jsx';

function render({ appContent, loading }) {
  const container = document.getElementById('container');
  ReactDOM.render(<Framework loading={loading} content={appContent} />, container);
}

const request = url =>
  fetch(url, {
    referrerPolicy: 'origin-when-cross-origin',
  });

function genActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}

registerMicroApps(
  [
    {
      name: 'react app', // app name registered
      entry: '//localhost:8000',
      render,
      activeRule: genActiveRule('/react'),
    },
  ],
  {
    beforeLoad: [
      app => {
        console.log('before load', app);
      },
    ],
    beforeMount: [
      app => {
        console.log('before mount', app);
      },
    ],
    afterUnmount: [
      app => {
        console.log('after unload', app);
      },
    ],
  },
  {
    fetch: request,
  },
);

render({loading: false})

start();