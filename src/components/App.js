import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Landing from '../pages/Landing'
import Notfound from '../pages/Notfound'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/404" component={Notfound} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  )
}

export default App
