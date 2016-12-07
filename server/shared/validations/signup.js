import Validator from 'validator'
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data){
	let errors = {};

	if(Validator.isEmpty(data.username)) {
		errors.username = 'Field is Required';
	}
	if(Validator.isEmpty(data.email)) {
		errors.email = 'Field is Required';
	}
	if(!Validator.isEmail(data.email)) {
		errors.email = 'Email is invalid';
	}
	if(Validator.isEmpty(data.password)) {
		errors.password = 'Field is Required';
	}
	if(Validator.isEmpty(data.passwordConfirmation)) {
		errors.passwordConfirmation = 'Field is Required';
	}
	if(!Validator.equals(data.password, data.passwordConfirmation)) {
		errors.passwordConfirmation = 'Password not Confirmed';
	}
	if(Validator.isEmpty(data.timezone)) {
		errors.timezone = 'Field is Required';
	}

	return {
		errors,
		isValid: isEmpty(errors)
	}
}
