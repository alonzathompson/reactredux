import React from 'react';
import timezones from '../../data/timezones';
import map from 'lodash/map';
import classnames from 'classnames';

class SignupForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
			passwordConfirmation: '',
			timezone: '',
			errors: {},
			isLoading: false
		}

    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  _handleSubmit(e) {
  	e.preventDefault();
  	this.setState({ errors: {}, isLoading: true })
  	this.props.userSignupRequest(this.state).then(
  		() => {},
  		({ data }) => this.setState({ errors: data, isLoading: false })
  	);
  	console.log(this.state);
  }

	render(){
		const { errors } = this.state;
		const options = map(timezones, (val, key) =>
			<option key={val} value={val}>{key}</option>
		);
		return(
			<form onSubmit={this._handleSubmit}>
				<h1>Join our commmunity!</h1>

				<div className={classnames("form-group", { 'has-error': errors.username })}>
					<label className="control-label">Username</label>
					<input
						onChange={this._handleChange}
						value={this.state.username}
						type="text"
						name="username"
						className="form-control"
					/>
					{errors.username && <span className="help-block">{errors.username}
					</span>}
				</div>

				<div className={classnames("form-group", { 'has-error': errors.email })}>
					<label className="control-label">Email</label>
					<input
						onChange={this._handleChange}
						value={this.state.email}
						type="text"
						name="email"
						className="form-control"
					/>
					{errors.email && <span className="help-block">{errors.email}
					</span>}
				</div>

				<div className={classnames("form-group", { 'has-error': errors.password })}>
					<label className="control-label">Password</label>
					<input
						onChange={this._handleChange}
						value={this.state.password}
						type="password"
						name="password"
						className="form-control"
					/>
					{errors.password && <span className="help-block">{errors.password}
					</span>}
				</div>

				<div className={classnames("form-group", { 'has-error': errors.passwordConfirmation })}>
					<label className="control-label">Password Confirmation</label>
					<input
						onChange={this._handleChange}
						value={this.state.passwordConfirmation}						
						type="password"
						name="passwordConfirmation"
						className="form-control"
					/>
					{errors.passwordConfirmation && <span className="help-block">{errors.passwordConfirmation}
					</span>}
				</div>

				<div className={classnames("form-group", { 'has-error': errors.timezone })}>
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
					{errors.timezone && <span className="help-block">{errors.timezone}
					</span>}
				</div>

					<div className="form-group">
						<button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
							Sign up
						</button>
					</div>

			</form>
		);
	}
}

SignupForm.propTypes = {
	userSignupRequest: React.PropTypes.func.isRequired
}

export default SignupForm;