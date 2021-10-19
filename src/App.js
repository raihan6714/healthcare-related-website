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
import PrivateRoute from './components/Shared/Login/PrivateRoute/PrivateRoute';
import ServiceDetalis from './components/ServiceDetalis/ServiceDetalis';
import AuthProvider from './Context/AuthProvider';
import AllServices from './components/AllServices/AllServices';
function App() {
  return (
    <>
      <AuthProvider>
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
            <Route path="/services">
              <AllServices></AllServices>
            </Route>
            {/* login  */}
            <Route path="/login">
              <Login></Login>
            </Route>
            {/* register  */}
            <Route path="/register">
              <Register></Register>
            </Route>

            <PrivateRoute path="/serviceDetails/:id">
              <ServiceDetalis></ServiceDetalis>
            </PrivateRoute>

            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </>
  );
}

export default App;
