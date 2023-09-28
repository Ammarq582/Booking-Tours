import { useContext } from 'react';
import { NavContext } from '../../contexts/nav.context';
import './navigation-button.styles.scss';

const NavigationButton = ({...props}) => {
    const {isNavOpen} = useContext(NavContext);
    return(
        <div className="navigation-button" {...props}>
            <div className={`strings ${isNavOpen ? "strings-clicked" : null}`}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default NavigationButton;