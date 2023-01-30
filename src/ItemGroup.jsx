import React from 'react';

export const ItemGroup = ({ children, title }) => {
  return (
    <div style={{ width: 250, padding: 12 }}>
      <h3 style={{ margin: '12px 0' }}>{title}</h3>
      {children}
    </div>
  );
};