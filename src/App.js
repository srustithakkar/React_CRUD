import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./Components/MainView/MainView";
import Create from "./Components/Create/CreateUser";
import View from "./Components/View/viewData";
import NotFound from "./Components/Error/Error";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* Routing */}
          <Route path="/" exact component={Home} />
          <Route path="/create" component={Create} />
          <Route path="/view" component={View} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
