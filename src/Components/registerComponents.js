import React, { Component } from 'react';
import '../css/register.css'

class registerComponents extends Component {
    constructor() {
        super();
        this.state = {
          fields: {},
          errors: {}
        }
  
        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
  
      };
  
      handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
          fields
        });
  
      }
  
      submituserRegistrationForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["firstname"] = "";
            fields["lastname"] = "";
            fields["emailid"] = "";
            fields["mobileno"] = "";
            fields["password"] = "";
            this.setState({fields:fields});
            alert("Form submitted");
        }
  
      }
  
      validateForm() {
  
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
  
        if (!fields["firstname"]) {
          formIsValid = false;
          errors["firstname"] = "*Please enter your username.";
        }
  
        if (typeof fields["firstname"] !== "undefined") {
          if (!fields["firstname"].match(/^[a-zA-Z ]*$/)) {
            formIsValid = false;
            errors["firstname"] = "*Please enter alphabet characters only.";
          }
        }
  
        if (!fields["lastname"]) {
            formIsValid = false;
            errors["lastname"] = "*Please enter your username.";
          }
    
          if (typeof fields["lastname"] !== "undefined") {
            if (!fields["lastname"].match(/^[a-zA-Z ]*$/)) {
              formIsValid = false;
              errors["lastname"] = "*Please enter alphabet characters only.";
            }
          }

        if (!fields["emailid"]) {
          formIsValid = false;
          errors["emailid"] = "*Please enter your email-ID.";
        }
  
        if (typeof fields["emailid"] !== "undefined") {
          //regular expression for email validation
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(fields["emailid"])) {
            formIsValid = false;
            errors["emailid"] = "*Please enter valid email-ID.";
          }
        }
  
        if (!fields["mobileno"]) {
          formIsValid = false;
          errors["mobileno"] = "*Please enter your mobile no.";
        }
  
        if (typeof fields["mobileno"] !== "undefined") {
          if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
            formIsValid = false;
            errors["mobileno"] = "*Please enter valid mobile no.";
          }
        }
  
        if (!fields["password"]) {
          formIsValid = false;
          errors["password"] = "*Please enter your password.";
        }
  
        if (typeof fields["password"] !== "undefined") {
          if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
            formIsValid = false;
            errors["password"] = "*Please enter secure and strong password.";
          }
        }
  
        this.setState({
          errors: errors
        });
        return formIsValid;
  
  
      }
  
  
  
    render() {
      return (
      <div >
       <div className="register">
          <h3>Registration page</h3>
          <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
         
          <label className="labelform">First Name</label>
          <input className="inputregister" type="text" name="firstname" value={this.state.fields.firstname} onChange={this.handleChange} />
          <div className="errorMsg">{this.state.errors.firstname}</div>

          <label className="labelform">Last Name</label>
          <input className="inputregister" type="text" name="lastname" value={this.state.fields.lastname} onChange={this.handleChange} />
          <div className="errorMsg">{this.state.errors.lastname}</div>

          <label className="labelform">Email ID</label>
          <input className="inputregister" type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
          <div className="errorMsg">{this.state.errors.emailid}</div>

          <label className="labelform">Mobile Number</label>
          <input className="inputregister" type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange}   />
          <div className="errorMsg">{this.state.errors.mobileno}</div>

          <label className="labelform">Password</label>
          <input className="inputregister" type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
          <div className="errorMsg">{this.state.errors.password}</div>

          
          
          <form className="genderdiv">
            <label className="labelgender">Gender</label>
            <input className="genderinput" type="radio" value="Male"/>Male
            <input type="radio" value="Female"/>Female
          </form><br></br>

          <div>
            <label  className="labelform">Address</label>
            <textarea className="textfield"></textarea>
          </div>
          <input type="submit" className="buttonregister"  value="Register"/>
          </form>
      </div>
  </div>
  
        );
    }
  
  
  }
  

export default registerComponents;