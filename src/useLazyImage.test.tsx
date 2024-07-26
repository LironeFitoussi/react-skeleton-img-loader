import React from 'react';
import { render, act, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import useLazyImage from './useLazyImage';

const TestComponent: React.FC<{ src: string; width: number; height: number }> = ({ src, width, height }) => {
  const lazyImage = useLazyImage(src, { width, height });
  return <div>{lazyImage}</div>;
};

describe('useLazyImage', () => {
  it('renders skeleton initially', () => {
    const { container } = render(<TestComponent src="test.jpg" width={100} height={100} />);

    // Debug output
    console.log(container.innerHTML);

    // Check if Skeleton is present using data-testid
    const skeleton = container.querySelector('[data-testid="mui-skeleton"]');
    expect(skeleton).toBeInTheDocument();

    // Check if img is present with display none
    const img = container.querySelector('img');
    expect(img).toHaveStyle({ display: 'none' });
  });

  it('renders image after load', async () => {
    const { container } = render(<TestComponent src="test.jpg" width={100} height={100} />);
    
    // Get the img element and dispatch load event
    const img = container.querySelector('img');
    expect(img).not.toBeNull();

    if (img) {
      // Simulate image load
      act(() => {
        img.dispatchEvent(new Event('load', { bubbles: true }));
      });
    }

    // Wait for DOM updates
    await waitFor(() => {
      expect(container.querySelector('img')).toHaveStyle({ display: 'block' });
      expect(container.querySelector('[data-testid="mui-skeleton"]')).not.toBeInTheDocument();
    });
  });
});
