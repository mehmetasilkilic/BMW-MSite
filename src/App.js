import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MTwo from "./pages/MTwo";
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Contact from "./components/Contact";
import Fup from "./components/Fup";
import MThree from "./pages/MThree";
import MFour from "./pages/MFour";
import MFive from "./pages/MFive";
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  @media only screen and (max-width:1270px){
        position: static;
        margin-left: 0;
    };
`;

const App = () => {
  return (
    <Router>
      <Container>
        <Navbar />
      </Container>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/MTwo">
          <MTwo />
        </Route>
        <Route path="/MThree">
          <MThree />
        </Route>
        <Route path="/MFour">
          <MFour />
        </Route>
        <Route path="/MFive">
          <MFive />
        </Route>
      </Switch>
      <Fup />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
