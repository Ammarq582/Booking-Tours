import { useContext } from 'react';
import { NavContext } from '../../contexts/nav.context';
import './navigation-background.styles.scss'

const NavigationBackground = () => {
    const {isNavOpen} = useContext(NavContext);
    return(
        <div className={`navigation-background ${isNavOpen ? "scaleup" : null}`}></div>
    )
}

export default NavigationBackground;