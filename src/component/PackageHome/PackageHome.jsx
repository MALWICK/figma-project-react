import React from 'react'
import Styles from './packageHome.module.css'
import girafe from '../../assets/images/girafe.png'
import lying  from '../../assets/images/lying.png'
import boat   from '../../assets/images/boat.jpg'
import Button from '../Button/Button';

const cards =[
  {image: girafe,
    title:'Akagera National Park',
    description:'Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks.'
},

{image: lying,
  title:'Bisoke Hike',
  description:'The Bisoke hike is a popular mountain trek in Rwanda, located in the Volcanoes National Park. It is one of the most challenging hikes in the park.'
},

{image: boat,
  title:'Lake Kivu trip',
  description:'A trip to Lake Kivu can be a truly unique and memorable experience. '
},
{image: girafe,
  title:'Akagera National Park',
  description:'Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks.'
},

{image: lying,
title:'Bisoke Hike',
description:'The Bisoke hike is a popular mountain trek in Rwanda, located in the Volcanoes National Park. It is one of the most challenging hikes in the park.'
},

{image: boat,
title:'Lake Kivu trip',
description:'A trip to Lake Kivu can be a truly unique and memorable experience. '
}


]

export default function Packagehome() {
  return (
    <div className={Styles.package__container}>
      <div className={Styles.package__titles_container}>
        <div className={Styles.titles__paragraph}>
          <p>Choose your Package</p>
        </div>
        <div className={Styles.titles__tittle1}>
          <p>Select your Best Package for your Travel</p>
        </div>
      </div>

      <div className={Styles.package__displaycards}>
          {cards.map((Card) => (
            <div className={Styles.displaycard}>
              <div className='image__holder'><img src={Card.image} alt='cards' /></div>
              <div className={Styles.textcontainer}>
              <h5>{Card.title}</h5>
              <div className={Styles.description__text}><p>{Card.description}</p></div>
              </div>
              <div className={Styles.holderbtn}>
          <Button text="Learn More"/>
      </div>
            </div>

    ))}

        </div>
     
    </div>
  );
}
