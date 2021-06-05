import {Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';


function Job() {
  return (
    <>
    <NavBar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
    </Switch>
    </>
  );
}

export default Job;