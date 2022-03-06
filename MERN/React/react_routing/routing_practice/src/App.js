import logo from './logo.svg';
import './App.css';
import Home from './components/home'
import Display from './components/display';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route element={<Home />} path="/home"/>
        <Route element={<Display />} path="/:word"/>
        <Route element={<Display />} path="/:word/:color/:bgCol"/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
