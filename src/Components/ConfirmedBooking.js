import { useLocation } from 'react-router-dom';
import react from 'react';
import Nav from './Nav';

const ConfirmedBooking = () => {
    const location = useLocation();
    const formData = location.state?.formData || {};
    //console.log(formData);
    return (
        <main>
        <Nav />
        <div className='confirm'>
        <div>
                    <h1>Booking has been <span>Confirmed!</span></h1>
                    <p>Reservation Details:</p>
                    <ul>
                        <li>Number of Guests: {formData.guests}</li>
                        <li>Occasion: {formData.occasion}</li>
                        <li>Date: {formData.date}</li>
                        <li>Time: {formData.time}</li>
                    </ul>
                </div>

        </div>
        </main>
    )
}

export default ConfirmedBooking;