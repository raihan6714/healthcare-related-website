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
import Shop from './components/Shop/Shop';
import Contacts from './components/Contacts/Contacts';
function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            {/* home  */}
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>

            {/* about us  */}
            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>
            {/* login  */}
            <Route path="/login">
              <Login></Login>
            </Route>
            {/* register  */}
            <Route path="/register">
              <Register></Register>
            </Route>
            {/* contacts  */}
            <Route path="/contacts">
              <Contacts></Contacts>
            </Route>

            {/* services & our books private route */}
            <PrivateRoute path="/serviceDetails/:id">
              <ServiceDetalis></ServiceDetalis>
            </PrivateRoute>
            {/* shop  */}
            <PrivateRoute path="/books">
              <Shop></Shop>
            </PrivateRoute>
            <PrivateRoute path="/services">
              <AllServices></AllServices>
            </PrivateRoute>

            {/* not found */}
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
