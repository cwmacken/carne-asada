import React from 'react';
import { Link } from 'react-router'
require("./signup.less")
import { connect, getState } from 'react-redux'
import { Button, Grid, Row, Col } from 'react-bootstrap';
import {createAccount, watchUserChange} from '../../redux/actions'
import Navbarcomp from '../navbar/navbar.jsx'

class Signup extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: null,
      passwordOne: null,
      passwordTwo: null,
    };

    this.createAccount = this.createAccount.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePasswordOne = this.handleChangePasswordOne.bind(this);
    this.handleChangePasswordTwo = this.handleChangePasswordTwo.bind(this);

    this.props.watchUserChange();
  }

  handleChangePasswordOne(event){
    this.setState({passwordOne: event.target.value});
  }

  handleChangePasswordTwo(event){
    this.setState({passwordTwo: event.target.value});
  }

  handleChangeEmail(event){
    this.setState({email: event.target.value});
  }

  createAccount(){

    if(this.state.email === null){
      this.setState({warning: "missing email"});
    }else if(this.state.passwordOne === null){
      this.setState({warning: "missing password"});
    }else if(this.state.passwordOne === this.state.passwordTwo){
      this.props.createAccount(this.state)
      this.setState({warning: ""});
    }else{
      this.setState({warning: "passwords dont match"});
    }

  }

  render() {
    return (
      <div>
        <Navbarcomp />
        <Grid>
          <Row>
            <Col xs={12}>
              <h1 className="about">Sign UP</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              Email:<input type="text" onChange={this.handleChangeEmail}/>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              Password: <input type="password" onChange={this.handleChangePasswordOne}/>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              Password Confirm: <input type="password" onChange={this.handleChangePasswordTwo}/>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <button type="submit" onClick={this.createAccount}>Submit</button>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Link to="/">Index</Link>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  // TODO: update with notifcation that the signup worked
  // TODO: clean up this
  return {
    number: state.sampleOne.num,
    name: state.sampleTwo.name,
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createAccount: (state) => {
      dispatch(createAccount(state.email, state.passwordOne))
    },
    watchUserChange: () =>{
      dispatch(watchUserChange())
    }
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup)

export default App
