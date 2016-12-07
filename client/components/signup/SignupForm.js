import React from 'react';
import timezones from '../../data/timezones';
import map from 'lodash/map';
import classnames from 'classnames';
import validateInput from '../../../server/shared/validations/signup';
import TextFieldGroup from '../common/TextFieldGroup';

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

  isValid(){
  	const { errors, isValid } = validateInput(this.state);

  	if(!isValid) {
  		this.setState({ errors });
  	}

  	return isValid;
  }

  _handleSubmit(e) {
  	e.preventDefault();

  	if (true){
	  	this.setState({ errors: {}, isLoading: true })
	  	this.props.userSignupRequest(this.state).then(
	  		() => {
	  			this.context.router.push('/');
	  		},
	  		({ data }) => this.setState({ errors: data, isLoading: false })
	  	);
  	}
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

				<TextFieldGroup
					error={errors.username}
					label="username"
					onChange={this._handleChange}
					value={this.state.username}
					field="username"						
				/>
					

				<TextFieldGroup
					error={errors.email}
					label="Email"
					onChange={this._handleChange}
					value={this.state.email}
					field="email"						
				/>

				<TextFieldGroup
					error={errors.password}
					label="Password"
					onChange={this._handleChange}
					value={this.state.password}
					field="password"	
					type="password"					
				/>

				<TextFieldGroup
					error={errors.passwordConfirmation}
					label="Passord Confimation"
					onChange={this._handleChange}
					value={this.state.passwordConfirmation}
					field="passwordConfirmation"	
					type="password"					
				/>

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

SignupForm.contextTypes = {
	router: React.PropTypes.object.isRequired
}

export default SignupForm;