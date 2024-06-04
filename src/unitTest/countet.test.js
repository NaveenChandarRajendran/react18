import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
import Counter from './counter';

// test('renders counter with initial state', () => {
//   render(<Counter />);
//   const countElement = screen.getByText(/count:/i);
//   expect(countElement).toHaveTextContent('Count: 0');
// });

// test('increments count when button is clicked', () => {
//   render(<Counter />);
//   const buttonElement = screen.getByText(/increment/i);
//   fireEvent.click(buttonElement);
//   const countElement = screen.getByText(/count:/i);
//   expect(countElement).toHaveTextContent('Count: 1');
// });

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test("button render in ui", () => {
    render(<Counter />);
    const countElement = screen.getByText(/count:/i);
    expect(countElement).toHaveTextContent('Count: 0');
})


test("testing for click", () => {
    render(<Counter />);
    const buttonElement = screen.getByText(/increment/i);
    fireEvent.click(buttonElement);
    const countElement = screen.getByText(/count:/i);
    expect(countElement).toHaveTextContent('Count: 1');
})
