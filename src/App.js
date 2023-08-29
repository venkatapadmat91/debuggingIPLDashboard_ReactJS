/* fix1: Switch component should be imported */

import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import NotFound from './components/NotFound'
import TeamMatches from './components/TeamMatches'

import './App.css'

const App = () => (
  /* fix-2: routes must be wrapped with switch component from 'react-router-dom' */
  <Switch>
    {/* fix-3: 'exact' keyword should be added */}
    <Route exact path="/" component={Home} />
    {/* fix-4: the route component must be given the prop "component" */}
    {/* fix5: when mentioning path parameters for a route we need to use: ":" before the variable */}
    <Route path="/team-matches/:id" component={TeamMatches} />
    <Route component={NotFound} />
  </Switch>
)

export default App
