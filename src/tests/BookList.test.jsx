import { describe, expect, it } from 'vitest';
import BookList from '../components/BookList';
import { render, screen } from '@testing-library/react';
import fantasy from '../data/fantasy.json';

describe('Checks the books is in the DOM', () => {
  it('All the books appears'),
    () => {
      render(<BookList books={fantasy} />);
      const booklist = screen.getAllByTestId('book-list');
      expect(booklist).toHaveLength(50);
    };
});
