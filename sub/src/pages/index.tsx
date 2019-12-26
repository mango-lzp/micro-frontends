import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.css';
const App = (props) => {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
      </ul>
    </div>
  );
}
export default App;

