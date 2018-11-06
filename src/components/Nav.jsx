import React from 'react';

function Nav(){
  let navStyles = {
    width: '100%',
    backgroundColor: '#416336',
    height: '75px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    zIndex: '100'
  };
  let h3Styles = {
    fontSize: '25px',
    fontWeight: 'normal',
    color: 'white',
    letterSpacing: '0.8px'
  };
  let imgStyles = {
    height: "40%",
    marginRight: "10px"
    };
  return (
    <div style={navStyles}>
      <img style={imgStyles} src='https://melbournechapter.net/images/teacher-apple-clipart-black-and-white-1.png'></img>
      <h3 style={h3Styles}>Avery's Organics</h3>
    </div>
  );
}

export default Nav;
