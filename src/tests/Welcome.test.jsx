import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Welcome from '../components/Welcome';

describe('Testing the initial mounting', () => {
  it('Cheks if the component is in the DOM'),
    () => {
      render(<Welcome />);

      const title = screen.getByText('Benvenuti in EpiBooks!');

      expect(title).toBeInTheDocument();
    };
});
