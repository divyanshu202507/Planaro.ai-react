import React from 'react';
import Top from './Top.jsx';
import Body from './Body.jsx';

const Web = () => {
  return (
    <div>
      <Top />   {/* Always visible */}
      <Body />  {/* Sidebar + Routes for pages */}
    </div>
  );
};

export default Web;
