import React from 'react';

class Footer extends React.Component{
	render(){
		return(
		<footer className="foot">
          <div className="footer-container">
            <a className="footer-content" href="https://www.linkedin.com/in/alonza-thompson-507169108" target="_blank"><i className="fa fa-linkedin fa-3x" aria-hidden="true"></i></a>
            <a className="footer-content" href="https://twitter.com/Ar_traun_Works" target="_blank"><i className="fa fa-twitter fa-3x" aria-hidden="true"></i></a>
            <a className="footer-content" href="https://github.com/alonzathompson" target="_blank"><i className="fa fa-github fa-3x" aria-hidden="true"></i></a>
          </div>
        </footer>
		);
	}
}

export default Footer;