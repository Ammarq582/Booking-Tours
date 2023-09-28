import './footer.styles.scss'
import logo1x from '../../assets/img/logo-green-1x.png';
import logo2x from '../../assets/img/logo-green-2x.png';
import logoSmall1x from '../../assets/img/logo-green-small-1x.png';
import logoSmall2x from '../../assets/img/logo-green-small-2x.png';
import FlexContainer from '../flex-container/flex-container.component';



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
                        <li class="footer__item"><a href="#" class="footer__link">Company</a></li>
                        <li class="footer__item"><a href="#" class="footer__link">Contact us</a></li>
                        <li class="footer__item"><a href="#" class="footer__link">Carrers</a></li>
                        <li class="footer__item"><a href="#" class="footer__link">Privacy policy</a></li>
                        <li class="footer__item"><a href="#" class="footer__link">Terms</a></li>
                    </ul>
                </div>
                <p class="footer__copyright">
                    Built by <a href="#" class="footer__link">Jonas Schmedtmann</a> for his online course <a href="#" class="footer__link">Advanced CSS and Sass</a>.
                    Copyright &copy; by Jonas Schmedtmann. You are 100% allowed to use this webpage for both personal
                    and commercial use, but NOT to claim it as your own design. A credit to the original author, Jonas
                    Schmedtmann, is of course highly appreciated!
                </p>
            </div>            
            </FlexContainer>
                
        </footer>
    )
}

export default Footer;