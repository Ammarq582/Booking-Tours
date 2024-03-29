import './home.styles.scss'
import Header from '../../components/header/header.component';
import SectionDetails from '../../components/section-details/section-details.component';
import SectionAbout from '../../components/section-about/section-about.component';
import SectionBooking from '../../components/section-booking/section-booking.component';
import SectionReviews from '../../components/section-reviews/section-reviews.component';
import SectionForm from '../../components/section-form/section-form.component';
import Footer from '../../components/footer/footer.component';
import Navigation from '../../components/navigation/navigation.component';

const Home = () => {
    return(
        <div className="home-container">
            <Navigation/>            
            <Header/>
            <SectionDetails/>
            <SectionAbout/>
            <SectionBooking/>
            <SectionReviews/>
            <SectionForm/>
            <Footer/>
        </div>        
    )
}

export default Home;
