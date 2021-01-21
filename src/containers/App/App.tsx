import * as React from 'react';
import clsx from 'clsx';
import styles from './App.module.css';

const cssVar = (key: string, value: string) => {
  const customPropertyKey = `--${key}`;
  const newStyles: { [key: string]: string } = {
    [customPropertyKey]: value,
  } as const;

  return newStyles;
};

interface AppProps {}
function App(props: AppProps) {
  return (
    <div
      className={clsx(styles.app)}
      style={cssVar('variable', 'yellow')}
      data-theme="dark">
      Hello
    </div>
  );
}

export default App;
