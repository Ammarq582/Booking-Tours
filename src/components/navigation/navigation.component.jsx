import { useContext } from 'react';
import { NavContext } from '../../contexts/nav.context';
import NavigationBackground from '../navigation-background/navigation-background.component';
import NavigationButton from '../navigation-button/navigation-button.component';
import NavigationList from '../navigation-list/navigation-list.component';
import './navigation.styles.scss'

const Navigation = () => {
    const {isNavOpen, setIsNavOpen} = useContext(NavContext);
    const setIsNavOpenHandler = () => setIsNavOpen(!isNavOpen);
    return(
        <div className="navigation">
            <NavigationButton onClick={setIsNavOpenHandler}/>
            <NavigationBackground/>
            <NavigationList/>
        </div>
    )
}

export default Navigation;