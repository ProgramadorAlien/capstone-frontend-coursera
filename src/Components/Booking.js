import React, { useState, useReducer } from 'react';
import '../App.css';
import Nav from './Nav'
import BookingForm from './BookingForm';

const Booking = () => {

    // Lifted state for availableTimes
    //const [availableTimes, setAvailableTimes] = useState(['17:00', '18:00', '20:00', '21:00', '22:00']);

    const initializeTimes = () => ['17:00', '18:00', '20:00', '21:00', '22:00'];

    const updateTimes = (state, selectedDate) => {
        // For now, return the same available times regardless of the date
        return initializeTimes();
    };

    const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes);

    const handleFormSubmission = (formData) => {
        // Add your reservation submission logic here using the formData
        console.log('Form submitted with data:', formData);
    };


    return (
        <>
            <Nav />
            <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
                onSubmit={handleFormSubmission}
            />
        </>
    );
}

export default Booking;
