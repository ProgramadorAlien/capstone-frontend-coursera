import React, { useState } from 'react';
import Nav from './Nav'
import BookingForm from './BookingForm';

const Booking = () => {

    // Lifted state for availableTimes
    const [availableTimes, setAvailableTimes] = useState(['17:00', '18:00', '20:00', '21:00', '22:00']);

    const handleFormSubmission = (formData) => {
        // Add your reservation submission logic here using the formData
        console.log('Form submitted with data:', formData);
    };


    return (
        <>
            <Nav />
            <BookingForm
                availableTimes={availableTimes}
                setAvailableTimes={setAvailableTimes}
                onSubmit={handleFormSubmission}
            />
        </>
    );
}

export default Booking;
