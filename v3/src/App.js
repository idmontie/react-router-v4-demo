import React from 'react'
import {
  // NOTE we have to explicitly use a browser history
  browserHistory,
  IndexRoute,
  Router,
  Route,
  Link
} from 'react-router'

// NOTE all of our routes have to be defined top level
// We cannot render a route
const BasicExample = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Wrapper}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}>
        <IndexRoute component={() => (
          <h3>Please select a topic.</h3>
        )}/>
        <Route path={`/topics/:topicId`} component={Topic}/>
      </Route>
    </Route>
  </Router>
)

const Wrapper = ({children}) => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/topics">Topics</Link></li>
    </ul>

    <hr/>
    {children}
  </div>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

// There's no easy way to get the current matched url
// without the query or trailing dash (unless your
// route redirects)
const Topics = ({children}) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`/topics/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`/topics/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`/topics/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>
    {children}
  </div>
)

const Topic = ({ params }) => (
  <div>
    <h3>{params.topicId}</h3>
  </div>
)

export default BasicExample
