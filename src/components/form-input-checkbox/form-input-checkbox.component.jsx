import './form-input-checkbox.styles.scss';

const FormInputCheckbox = (props) => {
    const {id, label, value} = props;
    let buttonChecked = false;

    if(value === id) {
        buttonChecked = true;
    }

    return(
        <div className="radio-group">
            <input className='radio-group__input' type="radio" {...props}/>
            <label className='radio-group__label' htmlFor={id}>
                <div className="radio-button">
                    <span className={buttonChecked ? 'radio-button-checked' : ''}></span>
                </div>
                <span>{label}</span>
            </label>
        </div>
    )
}

export default FormInputCheckbox;