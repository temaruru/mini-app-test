import React, {useState} from 'react';
import styles from './PinkDonutCard.module.scss';
import Counter from "../Counter/Counter";
import classNames from "classnames";

import productImageExample from '../../images/donut.png'
import { ReactComponent as Arrow } from '../../icons/arrow.svg';
import { ReactComponent as Like } from '../../icons/like.svg';

const PinkDonutCard: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handleIconClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles.page}>
      <div className={styles.decoration}></div>
      <div className={styles.header}>
        <header className={styles.inner}>
          <div className={styles.back}>
            <Arrow
              className={styles.action}
              width="20"
              height="20"
            />
          </div>
          <div className={styles.action}>
            <Like
              className={classNames(
                styles.icon,
                {[styles.active]: isActive}
              )}
              onClick={handleIconClick}
              width="20"
              height="20"
            />
          </div>
        </header>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={productImageExample}
            alt="Donut"
          />
        </div>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Pink Donut</h1>
        <p className={styles.subtitle}>Sugar, flour, butter, strawberry jam, pink glaze</p>
        <div className={styles.info}>
          <span className={styles.info_item}>⭐️ 5.0</span>
          <span className={styles.info_item}>🔥 563 kcal</span>
          <span className={styles.info_item}>⏰ 5-10 min</span>
        </div>
        <p className={styles.description}>
          The sweet and juicy combo of pink glaze and strawberry jam. Introduce with the Pink Donut as soon as possible.
        </p>
        <div className={styles.actions}>
          <span className={styles.price}>$5.50</span>
          <Counter/>
        </div>
        <button className={styles.button}>Add to bag</button>
      </div>
    </div>
  );
};

export default PinkDonutCard;