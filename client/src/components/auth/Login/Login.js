import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../../actions/authActions";
import TextFieldGroup from "../../Common/TextFieldGroup";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
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
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
      window.location.reload(false);
    }
    return null;
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="login flex justify-center min-h-screen bg-gray-100">
        <div className="container flex flex-col items-center pt-1">
          <h1 className="text-center font-display text-6xl font-medium">
            Log In
          </h1>
          <p className="text-lg text-center">
            Sign in to your Root Menu account
          </p>
          <form
            className=" sm:w-10/12 w-11/12 lg:w-7/12"
            onSubmit={this.onSubmit}
          >
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
            <input
              type="submit"
              className="text-white font-medium bg-button-1 cursor-pointer w-full rounded  mt-5 py-3 hover:bg-main-primary"
            />
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStatetoProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStatetoProps, { loginUser })(Login);
