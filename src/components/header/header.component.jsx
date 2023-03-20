import './header.styles.scss';
import Logo from '../../assets/img/logo-white.png';
import ButtonPrimary from '../button-primary/button-primary.component';

const Header = () => {

    return(
        <div className="header-container">
            <img src={Logo} alt="Logo" className="logo" />
            <div className="header-container__content">
                <h1 className="heading-primary">
                    <span className='heading-primary--main'>Outdoors</span>
                    <span className='heading-primary--sub'>Is where life happens</span>
                </h1>
                <ButtonPrimary>Discover our tours</ButtonPrimary>
            </div>
        </div>
    )
}

export default Header;