import './section-reviews.styles.scss'
import HeadingSecondary from '../heading-secondary/heading-secondary.component'
import Review from '../review/review.component'
import videoUrl from '../../assets/img/video.mp4'
import nat8 from '../../assets/img/nat-8.jpg'
import nat9 from '../../assets/img/nat-9.jpg'
import ButtonSecondary from '../button-secondary/button-secondary.component';

const reviewDataArray = [
    {
        id: 1,
        name: 'mary smith',
        imageUrl: nat8,
        heading: 'i had the best week ever with my family',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In alias esse accusantium. Distinctio expedita laborum deserunt omnis, alias blanditiis eveniet, in, quis quod tempora molestiae iste asperiores? Ad, ratione soluta! quis quod tempora molestiae iste asperiores? Ad, ratione soluta! quis quod tempo'
    },

    {
        id: 2,
        name: 'jack wilson',
        imageUrl: nat9,
        heading: 'wow my life is completely different now',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In alias esse accusantium. Distinctio expedita laborum deserunt omnis, alias blanditiis eveniet, in, quis quod tempora molestiae iste asperiores? Ad, ratione soluta! quis quod tempora molestiae iste asperiores? Ad, ratione soluta! quis quod tempo'
    }
]

const SectionReviews = () => {
    return(
        <div className="section-reviews-container">
            <video src={videoUrl} autoPlay muted loop/>
            <HeadingSecondary>we make people geniunely happy</HeadingSecondary>
            <div className="reviews-container">
                {
                    reviewDataArray.map(reviewData => (
                            <Review reviewData={reviewData}/>
                    ))
                }
            </div>
            <ButtonSecondary>Read all stories</ButtonSecondary>
        </div>
    )
}

export default SectionReviews;