import HeadingTertiary from '../heading-tertiary/heading-tertiary.component';
import './heading-text.styles.scss'

const HeadingText = ({content}) => {
    const {text, heading} = content;

    return(
        <div className="heading-text-container">
            <HeadingTertiary>{heading}</HeadingTertiary>
            <p>{text}</p>
        </div>
    )
}

export default HeadingText;