import { render, screen } from '@testing-library/react';
import Header from "../components/Content/Header"


test('header contains image', () => {
    // Arrange
    render(<Header />);
  
    // Assert
    expect(screen.getByRole("img")).toBeInTheDocument();
  })
  
  