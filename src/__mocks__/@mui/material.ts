import React from 'react';

export const Skeleton: React.FC<any> = ({ children, ...props }) => 
  React.createElement('div', { 'data-testid': 'mui-skeleton', ...props }, children);

// Add other MUI components here as needed