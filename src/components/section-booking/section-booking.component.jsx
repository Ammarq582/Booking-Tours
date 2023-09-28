import CardBooking, { CARD_BACKGROUND_TYPES } from '../card-booking/card-booking.component'
import FlexContainer from '../flex-container/flex-container.component'
import HeadingSecondary from '../heading-secondary/heading-secondary.component'
import './section-booking.styles.scss'
import ButtonPrimary, { BUTTON_TYPES } from '../button-primary/button-primary.component'
import Popup from '../popup/popup.component'
import { useContext} from 'react'
import { popupContext } from '../../contexts/popup.context'

const cardDataArray = [
    {
        id: 1,
        background: CARD_BACKGROUND_TYPES.yellow,
        imgUrl: '../../assets/img/nat-8.jpg',
        title: 'the sea explorer',
        list: ['3 day tour', 'Up to 30 People', '2 tour guides', 'Sleep in cozy hotels', 'Difficulty: Easy'],
        price: '$297'
    },

    {
        id: 2,
        background: CARD_BACKGROUND_TYPES.green,
        imgUrl: '../../assets/img/nat-9.jpg',
        title: 'the forest hiker',
        list: ['7 day tour', 'Up to 40 People', '6 tour guides', 'Sleep in provided tents', 'Difficulty: Medium'],
        price: '$497'
    },

    {
        id: 3,
        background: CARD_BACKGROUND_TYPES.blue,
        imgUrl: '../../assets/img/nat-10.jpg',
        title: 'the snow adventurer',
        list: ['5 day tour', 'Up to 15 People', '3 tour guides', 'Sleep in provided tents', 'Difficulty: Hard'],
        price: '$897'
    }
]

const SectionBooking = () => {
    const {showPopup} = useContext(popupContext);
    return(
        <div className="section-booking-container">
            <HeadingSecondary>
                Most popular tours
            </HeadingSecondary>
            <div className="section-booking-container__content">
                <FlexContainer>
                    {
                        cardDataArray.map(cardData => (
                            <CardBooking cardData={cardData} key={cardData.id}/>
                        ))
                    }
                </FlexContainer>
            </div>
            <ButtonPrimary buttonType={BUTTON_TYPES.green}>Discover all tours</ButtonPrimary>
            {
                showPopup
                ?
                <Popup/>
                :
                null
            }
        </div>
    )
}

export default SectionBooking