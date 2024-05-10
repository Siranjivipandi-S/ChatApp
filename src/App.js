import Login from "./pages/login"
import Register from "./pages/register";
import Home from "./pages/home"
import './App.css';
import './style.scss' 
import {
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />}/>
          <Route path="register" element={<Register />}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
