import React from "react";
import { useState } from "react";

const BookingForm = () => {

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');
    const [availableTimes] = useState(['17:00', '18:00', '20:00', '21:00', '22:00']);

    const handleDateChange = (event) => {
        setDate(event.target.value);
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
        // Add your reservation submission logic here
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