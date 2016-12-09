import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index/index.jsx';
import About from './about/about.jsx';
import Error from './error/error.jsx'
import { Router, Route, Link, browserHistory, IndexRoute} from 'react-router'

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
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index}/>
      <Route path="/about" component={About}/>
      <Route path="*" component={Error}/>
    </Route>
  </Router>
), document.getElementById('root'))
