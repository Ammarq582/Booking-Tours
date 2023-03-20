import './button-primary.styles.scss';

export const BUTTON_TYPES = {
    base: 'base',
    green: 'green'
}

const ButtonPrimary = ({children, buttonType = BUTTON_TYPES.base}) => {
    return(
        <button className={`button-primary ${buttonType}`}>
            {children}
        </button>
    )
}

export default ButtonPrimary