import React from 'react';
import styles from  './Detailnavbar.module.css';
import maplogo from '../../assets/images/maplogo.jpg';

function Detailnavbar() {
  return (
    <nav className={styles.secondnavbar}>
      <div className="navcontent">
        <div className="imgholder">
          <div className="imgdisplay">
            <img src={maplogo} alt="maplogo" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Detailnavbar;
