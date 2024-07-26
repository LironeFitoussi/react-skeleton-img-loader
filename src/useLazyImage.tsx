import React, { useState, useEffect, useCallback } from 'react';
import { Skeleton } from '@mui/material';

interface UseLazyImageOptions extends React.ImgHTMLAttributes<HTMLImageElement> {
  width: number;
  height: number;
}

const useLazyImage = (src: string, { width, height, alt = '', ...imgProps }: UseLazyImageOptions): React.ReactElement => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleImageLoad = useCallback(() => setLoaded(true), []);
  const handleImageError = useCallback(() => setError(true), []);

  const imageRef = useCallback((node: HTMLImageElement | null) => {
    if (node) {
      node.addEventListener('load', handleImageLoad);
      node.addEventListener('error', handleImageError);
    }
  }, [handleImageLoad, handleImageError]);

  useEffect(() => {
    setLoaded(false);
    setError(false);
  }, [src]);

  if (error) {
    return <div>Error loading image</div>;
  }

  return (
    <div style={{ position: 'relative', width, height }}>
      {!loaded && <Skeleton variant="rectangular" width={width} height={height} />}
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        {...imgProps}
        style={{
          display: loaded ? 'block' : 'none',
          ...imgProps.style,
        }}
      />
    </div>
  );
};

export default useLazyImage;
