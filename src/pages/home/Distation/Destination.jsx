import React from 'react';
import Styles from './Destination.module.css';
import Kigali from '../../../assets/images/kigali.png';
import Huye from '../../../assets/images/huye.png';
import Beach from '../../../assets/images/beach.png';
import Musanze from '../../../assets/images/musanze.png';

const destinationCards = [
    {image:Kigali,
    title:'Kigali',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.'
},
{image:Huye,
    title:'Huye',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.'
},

{image:Beach,
    title:'Rubavu',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.'
},

{image:Musanze,
    title:'Musanze',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.'
}
];

function Destination() {
  return (
    <div className={Styles.destination__maincontainer}>
      <div className={Styles.destination__titles}>
        <div className={Styles.destination__paragraph}>
          <p>Popular Destinations</p>
        </div>
        <div className={Styles.destination__title}>
          <p>Select Our Best Popular Destinations</p>
        </div>
      </div>
      <div className={Styles.destination__padgination}>
        <div className={Styles.padgination__container}>
          <span className={Styles.left__padgination}>
            <i className="fa-sharp fa-solid fa-angle-left" />
          </span>
          <span className={Styles.right__padgination}>
            <i className="fa-sharp fa-solid fa-angle-right" />
          </span>
        </div>
      </div>
      <div className={Styles.destination__cards}>
        {destinationCards.map((Card) => (
            <div className={Styles.destination__card_cointainer}>
                <div className={Styles.image__container}><img src={Card.image} alt="destinationCarda" /></div>
                <div className={Styles.destination__card_title}><h5>{Card.title}</h5></div>
                <div className={Styles.destination__cards_description}><p>{Card.description}</p></div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Destination;
