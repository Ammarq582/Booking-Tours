import './footer.styles.scss'
import logo1x from '../../assets/img/logo-green-1x.png';
import logo2x from '../../assets/img/logo-green-2x.png';
import logoSmall1x from '../../assets/img/logo-green-small-1x.png';
import logoSmall2x from '../../assets/img/logo-green-small-2x.png';
import FlexContainer from '../flex-container/flex-container.component';
import { Link } from 'react-router-dom';

const portfolioLink = 'https://ammarqureshi.netlify.app/';

const Footer = () => {
    return(
        <footer className="footer">
            <div class="footer__logo-box">
                <picture class="footer__logo">
                    <source srcset={`${logoSmall1x} 1x, ${logoSmall2x} 2x`} media="(max-width: 37.5em)"/>
                    <img srcset={`${logo1x} 1x, ${logo2x} 2x`} alt="Full logo" src={logo2x}/>
                </picture>
            </div>
            <FlexContainer>
            <div className="footer__content">
                <div class="footer__navigation">
                    <ul class="footer__list">
                        <li class="footer__item"><Link to="#" class="footer__link">Company</Link></li>
                        <li class="footer__item"><Link to="#" class="footer__link">Contact us</Link></li>
                        <li class="footer__item"><Link to="#" class="footer__link">Carrers</Link></li>
                        <li class="footer__item"><Link to="#" class="footer__link">Privacy policy</Link></li>
                        <li class="footer__item"><Link to="#" class="footer__link">Terms</Link></li>
                    </ul>
                </div>
                <p class="footer__copyright">
                    Built by <Link to="#" class="footer__link">Ammar Qureshi</Link> for his <a href={portfolioLink} class="footer__link">Portfolio</a>.
                    Copyright &copy; by Ammar Qureshi.
                </p>
            </div>            
            </FlexContainer>
                
        </footer>
    )
}

export default Footer;