import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile, setCurrentProfile } from "../../actions/dashboardActions";
import Spinner from "../Common/Spinner";
import TextFieldGroup from "../Common/TextFieldGroup";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dashboard: {
        loading: false,
        mainHeader: "das menu"
      },
      newHeader: '',
      needSave: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onChange(e){
      this.setState({
        newHeader: e.target.value
      });
  }

  onSubmit(e){
    e.preventDefault();
      const newdata = {newheader: this.state.newHeader};
      this.props.setCurrentProfile(newdata);
      this.setState({
        newHeader: ''
      });
}

  render() {
    const { user } = this.props.auth;
    const { loading } = this.props.dashboard;
    const { mainHeader } = this.props.dashboard;
    const { newHeader } = this.state;
    const errors = {};

    let dashboardContent;

    if (loading) {
      dashboardContent = <Spinner />;
    } else {
      console.log(this.props.dashboard);
      dashboardContent = 
      <div>
        <h3 className=" text-sm  ">Hello {user.name}</h3>
        <h4>{newHeader ? newHeader : mainHeader}</h4>
        <form onSubmit={this.onSubmit}> 
                <TextFieldGroup
                  placeholder="Menu Title"
                  name="name"
                  type="name"
                  value={this.state.newHeader}
                  onChange={this.onChange}
                  error={errors.name}
                />
                {newHeader &&  <input type="submit" className=/*"btn btn-info btn-block mt-4"*/'text-white font-medium bg-teal-700 w-full rounded  mt-5 py-3 hover:bg-teal-800 mb-32' value="Save Changes" />}
              </form>
      </div>;
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              
              {dashboardContent}

            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  dashboard: state.dashboard,
  auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile, setCurrentProfile })(Dashboard);
