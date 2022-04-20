import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Splash from './Pages/Splash/Splash.jsx';
import Pineapples from "./Pages/Pineapples/Pineapples.jsx";
import About from "./Pages/About/About.jsx";
import Donate from "./Pages/Donate/Donate.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Download from "./Pages/Download/Download.jsx";
import BasicPineapplePage from "./Components/Pineapples/BasicPineapplePage.jsx";


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
        <Route path="/pineapples/todoapp" exact><BasicPineapplePage /></Route>
        <Route path="/pineapples/workoutgenerator" exact><BasicPineapplePage /></Route>
        <Route path="/pineapples/basiccalculator" exact><BasicPineapplePage /></Route>
        <Route path="/pineapples/quaternarycalculator" exact><BasicPineapplePage /></Route>
        <Route path="/pineapples/dbhconverter" exact><BasicPineapplePage /></Route>
        <Route path="/pineapples/wikirevisionviewer" exact><BasicPineapplePage /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
