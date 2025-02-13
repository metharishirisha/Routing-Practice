import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NotFound from './components/NotFound'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
