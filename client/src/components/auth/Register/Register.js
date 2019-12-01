import React, { Component } from "react";
import "./CSSRegister.css";
import classnames from 'classnames';
import {connect} from 'react-redux';
import {registerUser} from '../../../actions/authActions';
import PropTypes from 'prop-types';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

 // componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
  //   if (this.props.errors !== prevProps.errors) {
  //     this.;
  //   }
  // }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.errors !== prevProps.errors) {
      this.setState({ errors: this.props.errors });
    }
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
    return null;
  }

  componentDidMount(){
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
    return null;
  }

  // static getDerivedStateFromProps(nextProps, prevState){
  //     if(nextProps.errors){
  //       return{
  //         errors: nextProps.errors
  //       };
  //     }
  //     return null;
  // }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e){
      e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
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
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.name
                    })}
                    placeholder="Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                  {errors.name && (<div className='invalid-feedback'>{errors.name}</div>)}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.email
                    })}
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  {errors.email && (<div className='invalid-feedback'>{errors.email}</div>)}
                </div>
                
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.password
                    })}
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                   {errors.password && (<div className='invalid-feedback'>{errors.password}</div>)}
                </div>
               
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.password2
                    })}
                    placeholder="Confirm Password"
                    name="password2"
                    value={this.state.password2}
                    onChange={this.onChange}
                  />
                {errors.password2 && (<div className='invalid-feedback'>{errors.password2}</div>)}
                </div>
               
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
