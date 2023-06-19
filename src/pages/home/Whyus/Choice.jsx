import React from 'react'
import ChoiceStyle from './Choice.module.css'

function Choice() {
  return (
    <div className={ChoiceStyle.choice__container}>
        <div className={ChoiceStyle.choice__text_container}>
            <div className={ChoiceStyle.choice__text1}><p>Why Us ?</p></div>
            <div className={ChoiceStyle.choice__text2}><p>Why Travel with Africa wizzy Safari</p></div>
        </div>
        <div className={ChoiceStyle.why__choose}>
            <div className={ChoiceStyle.why__container}>
                <div className={ChoiceStyle.firstReason}>
                <div className={ChoiceStyle.firstReason__wrapper}>
                <div className={ChoiceStyle.icons__for_firstReason}><i className="fa-solid fa-car"/></div>
                    <div className={ChoiceStyle.firstReason__text}>
                        <p>100+ tours around Rwanda</p>
                    </div>
                </div>
                </div>
                <div className={ChoiceStyle.secondReason}>
                <div className={ChoiceStyle.secondReason__wrapper}>
                <div className={ChoiceStyle.icons__for_secondReason }>
                <i className="fa-solid fa-check"/>
                </div>
                    <div className={ChoiceStyle.secondReason__text}>
                        <p>100% Trusted travel agency</p>
                    </div>
                </div>
                </div>
                <div className={ChoiceStyle.thirdReason}>
                <div className={ChoiceStyle.thirdReason__wrapper}>
                <div className={ChoiceStyle.calendar__icon}>
                <i className="fa-solid fa-calendar-days"/>
                </div>
                    <div className={ChoiceStyle.thirdReason__text}>
                        <p>10 years of travel experience</p>
                    </div>
                </div>
                </div>
                <div className={ChoiceStyle.fourthReason}>
                <div className={ChoiceStyle.fourthReason__wrapper}>
                <div className={ChoiceStyle.thumb__icon}>
                <i className="fa-solid fa-thumbs-up"/>
                </div>
                    <div className={ChoiceStyle.fourthReason__text}>
                        <p>90% of travelors are happy</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Choice