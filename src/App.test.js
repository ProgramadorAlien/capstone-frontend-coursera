
/*import { render, screen } from '@testing-library/react';
import BookingForm from './Components/BookingForm';
import { updateTimes, initializeTimes } from './Components/Booking'; 



test('Renders the BookingForm heading', () => {
  const AvailableTimes = ['17:00', '18:00', '20:00', '21:00', '22:00'];
  render(<BookingForm availableTimes={AvailableTimes} />);
  const headingElement = screen.getByText("Make a Reservation");
  expect(headingElement).toBeInTheDocument();
});

describe('initializeTimes function', () => {
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