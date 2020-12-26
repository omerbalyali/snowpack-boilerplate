import * as React from 'react';
import clsx from 'clsx';
import styles from './App.module.css';

interface AppProps {}

function App(props: AppProps) {
  return <div className={clsx(styles.app)}>Hello</div>;
}

export default App;
