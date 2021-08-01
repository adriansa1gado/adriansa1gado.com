import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Layout from './Layout'
import Landing from '../pages/Landing'
import Portfolio from '../pages/Portfolio'
import About from '../pages/About'
import Notfound from '../pages/Notfound'

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/about" component={About} />
          <Route exact path="/404" component={Notfound} />
          <Redirect to="/404" />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
