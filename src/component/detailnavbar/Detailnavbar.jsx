import React from 'react';
import styles from './Detailnavbar.module.css';
import maplogo from '../../assets/images/maplogo.jpg';
import Button from '../Button/Button';

function Detailnavbar() {
  return (
    <div className={styles.secondnavbar}>
      <div className={styles.secondnavbar__menulink}>
      <div className={styles.content__holder_image}>
        <img src={maplogo} alt="maplogo" />
      </div>
        <p className={styles.main__link}>Home</p>
        <a href="#About">About</a>
        <a href="#Tour Package">Tour Package</a>
        <a href="#Gallery">Gallery</a>
        <a href="#Blog">Blog</a>
        <a href="#Contact us">Contact Us</a>
      </div>

      <div className={styles.secondnavbar__holderbtn}>
       <Button text="sign up"/>
      </div>
    </div>
  );
}

export default Detailnavbar;
