import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Home/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import NotFound from './components/Shared/NotFound/NotFound';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Login from './components/Shared/Login/Login';
import Register from './components/Shared/Login/Register/Register';
function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>

          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
