import CardBookingBack from '../card-booking-back/card-booking-back.component';
import CardBookingFront from '../card-booking-front/card-booking-front.component';
import './card-booking.styles.scss'


export const CARD_BACKGROUND_TYPES = {
    green: 'green',
    yellow: 'yellow',
    blue: 'blue'
}

const CardBooking = ({cardData}) => {
    return(
        <div className="card-booking-container">
            <CardBookingFront cardData={cardData} className='front'/>
            <CardBookingBack cardData={cardData} className='back'/>
        </div>
    )
}

export default CardBooking;