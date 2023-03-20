import './review.styles.scss'

import nat2 from '../../assets/img/nat-2.jpg'
import HeadingText from '../heading-text/heading-text.component';

const Review = ({reviewData}) => {
    const {heading, text, name, imageUrl} = reviewData;
    const content = {heading, text};
    const [firstName, lastName] = name.split(' '); 

    return(
    <div className="review-container">
        <div className="review-container__content">
            <div className="image-container">
                <fig src={imageUrl} alt={name} />
                <div className="name">
                    <span>{firstName}</span>
                    <span>{lastName}</span>
                </div>
            </div>
            <HeadingText content={content}/>
        </div>
    </div>
    )
    
}

export default Review;