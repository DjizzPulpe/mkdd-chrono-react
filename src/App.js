import './App.css';

import Navbar from './Components/Navbar/Navbar'
import GrandChelem from './Components/GrandChelem/GrandChelem'
import LoginBox from './Components/LoginBox/LoginBox'
import Container from 'react-bootstrap/Container'
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
            <Navbar/>

            <Container fluid className="main">
                <Switch>
                    <Route path="/hist">
                        <Home />
                    </Route>

                    <Route 
                        path="/new"  
                        render={(props) => (
                            <GrandChelem {...props} isPlayable={true} />
                          )}>
                    </Route>

                    <Route path="/login">
                        <LoginBox />
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
