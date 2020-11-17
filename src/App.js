import './App.css';

import Container from 'react-bootstrap/Container';

import GrandChelem from './Components/GrandChelem/GrandChelem'
import Navbar from './Components/Navbar/Navbar'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      {
      <>
        <Router>
            <Navbar />

            <Container fluid className="main">
                <Switch>
                    <Route path="/hist">
                        <Home />
                    </Route>

                    <Route 
                        path="/new"  
                        render={(props) => (
                            <GrandChelem {...props} playable={true} />
                          )}>
                    </Route>
                </Switch>   
            </Container>
        </Router>

      </>
      }
    </div>
  );

  function Home() {
    return <h2>Home bitch</h2>;
  }
}

export default App;
