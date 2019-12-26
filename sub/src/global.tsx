import React from 'react';
import BasicLayout from './layouts/index'
import ReactDOM from 'react-dom';

export async function bootstrap() {
  // console.log('react app bootstraped');
}

export async function mount(props) {
  // console.log(props);
  ReactDOM.render(<BasicLayout />, document.getElementById('root'));
}

export async function unmount() {
  ReactDOM.unmountComponentAtNode(document.getElementById('root'));
}
