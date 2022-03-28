import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// components
import Routing from './components/Routes/Routes';

const App = (props) => {
  return (
    <Router>
      <Route component={Routing} />
    </Router>
  );
};

export default App;
