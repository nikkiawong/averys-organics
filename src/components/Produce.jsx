import React from 'react';
import PropTypes from 'prop-types';

function Produce(props){
  const listStyle = {
    listStyle: 'none',
    marginBottom: '8%',
    lineHeight: "2.5"
  };
  const liStyle = {
    display: "inline-block",
    marginRight: "30px",
    fontSize: '17px'
  }
  const h3Style = {
    fontSize: "30px"
  }
  return (
    <div style={listStyle}>
      <h3 style={h3Style}>{props.month}</h3>
      {props.selection.map((fruit, index) =>
        <li style={liStyle} key={index}>{fruit}</li>
      )}
    </div>
  );
}

Produce.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.arrayOf(PropTypes.string)
};

export default Produce;
