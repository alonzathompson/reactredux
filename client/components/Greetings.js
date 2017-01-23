import React from 'react';
import Header from './Header';
import Body from './Body';

class Greetings extends React.Component {
	render(){
		
		return(
			<div>
				<Header name="Alonza Thompson"/>
        		<Body />
			</div>
		);
	}
}

export default Greetings;