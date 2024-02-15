import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import RockScissorsBagGame from './RockScissorsBagGame';

test('Renders game and checks result', () => {
  const { getByText } = render(<RockScissorsBagGame />);

  // Select a choice
  fireEvent.press(getByText('Rock'));

  // Check if the result is displayed
  expect(getByText(/Your Choice:/i)).toBeTruthy();
});