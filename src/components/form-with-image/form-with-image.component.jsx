import './form-with-image.styles.scss';
import HeadingSecondary from '../heading-secondary/heading-secondary.component';
import FormInput from '../form-input/form-input.component';
import { useState } from 'react';
import FormInputCheckbox from '../form-input-checkbox/form-input-checkbox.component';
import ButtonPrimary, { BUTTON_TYPES } from '../button-primary/button-primary.component';

const defaultFormData = {
    fullName: '',
    email: '',
    tourGroup: ''
}

const FormWithImage = () => {
    const [formData, setFormData] = useState(defaultFormData);
    const {fullName, email, tourGroup} = formData;

    console.log(formData);

    const updateInputHandler = (e) => {
        const {type, name, value, id} = e.target;
        console.log(type);
        type === 'radio'
        ?
        setFormData({...formData, [name]: id})
        :
        setFormData({...formData, [name]: value});
    }

    return(
        <div className="form-with-image-container">
            <HeadingSecondary>start booking now</HeadingSecondary>

            <form className="booking-form">

                <FormInput
                label='Full Name'
                type='text'
                name='fullName'
                placeholder='Fullname'
                value={fullName}
                required
                onChange={updateInputHandler}
                />
                <FormInput
                label='Email Address'
                type='email'
                placeholder='Email address'
                name='email'
                value={email}
                required
                onChange={updateInputHandler}
                />
                
                
                <div className="radio-inputs-container">
                    <FormInputCheckbox
                    name="tourGroup"
                    id="large"
                    label='large tour group'
                    value={tourGroup}
                    onClick={updateInputHandler}
                    />
                    <FormInputCheckbox
                    name="tourGroup"
                    id="small"
                    label='small tour group'
                    value={tourGroup}
                    onClick={updateInputHandler}
                    />
                </div>
                <ButtonPrimary buttonType={BUTTON_TYPES.green}>next step</ButtonPrimary>

            </form>
        </div>
    )
    
}

export default FormWithImage;