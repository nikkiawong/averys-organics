import React from 'react';

function HeaderText(){
  let headerTextStyles = {
    position: 'absolute',
    top: '60%',
    left: '50%',
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    fontSize: "21px",
    color: '#555654'
  }
  let h1Styles = {
    margin: '0',
    fontWeight: 'normal',
    letterSpacing: '0.85px',
    fontSize: '55px',
    color: '#416336',
    marginBottom: "14px"
  };
  return (
    <div style={headerTextStyles}>
      <h1 style={h1Styles}>From our farm to your table.</h1>
      <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
    </div>
  );
}

export default HeaderText;
