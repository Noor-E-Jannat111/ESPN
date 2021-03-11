import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LeagueContainer from './Components/LeagueContainer/LeagueContainer';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import PageNotFound from './Components/PageNotFound/PageNotFound';
import LeagueDetails from './Components/LeagueDetail/LeagueDetails';
import initFontAwesome from "../src/fontAwsomeCustomeLibry/initFontAwesome"
import Header from './Components/Header/Header';
initFontAwesome();
function App() {
  return (
      <Router>
        <Header></Header>
        <Switch>
          <Route  path='/home'>
          <LeagueContainer></LeagueContainer>
          </Route>
          <Route  path='/details'>
          <LeagueDetails/>
          </Route>
          <Route  path='/League/:leagueId'>
          <LeagueDetails/>
          </Route>
          <Route exact path='/'>
          <LeagueContainer></LeagueContainer>
          </Route>
          <Route path='*'>
          <PageNotFound/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
