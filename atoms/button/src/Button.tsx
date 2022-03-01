import { useState } from 'react';

import styles from './Button.module.scss';

export function Button() {
  const [count, setCount] = useState(0);
  return (
    <button
      className={styles.buttonDefault}
      onClick={() => setCount((val) => val + 2)}
    >
      {count}
    </button>
  );
}
