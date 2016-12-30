import React from 'react';
require("./index.less")
import { Button, Grid, Row, Col  } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router'
import { connect, getState } from 'react-redux'
import { sampleOne, sampleTwo, watchUserChange, login, signout, getTest, postTest} from '../../redux/actions'
import Navbarcomp from '../navbar/navbar.jsx'

class Index extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: this.props.name,
      email: null,
      passwordOne: null,
      passwordTwo: null,
      emailLogin: null,
      passwordLogin: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);



    this.handleChangeEmailLogin= this.handleChangeEmailLogin.bind(this);
    this.handleChangePasswordLogin = this.handleChangePasswordLogin.bind(this);
    this.login = this.login.bind(this);

    this.props.watchUserChange();

  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(){
    this.props.handleSubmit(this.state)
  }

  handleChangeEmailLogin(event){
    this.setState({emailLogin: event.target.value});
  }

  handleChangePasswordLogin(event){
    this.setState({passwordLogin: event.target.value});
  }

  login(){
    this.props.login(this.state)
  }

  render() {
    return (
      <div>
        <Navbarcomp />
        <Grid>
        <Row className="row">
          <Col xs={10} xsOffset={2} md={12} mdOffset={0} >
            <h1 className="index">Index</h1>
          </Col>
        </Row >
        <Row>
          <Col xs={12}>
            <h1>GET Endpoint Sample</h1>
            <button onClick={this.props.getTest} >GET TEST</button>
            <h1>{this.props.endpoint.text}</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h1>POST Endpoint Sample</h1>
            <button onClick={this.props.postTest} >POST TEST</button>
            <h1>{this.props.endpoint.postText}</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h1>Client Sample One</h1>
            <button onClick={this.props.onButtonClick} >Click Me</button>
            <h2>{this.props.number}</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h1>Client Sample Two</h1>
            <h3>Name:</h3>
            <input value={this.state.value}  onChange={this.handleChange} />
            <h3>{this.props.name}</h3>
            <button type="submit" onClick={this.handleSubmit} >Submit</button>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h1>Login</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            Email:<input type="text" onChange={this.handleChangeEmailLogin}/>
          </Col>
          <Col xs={12}>
            Password: <input type="password" onChange={this.handleChangePasswordLogin}/>
          </Col>
          <Col xs={12}>
            <button type="submit" onClick={this.login}>Submit</button>
          </Col>
          <Col xs={12}>
            <button type="submit" onClick={this.props.signout}>Signout</button>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Link to="/signup">Sign Up</Link>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h2>Hey {this.props.auth.email}</h2>
            <h2>ERROR {this.props.auth.errorMessage}</h2>
          </Col>
        </Row>
      </Grid>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    number: state.sampleOne.num,
    name: state.sampleTwo.name,
    auth: state.auth,
    endpoint: state.endpoint
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onButtonClick: (e) => {
      dispatch(sampleOne())
    },
    handleSubmit: (state) => {
      dispatch(sampleTwo(state.value))
    },
    createAccount: (state) => {
      dispatch(attemptLogin(state.email, state.passwordOne))
    },
    login: (state) => {
      dispatch(login(state.emailLogin, state.passwordLogin))
    },
    signout: () => {
      dispatch(signout())
    },
    watchUserChange: () =>{
      dispatch(watchUserChange())
    },
    getTest: () => {
      dispatch(getTest())
    },
    postTest: () => {
      dispatch(postTest())
    }
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)

export default App
