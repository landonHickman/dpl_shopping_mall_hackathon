import './App.css';
import {Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Jobs from './pages/Jobs';
import Articles from './article/Articles';


function App() {
  return (
    <div style={styles.background}>
    <NavBar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/jobs' component={Jobs} />
      <Route exact path='/articles' component={Articles} />
    </Switch>
    </div>
  );
}

const styles = {
  background: {
    backgroundColor: 'rgb(215, 255, 248)',
  },
}

export default App;
