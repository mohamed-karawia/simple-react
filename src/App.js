import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Fetch from './Routes/Fetch/Fetch'
import Post from './Routes/Post/Post';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Switch>
        <Route path="/" component={Fetch} exact />
        <Route path="/post" component={Post} exact />
      </Switch>
    </Router>
  );
}

export default App;
