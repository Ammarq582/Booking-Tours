import './card-booking-back.styles.scss'

import ButtonPrimary, { BUTTON_TYPES } from '../button-primary/button-primary.component'

const CardBookingBack = ({cardData, className}) => {
    const {background, price} = cardData;
    return(
        <div className={`card-booking-back-container ${background} ${className}`}>
            <div className="booking-details">
                <div className="price-box">
                    <span>only</span>
                    <span className='price'>{price}</span>
                </div>
                <ButtonPrimary buttonType={BUTTON_TYPES.base}>
                    Book now!
                </ButtonPrimary>
            </div>
        </div>
    )
}

export default CardBookingBack;