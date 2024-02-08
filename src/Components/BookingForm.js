import React, { useState } from 'react';

const BookingForm = ({ availableTimes, onSubmit }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');
    //const [errors, setErrors] = useState({});

    const handleDateChange = (event) => {
        setDate(event.target.value);
       // setErrors(prevErrors => ({ ...prevErrors, date: '' }));
    };

    const handleTimeChange = (event) => {
        setTime(event.target.value);
        //setErrors(prevErrors => ({ ...prevErrors, time: '' }));
    };

    const handleGuestsChange = (event) => {
        setGuests(parseInt(event.target.value, 10));
        //setErrors(prevErrors => ({ ...prevErrors, guests: '' }));
    };

    const handleOccasionChange = (event) => {
        setOccasion(event.target.value);
        //setErrors(prevErrors => ({ ...prevErrors, occasion: '' }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = { date, time, guests, occasion };
        onSubmit(formData);
        /*const formErrors = validate(formData);
        if (Object.keys(formErrors).length === 0) {
            onSubmit(formData);
        } else {
            setErrors(formErrors);
        }*/
    };

    /*const validate = (formData) => {
        const errors = {};
        if (!formData.date) {
            errors.date = 'Please choose a date.';
        }
        if (!formData.time) {
            errors.time = 'Please choose a time.';
        }
        if (formData.guests < 1 || formData.guests > 10) {
            errors.guests = 'Number of guests must be between 1 and 10.';
        }
        return errors;
    };*/

    return (
        <main className='grid-form-container'>
            <div><h2>Make a Reservation</h2></div>
            <form className="booking-form" onSubmit={handleSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} onChange={handleDateChange} required />
                {/*{errors.date && <p className="error">{errors.date}</p>}*/}

                <label htmlFor="res-time" aria-label="On Click">Choose time</label>
                <select id="res-time" value={time} onChange={handleTimeChange} required>
                    <option value="">Select a Time</option>
                    {availableTimes.map((timeOption) => (
                        <option key={timeOption}>{timeOption}</option>
                    ))}
                </select>
                {/*{errors.time && <p className="error">{errors.time}</p>}*/}

                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={isNaN(guests) ? '' : guests} onChange={handleGuestsChange} required />

                {/*{errors.guests && <p className="error">{errors.guests}</p>}*/}

                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={handleOccasionChange}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>

                <input type="submit" value="Make Your reservation" />
            </form>
        </main>
    );
};

export default BookingForm;
