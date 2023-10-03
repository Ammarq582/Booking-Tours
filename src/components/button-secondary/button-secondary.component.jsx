import { Link } from 'react-router-dom';
import './button-secondary.styles.scss';

const ButtonSecondary = ({children}) => {
    return(
        <Link to='#' className="button-secondary">
            {children}
        </Link>
    )
}

export default ButtonSecondary