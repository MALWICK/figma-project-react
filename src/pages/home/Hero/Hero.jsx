import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__maincontainer}>
        <div className={styles.hero__maincontainer_content}>
          <div className={styles.hero__container_heading}>
            <h1 className={styles.hero__heading}>
              Experience the beauty <br /> of Rwanda with us
            </h1>
          </div>
          <div className={styles.hero__container_paragraph}>
            <p className={styles.hero__paragraph}>
              Discover the Land of a Thousand Hills
            </p>
          </div>
        </div>
      </div>
      <div className={styles.padgination}>
          <div className={styles.padgination__container}>
            <div className={styles.padgination__left}>
            <i className="fa-sharp fa-solid fa-angle-left"/>
            </div>
            <div className={styles.padgination__right}>
              <i className="fa-sharp fa-solid fa-angle-right" />
            </div>
          </div>
        </div>
    </div>
  );
}
