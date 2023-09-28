import './button-primary.styles.scss';

export const BUTTON_TYPES = {
    base: 'base',
    green: 'green'
}

const ButtonPrimary = ({children, buttonType = BUTTON_TYPES.base, ...props}) => {
    return(
        <button className={`button-primary ${buttonType}`} {...props}>
            {children}
        </button>
    )
}

export default ButtonPrimary