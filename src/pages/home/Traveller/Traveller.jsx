import React from 'react'
import TravellerStyle from './Traveller.module.css'
import  ELipse from '../../../assets/images/Ellipse.jpg'

function Traveller() {
  return (
    <div className={TravellerStyle.traveller__section}>
        <div className={TravellerStyle.text__maincontainer}>
        <div className={TravellerStyle.traveller__text}>
            <div className={TravellerStyle.traveller__heading1}>
                <p>Our Traveller Say</p>
            </div>
            <div className={TravellerStyle.traveller__heading2}>
                <p>What our clients say about us</p>
            </div>

        </div>
        </div>
        <div className={TravellerStyle.traveller__cards}>
             <div className={TravellerStyle.cards__container}>
             <div className={TravellerStyle.image__holder}>
              <img src={ELipse} alt="Elipse" />
              </div>
            <div className={TravellerStyle.heading__emma}>
              <h5>Emma Waston</h5>
            </div>
            <div className={TravellerStyle.sentence__emma}>
              <p>
              I recently went on a tour with XYZ Tourism Company and was extremely impressed with the level of professionalism and organization.
              </p>
            </div>
             </div>

             <div className={TravellerStyle.cards__container}>
             <div className={TravellerStyle.image__holder}>
              <img src={ELipse} alt="Elipse" />
              </div>
            <div className={TravellerStyle.heading__emma}>
              <h5>Emma Waston</h5>
            </div>
            <div className={TravellerStyle.sentence__emma}>
              <p>
              I recently went on a tour with XYZ Tourism Company and was extremely impressed with the level of professionalism and organization.
              </p>
            </div>
             </div>

             <div className={TravellerStyle.cards__container}>
             <div className={TravellerStyle.image__holder}>
              <img src={ELipse} alt="Elipse" />
              </div>
            <div className={TravellerStyle.heading__emma}>
              <h5>Emma Waston</h5>
            </div>
            <div className={TravellerStyle.sentence__emma}>
              <p>
              I recently went on a tour with XYZ Tourism Company and was extremely impressed with the level of professionalism and organization.
              </p>
            </div>
             </div>
          </div>
            
    </div>
  )
}

export default Traveller