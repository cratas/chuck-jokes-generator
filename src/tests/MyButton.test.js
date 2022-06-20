import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MyButton from "../components/UI/MyButton"


test('button text does not change on click', () => {
  // Arrange
  render(<MyButton text="Get random joke" />);

  // Act
  const buttonElement = screen.getByText("Get random joke");
  userEvent.click(buttonElement)

  // Assert
  const button = screen.getByText("Get random joke");
  expect(button).toBeInTheDocument()
})


