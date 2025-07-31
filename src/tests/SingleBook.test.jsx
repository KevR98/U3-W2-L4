import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import SingleBook from '../components/SingleBook';
import fantasy from '../data/fantasy.json';

describe('check the border changing', () => {
  it('makes the border red', () => {
    render(
      <SingleBook
        book={fantasy[0]}
        changeSelectedBook={() => {}}
        selectedBook={fantasy[0].asin}
      />
    );

    const card = screen.getByTestId('border-red');
    fireEvent.click(card);
    expect(card).toHaveStyle('border: 3px solid red');
  });
});
