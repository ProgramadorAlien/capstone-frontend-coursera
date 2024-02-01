import React, { useState } from 'react';

const BookingForm = ({ availableTimes, dispatch, onSubmit }) => {

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');
    

    const handleDateChange = (event) => {
        const selectedDate = event.target.value;
        setDate(selectedDate);
        dispatch(selectedDate); // Dispatch the selected date to update available times
      };

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };

    const handleGuestsChange = (event) => {
        setGuests(parseInt(event.target.value, 10)); 
    };

    const handleOccasionChange = (event) => {
        setOccasion(event.target.value);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        const formData = { date, time, guests, occasion };
        onSubmit(formData);
      };

    return (

        <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={handleDateChange} />

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={handleTimeChange}>
                {availableTimes.map((timeOption) => (
                    <option key={timeOption}>{timeOption}</option>
                )) }
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={handleGuestsChange} />

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={handleOccasionChange}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>


            <input type="submit" value="Make Your reservation" />
        </form>

    );
};

export default BookingForm; 