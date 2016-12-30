import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/index/index.jsx';
import Signup from './components/signup/signup.jsx';
import Error from './components/error/error.jsx'
import { Router, Route, Link, browserHistory, IndexRoute} from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import app from './redux/reducers'

const store = createStore(
  app,
  applyMiddleware(thunk)
)

const App = React.createClass({
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
})


ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Index}/>
        <Route path="/signup" component={Signup}/>
        <Route path="*" component={Error}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'))
