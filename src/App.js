import './App.css';
import { BrowserRouter as Router, Switch , Route } from "react-router-dom";
import Login from './components/Login/Login';
import Register from './components/Register/Register';


function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
