import React from 'react';
import HeaderText from './HeaderText';

function Header(){
  let headerStyles = {
    backgroundImage: 'url(https://images.unsplash.com/photo-1516211697506-8360dbcfe9a4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=52e95cdd2653761514253e73eeb938ac&auto=format&fit=crop&w=1500&q=80)',
    height: '70vh',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    position: 'relative'
  };
  return (
    <div style={headerStyles}>
      <div>
        <HeaderText/>
      </div>
    </div>
  );
}

export default Header;
