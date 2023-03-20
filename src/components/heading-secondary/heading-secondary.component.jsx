import './heading-secondary.styles.scss'

const HeadingSecondary = ({children}) => {
    return(
        <h2 className="heading-secondary">
            {children}
        </h2>
    )
}

export default HeadingSecondary