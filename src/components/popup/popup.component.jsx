import './popup.styles.scss'

import nat8 from '../../assets/img/nat-8.jpg'
import nat9 from '../../assets/img/nat-9.jpg'
import HeadingSecondary from '../heading-secondary/heading-secondary.component'
import HeadingTertiary from '../heading-tertiary/heading-tertiary.component'
import ButtonPrimary, { BUTTON_TYPES } from '../button-primary/button-primary.component'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { popupContext } from '../../contexts/popup.context'

const Popup = () => {
    const {showPopup, setShowPopup} = useContext(popupContext);
    const setShowPopupHandler = () => setShowPopup(!showPopup);
    return(
        <div class="popup" id="popup">
            <div class="popup__content">
                <div class="popup__left">
                    <img src={nat8} alt="nat 8" class="popup__img"/>
                    <img src={nat9} alt="nat 9" class="popup__img"/>
                </div>
                <div class="popup__right">
                    <Link to="#section-tours" className="popup__close" onClick={setShowPopupHandler}>&times;</Link>
                    <HeadingSecondary>Start booking now</HeadingSecondary>
                    <HeadingTertiary>Important &ndash; Please read these terms before booking</HeadingTertiary>
                    <p class="popup__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Sed sed risus pretium quam. Aliquam sem et tortor consequat id. Volutpat odio facilisis mauris sit
                        amet massa vitae. Mi bibendum neque egestas congue. Placerat orci nulla pellentesque dignissim enim
                        sit. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Malesuada pellentesque elit eget
                        gravida cum sociis natoque penatibus et. Proin fermentum leo vel orci porta non pulvinar neque laoreet.
                        Gravida neque convallis a cras semper. Molestie at elementum eu facilisis sed odio morbi quis. Faucibus
                        vitae aliquet nec ullamcorper sit amet risus nullam eget. Nam libero justo laoreet sit. Amet massa
                        vitae tortor condimentum lacinia quis vel eros donec. Sit amet facilisis magna etiam. Imperdiet sed
                        euismod nisi porta.
                    </p>
                    <ButtonPrimary buttonType={BUTTON_TYPES.green}>Book now</ButtonPrimary>
                </div>
            </div>
        </div>
    )
}

export default Popup;