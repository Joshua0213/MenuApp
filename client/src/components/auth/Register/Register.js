import React, { Component } from "react";
import "./CSSRegister.css";
import {connect} from 'react-redux';
import {registerUser} from '../../../actions/authActions';
import PropTypes from 'prop-types';
import TextFieldGroup from '../../Common/TextFieldGroup';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
      profile:{mainheader:'My Menu'}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.errors !== prevProps.errors) {
      this.setState({ errors: this.props.errors });
    }
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
      window.location.reload(false);
    }
    return null;
  }

  componentDidMount(){
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
      window.location.reload(false);
    }
    return null;
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e){
      e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
            profile:this.state.profile
        }

        this.props.registerUser(newUser);
  }

  render() {
    const {errors} = this.state;
    
    return (
      <div className="register">
        
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="text-center">Sign Up</h1>
              <p className="lead text-center">Create your Menu Maker account</p>
              <form onSubmit={this.onSubmit}>
              <TextFieldGroup
                  placeholder="Name"
                  name="name"
                  type="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  error={errors.name}
                />
                <TextFieldGroup
                  placeholder="Email Address"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                />
                <TextFieldGroup
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  error={errors.password}
                />
                <TextFieldGroup
                  placeholder="Confirm Password"
                  name="password2"
                  type="password"
                  value={this.state.password2}
                  onChange={this.onChange}
                  error={errors.password2}
                />
               
                <input type="submit" className=/*"btn btn-info btn-block mt-4"*/'c-landing__button c-register__button' />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, {registerUser})(Register);
