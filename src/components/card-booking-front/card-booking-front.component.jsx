import './card-booking-front.styles.scss'

const CardBookingFront = ({cardData, className}) => {
    const {imgUrl, title, list, background} = cardData;

    return(
        <div className={`card-booking-front-container ${className}`}>
            <div className={`background-image ${background}`}/>
            <h4 className={`card-heading ${background}`}>
                    <span>{title}</span>
            </h4>
            <ul className="list">
                {
                    list.map((item, i) => (
                        <li key={i}>{item}</li>        
                    ))
                }
            </ul>
        </div>
    )
}

export default CardBookingFront;