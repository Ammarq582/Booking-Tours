import CardFeatures from '../card-features/card-features.component'
import './section-about.styles.scss'
import {faMap, faHeart, faContactBook, faBell} from '@fortawesome/free-regular-svg-icons'
import FlexContainer from '../flex-container/flex-container.component'

const featuresArray = [
    {
        id: 1,
        icon: faContactBook,
        heading: 'explore the world',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint modi totam aspernatur'
    },
    {
        id: 2,
        icon: faBell,
        heading: 'meet nature',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint modi totam aspernatur'
    },
    {
        id: 3,
        icon: faMap,
        heading: 'find your way',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint modi totam aspernatur'
    },
    { 
        id: 4,  
        icon: faHeart,
        heading: 'live a healthier life',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint modi totam aspernatur'
    },
]

const SectionAbout = () => {
    return(
        <div className="section-about-container">
            <div className="section-about-container__content">
                <FlexContainer>
                {
                    featuresArray.map(feature => (
                        <div className="section-about-container__content__item" key={feature.id}>
                            <CardFeatures featureData={feature}/>
                        </div>
                    ))
                }
                </FlexContainer>
            </div>
        </div>
    )
}

export default SectionAbout