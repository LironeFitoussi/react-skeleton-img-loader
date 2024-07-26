import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Skeleton } from '@mui/material';

interface UseLazyImageOptions {
  width: number;
  height: number;
  alt?: string;
  style?: React.CSSProperties;
}

const useLazyImage = (src: string, { width, height, alt = '', style = {} }: UseLazyImageOptions): React.ReactElement => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleImageLoad = useCallback(() => setLoaded(true), []);
  const handleImageError = useCallback(() => setError(true), []);

  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (imageRef.current) {
      const img = imageRef.current;
      img.addEventListener('load', handleImageLoad);
      img.addEventListener('error', handleImageError);

      return () => {
        img.removeEventListener('load', handleImageLoad);
        img.removeEventListener('error', handleImageError);
      };
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
        style={{
          display: loaded ? 'block' : 'none',
          ...style,
        }}
      />
    </div>
  );
};

export default useLazyImage;
