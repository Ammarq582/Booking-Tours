import FlexContainer from '../flex-container/flex-container.component';
import FormWithImage from '../form-with-image/form-with-image.component';
import './section-form.styles.scss'

const SectionForm = () => {
    return(
        <div className="section-form-container">
            <FlexContainer>
                <FormWithImage/>
            </FlexContainer>
        </div>
    )
}

export default SectionForm;