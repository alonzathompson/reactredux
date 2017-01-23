import React from 'react';
import { Link } from 'react-router';

class NavigationBar extends React.Component {
	constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    // const featuredClass = location.pathname === "/" ? "active" : "";
    // const archivesClass = location.pathname.match(/^\/archives/) ? "active" : "";
    // const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li activeClassName="active" onlyActiveOnIndex={true}>
                <Link to="/" onClick={this.toggleCollapse.bind(this)}>Featured</Link>
              </li>
              
              <li activeClassName="active">
                <Link to="/signup" onClick={this.toggleCollapse.bind(this)}>Sign-Up</Link>
			  </li>
            </ul>
          </div>
        </div>
      </nav>
		);
	}
}

export default NavigationBar;

//<Link to="/" className="navbar-brand">What it do</Link>
//<li><Link to="/signup">Sign up</Link></li>