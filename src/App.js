import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Design1Page from './components/Design1Page';
import Design2Page from './components/Design2Page';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/design1" exact component={Design1Page} />
          <Route path="/design2" component={Design2Page} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
