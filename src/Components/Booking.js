import React, { useState, useReducer } from 'react';
import '../App.css';
import Nav from './Nav'
import BookingForm from './BookingForm';


export const initializeTimes = () => ['17:00', '18:00', '20:00', '21:00', '22:00'];

export const updateTimes = (state, selectedDate) => {
    // For now, return the same available times regardless of the date
    console.log('Selected Date:', selectedDate);
    console.log(state);
    console.log(initializeTimes()[2]);
    return initializeTimes();
    
};

const Booking = () => {

    // Lifted state for availableTimes
    //const [availableTimes, setAvailableTimes] = useState(['17:00', '18:00', '20:00', '21:00', '22:00']);

   

    

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    

    const handleFormSubmission = (formData) => {
        // Add your reservation submission logic here using the formData
        console.log('Form submitted with data:', formData);
        console.log(availableTimes);
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
