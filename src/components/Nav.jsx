import React from 'react';
import { Link } from 'react-router-dom';

function Nav(){
  let navStyles = {
    width: '100%',
    backgroundColor: '#416336',
    height: '75px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'fixed',
    zIndex: '100',
    boxShadow: '1px 4px 14px 1px rgba(0,0,0,0.4)'
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
  let linkStyles = {
    color: "white",
    textDecoration: "none"
  }
  return (
    <div style={navStyles}>
      <Link style={linkStyles} to="/">Schedule</Link>
      <h3 style={h3Styles}>Avery's Organics</h3>
      <Link style={linkStyles} to="/month">Calendar</Link>
    </div>
  );
}

export default Nav;

// <img style={imgStyles} src='https://melbournechapter.net/images/teacher-apple-clipart-black-and-white-1.png'></img>
