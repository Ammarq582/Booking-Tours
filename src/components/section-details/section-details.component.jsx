import ButtonSecondary from '../button-secondary/button-secondary.component';
import CompositeImages from '../composite-images/composite-images.component';
import FlexContainer from '../flex-container/flex-container.component';
import HeadingSecondary from '../heading-secondary/heading-secondary.component';
import HeadingText from '../heading-text/heading-text.component';
import './section-details.styles.scss'



const contents = [
    {
        id: 1,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint modi totam aspernatur iste soluta nostrum, qui at dolor cupiditate praesentium ex aperiam atque quis molestiae quia! Culpa sunt consequatur error?',
        heading: "you're going to fall in love with nature"
    },
    {
        id: 2,
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit voluptatem perferendis, architecto reprehenderit corrupti culpa dicta dolore. Nobis iusto veniam fugiat amet.',
        heading: "live adventures like you never have before"
    }
]

const SectionDetails = () => {
    return(
        <div className="section-details-container">
            <HeadingSecondary>
                Exciting tours for adventurous people
            </HeadingSecondary>
            <div className="section-details-container__content">
                <FlexContainer>
                    <div className="section-details-container__content__text">
                    {
                        contents.map(content => (
                            <HeadingText content={content} key={content.id}/>
                        ))
                    }
                    <ButtonSecondary>Learn more →</ButtonSecondary>
                    </div>

                    <div className="section-details-container__content__images">
                        <CompositeImages/>
                    </div>
                </FlexContainer>
            </div>
        </div>
    )
}

export default SectionDetails;