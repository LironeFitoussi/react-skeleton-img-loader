# react-skeleton-img-loader by Lirone Fitoussi

A React hook for lazy loading images with an integrated Material-UI skeleton loader.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Examples](#examples)
- [TypeScript Support](#typescript-support)
- [Contributing](#contributing)
- [License](#license)
- [Changelog](#changelog)

## Installation

```bash
npm install react-skeleton-img-loader @mui/material
```

Ensure you have the peer dependencies installed:

```bash
npm install react @mui/material @emotion/react @emotion/styled
```

## Usage

```jsx
import React from 'react';
import useLazyImage from 'react-skeleton-img-loader';

const MyComponent = () => {
  const lazyImage = useLazyImage('https://example.com/image.jpg', {
    width: 300,
    height: 200,
    alt: 'Example image',
  });

  return (
    <div>
      <h1>My Lazy Loaded Image</h1>
      {lazyImage}
    </div>
  );
};

export default MyComponent;
```

## API Reference

### `useLazyImage(src, options)`

A hook that returns a React element containing a lazy-loaded image with a skeleton loader.

#### Parameters

- `src` (string): The source URL of the image to be loaded.
- `options` (object):
  - `width` (number): The width of the image and skeleton.
  - `height` (number): The height of the image and skeleton.
  - `alt` (string, optional): The alt text for the image. Default: ''.
  - `...imgProps` (object, optional): Any additional props to be passed to the img element.

#### Returns

(React.ReactElement): A div containing both the skeleton and the image.

## Examples

### Basic Usage

```jsx
const MyComponent = () => {
  const lazyImage = useLazyImage('https://example.com/image.jpg', {
    width: 300,
    height: 200,
    alt: 'A beautiful landscape',
  });

  return <div>{lazyImage}</div>;
};
```

### With Additional Image Props

```jsx
const MyComponent = () => {
  const lazyImage = useLazyImage('https://example.com/image.jpg', {
    width: 300,
    height: 200,
    alt: 'A beautiful landscape',
    className: 'my-image-class',
    style: { borderRadius: '8px' },
  });

  return <div>{lazyImage}</div>;
};
```

## TypeScript Support

The `useLazyImage` hook includes TypeScript definitions. Here's an example of how to use it with TypeScript:

```typescript
import React from 'react';
import useLazyImage from 'react-skeleton-img-loader';

interface MyComponentProps {
  imageSrc: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ imageSrc }) => {
  const lazyImage = useLazyImage(imageSrc, {
    width: 300,
    height: 200,
    alt: 'Example image',
  });

  return (
    <div>
      <h1>My Lazy Loaded Image</h1>
      {lazyImage}
    </div>
  );
};

export default MyComponent;
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

### [1.0.0] - 2023-07-26

#### Added
- Initial release of useLazyImage hook
- Lazy loading functionality for images
- Skeleton loader using Material-UI
- TypeScript support
- Basic documentation and examples

