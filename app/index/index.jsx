import React from 'react';
require("./index.less")
import { Link } from 'react-router'
import { connect, getState } from 'react-redux'
import { sampleOne, sampleTwo } from '../redux/actions'

class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.name
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
        <h1 className="index" >Index</h1>
        <button onClick={this.props.onButtonClick} >Click Me</button>
        <br></br>
        <h1>{this.props.number}</h1>
        <br></br>
        <label>
          Name:
          <input value={this.state.value}  onChange={this.handleChange} />
        </label>
        <h1>{this.props.name}</h1>
        <button type="submit" value={this.state.value} onClick={this.props.handleSubmit}>Submit</button>
        <br></br>
        <Link to="/about">About</Link>
        <br></br>
        <Link to="/brokenlink">Error</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    number: state.sampleOne.num,
    name: state.sampleTwo.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onButtonClick: (e) => {
      dispatch(sampleOne())
    },
    handleSubmit: (e) => {
      dispatch(sampleTwo(e.target.value))
    }
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)

export default App
