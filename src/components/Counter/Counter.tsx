import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './Counter.module.scss';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(1);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => Math.max(prevCount - 1, 1));
  };

  return (
    <div className={styles.block}>
      <div
        onClick={handleDecrement}
        className={classNames(
          styles.button,
          {[styles.disabled]: count === 1}
        )}
      >➖</div>
      <div className={styles.count}>
        {count}
      </div>
      <div className={styles.button} onClick={handleIncrement}>➕</div>
    </div>
  );
};

export default Counter;