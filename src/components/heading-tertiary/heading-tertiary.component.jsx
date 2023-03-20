import './heading-tertiary.styles.scss'

const HeadingTertiary = ({children, specificClass}) => {
    return(
        <h3 className={`heading-tertiary ${specificClass}`}>
            {children}
        </h3>
    )
}

export default HeadingTertiary;