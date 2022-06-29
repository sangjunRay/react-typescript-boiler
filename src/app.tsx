import React from 'react';

export const App = () => (
  <>
    <div>React + TypeScript + Webpack!</div>
    <p>now server: {process.env.NODE_ENV}</p>
    <p>env: {process.env.REACT_APP_URL}</p>
  </>
);
