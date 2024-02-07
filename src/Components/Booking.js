import React, { useState, useEffect, useReducer } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import '../App.css';
import Nav from './Nav';
import BookingForm from './BookingForm';
import { fetchAPI, submitAPI } from '../mockAPI';
import ConfirmedBooking from './ConfirmedBooking';

export const initializeTimes = () => ({
    availableTimes: [],
    loading: true,
    error: null
});

export const updateTimes  = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                ...state,
                availableTimes: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

const Booking = () => {
    const [state, dispatch] = useReducer(updateTimes , initializeTimes());
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAvailableTimes = async () => {
            try {
                const times = await fetchAPI(new Date());
                dispatch({ type: 'FETCH_SUCCESS', payload: times });
            } catch (error) {
                dispatch({ type: 'FETCH_ERROR', payload: error.message });
            }
        };

        fetchAvailableTimes();
    }, []);

    const handleFormSubmission = async (formData) => {
        try {
            if (await submitAPI(formData)) {
                navigate("/confirmed", { state: { formData } });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <main>
            <Nav />
            <BookingForm
                availableTimes={state.availableTimes}
                onSubmit={handleFormSubmission}
            />
        </main>
    );
};

export default Booking;