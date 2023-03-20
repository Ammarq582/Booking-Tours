import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadingTertiary from '../heading-tertiary/heading-tertiary.component';
import './card-features.styles.scss'

const CardFeatures = ({featureData}) => {
    const {icon, heading, text} = featureData;
    return(
        <div className="card-features-container">
            <FontAwesomeIcon icon={icon} className='card-features-container__icon'/>
            <HeadingTertiary>{heading}</HeadingTertiary>
            <p className="card-features-container__text">
                {text}
            </p>
        </div>
    )
}

export default CardFeatures;