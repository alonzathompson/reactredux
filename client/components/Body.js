import React from 'react';

class Body extends React.Component{
  render(){
    var bodyStyle = {
      position: 'relative',
      width: '100%',
      height: '600px',
      backgroundColor: '#f8f8f8',
      zIndex: '4'
    };
     
    return(
      <div style={bodyStyle}>               
        
      </div>
    );
  }
}

export default Body;