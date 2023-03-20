import './composite-images.styles.scss';

import nat1 from '../../assets/img/nat-1.jpg'
import nat2 from '../../assets/img/nat-2.jpg'
import nat3 from '../../assets/img/nat-3.jpg'

const images = [
    {
        imgRef: nat1,
        name: 'nat1',
        id: 'img1'
    },
    {
        imgRef: nat2,
        name: 'nat2',
        id: 'img2'
    },
    {
        imgRef: nat3,
        name: 'nat3',
        id: 'img3'
    }
]

const CompositeImages = () => {
return(
    <div className="composite-images-container">
        {
            images.map(image => (
                <img
                src={image.imgRef}
                alt={image.name}
                className={`composite-images-container__image ${image.id}`}
                key={image.id}
                />        
            ))
        }
    </div>
)
}

export default CompositeImages