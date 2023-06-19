import React from 'react'
import stylesbook from './Booking.module.css'
import Button from '../../../component/Button/Button';

function Booking() {
    return(
        <form className={stylesbook.booking}>
            <div className={stylesbook.booking__container}>
                <div className={stylesbook.search_inputs}>
                    <input type="text" placeholder='Search activities or Destinations' />
                    <div className='search__icons'><i className="fa-solid fa-magnifying-glass"/></div>
                </div>
                <div className={stylesbook.booking__guest}>
                    <div className={stylesbook.guest_text}>
                        <p className={stylesbook.guest_p}>Guestst</p>
                        <div className={stylesbook.adult__guest}>
                            <p>2 Adult</p><i className="fa-solid fa-angle-down"/>
                        </div>
                    </div>
                </div>
                <div className={stylesbook.date}>
                    <div className={stylesbook.date__details}>
                        <p className={stylesbook.date_text}>Date</p>
                        <div className={stylesbook.specific__date}>
                            <p>12 - 13 April 2021</p><i className="fa-solid fa-angle-down"/>
                        </div>
                    </div>
                </div>
                <div className={stylesbook.date}>
                    <div className={stylesbook.date__details}>
                        <p className={stylesbook.date_text}>Package</p>
                        <div className={stylesbook.specific__date}>
                            <p>All</p><i className="fa-solid fa-angle-down"/>
                        </div>
                    </div>
                </div>
                <div className={stylesbook.booking__holderbtn}>
                 <Button text="Book now"/>
                 </div>
            </div>
        </form>
    )
}


export default Booking;