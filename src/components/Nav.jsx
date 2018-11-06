import React from 'react';

function Nav(){
  let navStyles = {
    width: '100%',
    backgroundColor: '#73a059',
    height: '75px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '25px'
  };
  return (
    <div style={navStyles}>
      <h3>Avery's Organics</h3>
    </div>
  );
}

export default Nav;
