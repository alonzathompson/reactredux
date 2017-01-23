import React from 'react';

class ParallaxLogo extends React.Component{
  /*constructor(){
    super();
    this.state = {
      top: '200'
    };
  };
  componentDidMount(){
  window.addEventListener('scroll', this._handleScroll2);
  };
  componentWillUnmount(){
    window.removeEventListener('scroll', this._handleScroll2);
  };

const _handleScroll2 = () => {
  let y2 = window.pageYOffset;
  let scrollSpeed = -(y2 / 2.5)+200;
  if(y2 > 200){
  this.setState({
  top: scrollSpeed,
 }); 
  }else{
    this.setState({
      top: '200'
    });
  }
};

onScroll={this._handleScroll2}
*/

  render(){
    let myLogoStyle = {
       fontFamily: 'Quicksand',
        color: '#333',
        textShadow: '1px 3px 7px rgba(150, 150, 150, 1)',
        position: 'fixed',
        fontSize: '300%',
        padding: '2%',
        zIndex: '2'
    };
    return(
       <div className="text-center">  
        <div className="myBorder">
         <h1 className='header fixedLogo' style={myLogoStyle}>{this.props.name}</h1>
        </div>   
       </div>
    );
  }
}

export default ParallaxLogo;

