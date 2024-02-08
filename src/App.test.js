
import { render, screen, fireEvent  } from '@testing-library/react';
import BookingForm from './Components/BookingForm';
import { updateTimes, initializeTimes } from './Components/Booking'; 



/*test('Renders the BookingForm heading', () => {
  //const AvailableTimes = ['17:00', '18:00', '20:00', '21:00', '22:00'];
  render(<BookingForm availableTimes={AvailableTimes} />);
  const headingElement = screen.getByText("Make a Reservation");
  expect(headingElement).toBeInTheDocument();
});

/*describe('initializeTimes function', () => {
  it('should return the correct array of times', () => {
    // Arrange
    const expectedTimes = ['17:00', '18:00', '20:00', '21:00', '22:00'];

    // Act
    const result = initializeTimes();

    // Assert
    expect(result).toEqual(expectedTimes);
  });
});

describe('updateTimes function', () => {
  it('should return the same available times regardless of the date', () => {
    // Arrange
    const initialState = initializeTimes();
    const selectedDate = '2024-02-02';

    // Act
    const result = updateTimes(initialState, selectedDate);

    // Assert
    expect(result).toEqual(initialState);
  });
});*/


// Test suite for the initializeTimes function
describe('initializeTimes function', () => {
  // Test case to check if initializeTimes returns the correct initial state object
  it('should return the correct initial state object', () => {
      // Call the initializeTimes function
      const initialState = initializeTimes();

      // Define the expected initial state object
      const expectedState = {
          availableTimes: [],
          loading: true,
          error: null
      };

      // Assert that the returned state matches the expected state
      expect(initialState).toEqual(expectedState);
  });
});




describe('updateTimes function', () => {
    it('should update state correctly for FETCH_SUCCESS action', () => {
        // Define initial state
        const initialState = {
            availableTimes: [],
            loading: true,
            error: null
        };

        // Define action for FETCH_SUCCESS
        const action = {
            type: 'FETCH_SUCCESS',
            payload: ['10:00', '11:00'] // Example payload for successful fetch
        };

        // Call updateTimes with initial state and action
        const newState = updateTimes(initialState, action);

        // Define expected state after FETCH_SUCCESS
        const expectedState = {
            availableTimes: ['10:00', '11:00'],
            loading: false,
            error: null
        };

        // Assert that the returned state matches the expected state
        expect(newState).toEqual(expectedState);
    });

    it('should update state correctly for FETCH_ERROR action', () => {
        // Define initial state
        const initialState = {
            availableTimes: [],
            loading: true,
            error: null
        };

        // Define action for FETCH_ERROR
        const action = {
            type: 'FETCH_ERROR',
            payload: 'Failed to fetch available times' // Example error message
        };

        // Call updateTimes with initial state and action
        const newState = updateTimes(initialState, action);

        // Define expected state after FETCH_ERROR
        const expectedState = {
            availableTimes: [],
            loading: false,
            error: 'Failed to fetch available times'
        };

        // Assert that the returned state matches the expected state
        expect(newState).toEqual(expectedState);
    });

    it('should return the same state for unknown action types', () => {
        // Define initial state
        const initialState = {
            availableTimes: [],
            loading: true,
            error: null
        };

        // Define an unknown action
        const action = {
            type: 'UNKNOWN_ACTION',
            payload: 'Something' // Example payload for unknown action
        };

        // Call updateTimes with initial state and unknown action
        const newState = updateTimes(initialState, action);

        // Assert that the returned state is the same as the initial state
        expect(newState).toEqual(initialState);
    });
});


describe('BookingForm', () => {
  const availableTimes = ['10:00 AM', '12:00 PM', '2:00 PM'];
  const onSubmit = jest.fn();

  it('renders with correct attributes', () => {
      render(<BookingForm availableTimes={availableTimes} onSubmit={onSubmit} />);

      const dateInput = screen.getByLabelText('Choose date');
      expect(dateInput).toHaveAttribute('type', 'date');
      expect(dateInput).toBeRequired();

      const timeSelect = screen.getByLabelText('Choose time');
      expect(timeSelect).toHaveAttribute('id', 'res-time');
      expect(timeSelect).toHaveValue('');
      expect(timeSelect).toHaveAttribute('required');

      const guestsInput = screen.getByLabelText('Number of guests');
      expect(guestsInput).toHaveAttribute('type', 'number');
      expect(guestsInput).toHaveAttribute('placeholder', '1');
      expect(guestsInput).toHaveAttribute('min', '1');
      expect(guestsInput).toHaveAttribute('max', '10');
      expect(guestsInput).toBeRequired();

      const occasionSelect = screen.getByLabelText('Occasion');
      expect(occasionSelect).toHaveAttribute('id', 'occasion');
      expect(occasionSelect).toHaveValue('Birthday');
  });

  it('updates state on input change', () => {
      render(<BookingForm availableTimes={availableTimes} onSubmit={onSubmit} />);

      const dateInput = screen.getByLabelText('Choose date');
      fireEvent.change(dateInput, { target: { value: '2024-02-08' } });
      expect(dateInput).toHaveValue('2024-02-08');

      const timeSelect = screen.getByLabelText('Choose time');
      fireEvent.change(timeSelect, { target: { value: '10:00 AM' } });
      expect(timeSelect).toHaveValue('10:00 AM');

      const guestsInput = screen.getByLabelText('Number of guests');
      fireEvent.change(guestsInput, { target: { value: '5' } });
      expect(parseInt(guestsInput.value)).toBe(5); // Parse value to integer for comparison

      const occasionSelect = screen.getByLabelText('Occasion');
      fireEvent.change(occasionSelect, { target: { value: 'Anniversary' } });
      expect(occasionSelect).toHaveValue('Anniversary');
  });

  
});