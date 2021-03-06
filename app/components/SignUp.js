// Include React
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import API from "./utils/API";

require('./signup.css');

export default class Signup extends Component { 

	constructor(props) {
    super(props);
    this.state = {
    	value: '',
    	password: '',
    	passwordRepeat: '',
    	email: '',
    	emailRepeat: ''
    };

    this.handlePasswordValidation = this.handlePasswordValidation.bind(this);
    this.handlePasswordRepeat = this.handlePasswordRepeat.bind(this);
    this.handleEmailValidation = this.handleEmailValidation.bind(this);
    this.handleEmailRepeat = this.handleEmailRepeat.bind(this);
    this.signUpUser = this.signUpUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

	handlePasswordValidation(event) {

		// password is passed in
		const passwordVal = this.refs.password.value;
		const passwordForm = this.refs.passwordForm;
		const passwordFeedback = this.refs.passwordFeedback;

		this.setState({
	  	'password': passwordVal
	  });

		const passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
	  if (!passwordRegEx.test(passwordVal)) {
	    passwordForm.classList.remove("has-success");
	    passwordForm.classList.add("has-error");
	    passwordFeedback.textContent = "Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and must be at least 8 characters long.";
	  } else {
	    passwordForm.classList.remove("has-error");

	    passwordForm.classList.add("has-success");
	    passwordFeedback.textContent = "Password set correctly!";    
	  }
	}

	handlePasswordRepeat(event) {
		const passwordVal = this.state.password;
		const passwordRepeat = this.refs.repeatPassword.value;
		const repeatPasswordForm = this.refs.repeatPasswordForm;
		const repeatPasswordFeedback = this.refs.repeatPasswordFeedback;

		this.setState({
	  	'passwordRepeat': passwordRepeat
	  });

		if (passwordVal !== passwordRepeat) {
      repeatPasswordForm.classList.remove("has-success");

      repeatPasswordForm.classList.add("has-error");
      repeatPasswordFeedback.textContent = "Passwords Don't Match";
    } else {
      repeatPasswordForm.classList.remove("has-error");

      repeatPasswordForm.classList.add("has-success");
      repeatPasswordFeedback.textContent = "Passwords Match!";    
    }
	}

 	handleEmailValidation(event) {

 		const emailVal = this.refs.email.value;
 		const emailForm = this.refs.emailForm;
 		const emailFeedback = this.refs.emailFeedback;
 		const emailAdditionalFeedback = this.refs.emailAdditionalFeedback;
	  const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

	  this.setState({
      'email': emailVal
    });

	  if (!emailRegEx.test(emailVal)) {
      emailForm.classList.remove("has-success");

      emailForm.classList.add("has-error");
      emailFeedback.textContent = "Invalid Email";
      emailAdditionalFeedback.textContent = "Ex: someone@example.com";
    
    } else {
      emailForm.classList.remove("has-error");

      emailForm.classList.add("has-success");
      emailFeedback.textContent = "Valid Email!";
      emailAdditionalFeedback.textContent = "";
    }
  }

  handleEmailRepeat(event) {

 		const emailVal = this.refs.emailRepeat.value;
 		const emailForm = this.refs.emailRepeatForm;
 		const emailFeedback = this.refs.emailRepeatFeedback;
	  const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

	  this.setState({
      'emailRepeat': emailVal
    });

	  if (!emailRegEx.test(emailVal)) {
      emailForm.classList.remove("has-success");

      emailForm.classList.add("has-error");
      emailFeedback.textContent = "Emails Don't Match";
    
    } else {
      emailForm.classList.remove("has-error");

      emailForm.classList.add("has-success");
      emailFeedback.textContent = "Emails Match!";
    }
  }

  signUpUser(email, password, balance) {
  	API.signUp({
      email: this.refs.email.value,
      password: this.refs.password.value,
      balance: this.refs.password.value
    }).then(function(data) {
      console.log("data " + JSON.stringify(data));
    }).catch(function(err) {
      console.log(err);
    });
  }

	handleSubmit(event) {
		event.preventDefault();

  	const email = this.state.email;
  	const password = this.state.password;
  	const balance = this.state.balance;

	let userData = {
      email: email,
      password: password,
      balance: balance
    };

    if (!userData.email || !userData.password) {
      return alert("Please don't leave fields blank");
    }

    // If we have an email and password, run the signUpUser function
    this.signUpUser(userData.email, userData.password, userData.balance);

    this.setState({
      value: '',
    	password: '',
    	passwordRepeat: '',
    	email: '',
    	emailRepeat: '',
    	balance: ''
    });
	}

  render() {
    return (
    	<div>
			<div id="registration-container" className="container-fluid">
			    <section className="container">
					<div className="container-page">		
					<form onSubmit={this.handleSubmit.bind(this)}>		
						<div className="col-md-6">
							<h3 className="dark-grey">Registration</h3>

							<div id="email-form" className="form-group col-lg-12" ref="emailForm">
								<label>Email Address</label>
								<input type="email" name="" ref="email" className="form-control" id="email-input" value={this.state.email} onChange={this.handleEmailValidation} />

							  <p id="email-feedback" className="" ref="emailFeedback"></p>
							  <small id="email-additional-feedback" ref="emailAdditionalFeedback" className="form-text text-muted"></small>
							</div>
							
							<div id="email-repeat-form" className="form-group col-lg-12" ref="emailRepeatForm">
								<label>Repeat Email Address</label>
								<input type="email" name="" ref="emailRepeat" className="form-control" id="repeat-email-input" value={this.state.emailRepeat} onChange={this.handleEmailRepeat} />
								<small id="email-repeat-feedback" className="" ref="emailRepeatFeedback"></small>
							</div>	
							
							<div id="password-form" className="form-group col-lg-12" ref="passwordForm">
								<label>Password</label>
								<input type="password" name="" ref="password" className="form-control" id="password-input" value={this.state.password} onChange={this.handlePasswordValidation} />
								<small id="password-feedback" ref="passwordFeedback" className=""></small>
							</div>
							
							<div id="repeat-password-form" className="form-group col-lg-12" ref="repeatPasswordForm">
								<label>Repeat Password</label>
								<input type="password" name="" ref="repeatPassword" className="form-control" id="repeat-password-input" value={this.state.passwordRepeat} onChange={this.handlePasswordRepeat} />
								<small id="repeat-password-feedback" className="" ref="repeatPasswordFeedback"></small>
							</div>		
							
							<div id="balance-form" ref="balanceForm" className="form-group col-lg-12">
								<label>Balance</label>
								<input type="" name="" ref="balance" className="form-control" id="balance-input" value={this.state.balance}/>
								<small id="username-feedback" ref="usernameFeedback" className=""></small>
							</div>

							<div className="col-sm-6">
								<input type="checkbox" className="checkbox" />Sigh up for our newsletter
							</div>

							<div className="col-sm-6">
								<input type="checkbox" className="checkbox" />Send notifications to this email
							</div>				
						
						</div>
					
						<div className="col-md-6">
							<h3 className="dark-grey">Terms and Conditions</h3>
							<p>
								By clicking on "Register" you agree to The Company's' Terms and Conditions
							</p>
							<p>
								While rare, prices are subject to change based on exchange rate fluctuations - 
								should such a fluctuation happen, we may request an additional payment. You have the option to request a full refund or to pay the new price. (Paragraph 13.5.8)
							</p>
							<p>
								Should there be an error in the description or pricing of a product, we will provide you with a full refund (Paragraph 13.5.6)
							</p>
							<p>
								Acceptance of an order by us is dependent on our suppliers ability to provide the product. (Paragraph 13.5.6)
							</p>
							
							<button type="submit" className="btn btn-primary signup">Register</button>
						</div>
					</form>
					</div>
				</section>
			</div>
		</div>
		)
	}
}