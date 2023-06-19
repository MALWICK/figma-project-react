import React from 'react';
import styles from  './sticky.module.css'; 


function StickyBar() {
    return(
      <div className={styles.navbar}>
    <div className={styles.sticky}>
      <div className={styles.contactdetails}>
       <div className= {styles.contactphonenumber}>
          <i className="fa-solid fa-phone-flip" />
          <p>+250 784 688 641</p>
       </div>
        <div className={styles.contactemail}>
          <i className="fa-sharp fa-solid fa-envelope" />
          <p> bonteemma@gmail.com </p>
        </div>
      </div>
      <div className={styles.socialicons}>
        <div className={styles.facebockbacground}>
        <p><i className="fa-brands fa-facebook-f"/></p>
        </div>
        <div className={styles.twitterbockbacground}>
        <p> <i className="fa-brands fa-twitter"/></p>
        </div>
        <div className={styles.linkinbockbacground}>
        <p> <i className="fa-brands fa-linkedin-in"/></p>
        </div>
        <div className={styles.instagrambockbacground}>
        <p> <i className="fa-brands fa-square-instagram"/></p>
        </div>
      </div>
    </div>
  </div>
    );
}

export default StickyBar;