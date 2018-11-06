import React from 'react';
import HeaderText from './HeaderText';

function Header(){
  let headerStyles = {
    backgroundImage: 'url(https://images.unsplash.com/photo-1471193945509-9ad0617afabf?ixlib=rb-0.3.5&s=7b9a69a549fe3205796d13ef6ef4b19e&auto=format&fit=crop&w=1350&q=80)',
    height: '70vh',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'
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
