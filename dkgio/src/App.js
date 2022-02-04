import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Splash from './Pages/Splash/Splash.jsx';
import Pineapples from "./Pages/Pineapples/Pineapples.jsx";
import About from "./Pages/About/About.jsx";
import Donate from "./Pages/Donate/Donate.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Download from "./Pages/Download/Download.jsx";


function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact><Splash /></Route>
        <Route path="/home" exact><Home /></Route>
        <Route path="/pineapples" exact><Pineapples /></Route>
        <Route path="/about" exact><About /></Route>
        <Route path="/donate" exact><Donate /></Route>
        <Route path="/contact" exact><Contact /></Route>
        <Route path="/download" exact><Download /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
