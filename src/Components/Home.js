import '../App.css';
import Header from './Header';
import Nav from './Nav';
import Menu from './Menu';
import Footer from './Footer';
/*import { Routes, Route, Link } from 'react-router-dom';*/
import Booking from './Booking';

const Home = () => {
    return (
        <>

            <Nav />
            <Header />
            <Menu />
            <Footer />

           
        </>
    );
}

export default Home;