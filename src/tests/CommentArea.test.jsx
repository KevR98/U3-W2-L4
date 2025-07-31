import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import CommentArea from '../components/CommentArea';
import fantasy from '../data/fantasy.json';

describe('Checks the CommentArea is in the DOM', () => {
  it('Expect the render of the CommentArea ', async () => {
    render(<CommentArea asin={fantasy.asin} />);
    const comment = await screen.findAllByTestId('comment-area');
    expect(comment[0]).toBeInTheDocument();
  });
});
