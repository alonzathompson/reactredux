import React from 'react';
import classnames from 'classnames';

class FlashMessage extends React.Component{
	constructor(props){
		super(props);
		this._onClick = this._onClick.bind(this);
	}

	_onClick(){
		this.props.deleteFlashMessage(this.props.message.id);
	}

	render(){
		const { id, type, text } = this.props.message;
		return(
			<div className={classnames('alert', {
				'alert-success': type === 'success',
				'alert-danger': type === 'error'
			})}>
				<button onClick={this._onClick} className="close"><span>&times;</span></button>
				{text}
			</div>
		);
	}
}

FlashMessage.propTypes = {
	message: React.PropTypes.object.isRequired,
	deleteFlashMessage: React.PropTypes.func.isRequired
}

export default FlashMessage;