import React from 'react';
import timezones from '../../data/timezones';
import map from 'lodash/map';

class SignupForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
			passwordConfirmation: '',
			timezone: ''
		}

    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  _handleSubmit(e) {
  	e.preventDefault();
  	console.log(this.state);
  }

	render(){
		const options = map(timezones, (val, key) =>
			<option key={val} value={val}>{key}</option>
		);
		return(
			<form onSubmit={this._handleSubmit}>
				<h1>Join our commmunity!</h1>

				<div className="form-group">
					<label className="control-label">Username</label>
					<input
						onChange={this._handleChange}
						value={this.state.username}
						type="text"
						name="username"
						className="form-control"
					/>
				</div>

				<div className="form-group">
					<label className="control-label">Email</label>
					<input
						onChange={this._handleChange}
						value={this.state.email}
						type="text"
						name="email"
						className="form-control"
					/>
				</div>

				<div className="form-group">
					<label className="control-label">Password</label>
					<input
						onChange={this._handleChange}
						value={this.state.password}
						type="password"
						name="password"
						className="form-control"
					/>
				</div>

				<div className="form-group">
					<label className="control-label">Password Confirmation</label>
					<input
						onChange={this._handleChange}
						value={this.state.passwordConfirmation}						
						type="password"
						name="passwordConfirmation"
						className="form-control"
					/>
				</div>

				<div className="form-group">
					<label className="control-label">Timezone</label>
					<select					
						name="timezone"
						className="form-control"
						onChange={this._handleChange}
						value={this.state.timezone}	
					>
						<option value='' disabled>Choose your timezone</option>
						{options}
					</select>
				</div>

					<div className="form-group">
						<button className="btn btn-primary btn-lg">
							Sign up
						</button>
					</div>

			</form>
		);
	}
}

export default SignupForm;