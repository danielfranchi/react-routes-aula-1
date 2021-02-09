import { Route, Switch} from 'react-router-dom'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Portfolio from './pages/Portfolio/Portfolio'

function Routes() {
  return(
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contato" exact component={Contact} />
      <Route path="/portfolio" exact component={Portfolio} />
    </Switch>
  )
}

export default Routes