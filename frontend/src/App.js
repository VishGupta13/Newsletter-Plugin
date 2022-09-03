// import {BrowserRouter , Routes , Route} from "react-router-dom";
// import Home from './components/Home';
// import Preview from "./components/Preview";
// import UserManager from "./components/UserManager";

// function App() {
//   return (
//     <div >
//       <header>
//       </header>

//       <BrowserRouter>
//       <Routes>
//         <Route element={ <Home></Home> }  path="/"></Route>
//         <Route element={ <UserManager></UserManager>} path="/usermanager"></Route>
//         <Route element={ <Preview></Preview>} path="/preview"></Route>
        

//       </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
import Welcome from "./components/Welcome";
import Subscribe from "./components/Subscribe";
import Plugin from "./components/Plugin";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SubscriberManager from "./components/SubscriberManager";
import Signup from "./components/Signup";
import Login from "./components/Login";
import UserManager from "./components/UserManager";
import Scro from "./components/Scro";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>

        <Routes>
          <Route element={<Welcome />} path="/welcome" />
          <Route element={<Plugin />} path="/" />
          <Route element={<Subscribe />} path="subscribe" />
          <Route element={<SubscriberManager />} path="subscribermanager" />
          <Route element={<Signup />} path="signup" />
          <Route element={<Login />} path="login" />
          <Route element={<UserManager />} path="usermanager" />
          <Route element={<Scro />} path="test" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

