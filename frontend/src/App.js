import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Homepage from "./homepage/homepage";
import Profile from './profile/profile';
function App() {
  return (
    <Router>
      <div className="bg-prim-color min-h-screen text-prim-font-color">
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
