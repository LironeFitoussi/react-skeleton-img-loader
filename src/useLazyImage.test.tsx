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
    expect(container.querySelector('.MuiSkeleton-root')).toBeInTheDocument();
    expect(container.querySelector('img')).toHaveStyle({ display: 'none' });
  });

  it('renders image after load', async () => {
    const { container } = render(<TestComponent src="test.jpg" width={100} height={100} />);
    
    const img = container.querySelector('img');
    expect(img).not.toBeNull();

    if (img) {
      act(() => {
        img.dispatchEvent(new Event('load'));
      });
    }

    await waitFor(() => {
      expect(container.querySelector('img')).toHaveStyle({ display: 'block' });
      expect(container.querySelector('.MuiSkeleton-root')).not.toBeInTheDocument();
    });
  });
});