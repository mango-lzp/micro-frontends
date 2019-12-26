import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.css';

const BasicLayout: React.FC = props => {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to umi!</h1>
      {props.children}
    </div>
  );
};

export default BasicLayout;

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
