import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Expertise from './components/Expertise/Expertise';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import Services from './components/Services/Services';
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
function App() {
  
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path ='/'>
            <Home></Home>
          </Route>
          <Route path ='/home'>
            <Home></Home>
          </Route>
          <Route path ='/about'>
            <About></About>
          </Route>
          <PrivateRoute path ='/gallery'>
            <Gallery></Gallery>
          </PrivateRoute>
          <Route path ='/services'>
            <Services></Services>
          </Route>
          <PrivateRoute path='/service/:id'>
            <ServiceDetail></ServiceDetail>
          </PrivateRoute>
          <Route path='/trainers'>
            <Expertise></Expertise>
          </Route>
          <PrivateRoute path ='/blog'>
            <Blog></Blog>
          </PrivateRoute>
          <Route path ='/login'>
             <Login></Login>
          </Route>
          <Route path ='*'>
              <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

