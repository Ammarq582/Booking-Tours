import './button-secondary.styles.scss';

const ButtonSecondary = ({children}) => {
    return(
        <a href="#" className="button-secondary">
            {children}
        </a>
    )
}

export default ButtonSecondary