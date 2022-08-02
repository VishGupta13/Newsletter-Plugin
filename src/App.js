import {BrowserRouter , Routes , Route} from "react-router-dom";
import Home from './components/Home';
import UserManager from "./components/UserManager";

function App() {
  return (
    <div >
      <header>
      </header>

      <BrowserRouter>
      <Routes>
        <Route element={ <Home></Home> }  path="/"></Route>
        <Route element={ <UserManager></UserManager>} path="/usermanager"></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
