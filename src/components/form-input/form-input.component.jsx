import { useState } from 'react';
import './form-input.styles.scss'

const FormInput = ({label, ...props}) => {
    const {value, name} = props;
    let isValid = false;

    if(name === 'email') {
        if(value.includes('@')) {
            isValid = true;
        }
    }

    if(name === 'fullName') {
        if(value) {
            isValid = true
        }
    }

    return(
        <div className="form-input-group">
            <input className={(isValid && value) ? 'valid' : ''} {...props}/>

            <label className={value ? 'visible' : ''}>
                {label}
            </label>
        </div>
    )
}

export default FormInput