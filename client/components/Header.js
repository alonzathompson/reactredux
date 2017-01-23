import React from 'react';
import ParallaxLogo from './ParallaxLogo';

class Header extends React.Component {
  
  render(){ 
    return(
      <div>
        <div className="myHeaderBackground">
          <ParallaxLogo name={this.props.name}/>    
        </div>
      </div>
    );
  }
}

export default Header;