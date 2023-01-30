import React from "react";

export const Item = ({ children, title, subtitle }) => {
  return (
    <div style={{ paddingLeft: 24 }}>
      <h4 style={{ margin: '12px 0', fontSize: 14 }}>{title}</h4>
      <h5 style={{ margin: '8px 0', fontSize: 13, fontWeight: 400 }}>{subtitle}</h5>
      {children}
    </div>
  );
};