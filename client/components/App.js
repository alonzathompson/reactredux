import React from 'react';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import FlashMessagesList from './flash/FlashMessagesList';
import Layout from './Layout';

class App extends React.Component{
	render(){
		return (
			<div>
			<NavigationBar />
			<FlashMessagesList />
				{this.props.children}
				<Layout />
				
				<Footer />
			</div>
		);np
	}
}

export default App;