import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import SingleBook from '../components/SingleBook';

describe('check the border changing', () => {
  it('makes the border red', () => {
    render(<SingleBook />);

    const card = screen.queryByTestId('border-red');
    fireEvent.click(card);
    expect(card).toHaveStyle('red');
  });
});
