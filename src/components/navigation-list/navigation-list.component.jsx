import { useContext } from 'react';
import './navigation-list.styles.scss'
import { NavContext } from '../../contexts/nav.context';

const NavigationList = () => {
    const {isNavOpen} = useContext(NavContext)
    return(
        <ul className={`navigation-list ${isNavOpen ? "open" : null}`}>
            <li className="navigation-list__item">
                <span>01</span>
                About Booking-Tours
            </li>
            <li className="navigation-list__item">
                <span>02</span>
                Your Benefits
            </li>
            <li className="navigation-list__item">
                <span>03</span>
                Popular Tours
            </li>
            <li className="navigation-list__item">
                <span>04</span>
                Stories
            </li>
            <li className="navigation-list__item">
                <span>05</span>
                Book Now
            </li>
            
        </ul>
    )
}

export default NavigationList;