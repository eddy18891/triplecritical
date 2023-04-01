// Bootstrap import
import "bootstrap/dist/css/bootstrap.min.css"

// React imports

// Components
import Cover from './Components/Cover';
import NavigationBar from "./Components/NavigationBar";
import Team from "./Components/Team";
import Games from "./Components/Games";
import Contact from "./Components/Contact";
import Copyright from "./Components/Copyright";

// Fonts
import "./fonts/Taka_takaV3-Regular.ttf";

function App() {
  return (
    <>
        <NavigationBar/>
        <Cover/>
        <Team/>
        <Games/>
        <Contact/>
        <Copyright/>
    </>
  );
}

export default App;