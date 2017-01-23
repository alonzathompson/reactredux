import React from 'react';
import NavigationBar from './NavigationBar';
import Footer from './Footer';


class Layout extends React.Component {
    render(){
      const MainStyle = {
          postion: 'relative',
          top: '51px'
      };
    return (
      <div style={MainStyle}>
        
         <main style={MainStyle}>
        {this.props.children}
        </main>
        
     </div>
    );
  }
}

export default Layout;