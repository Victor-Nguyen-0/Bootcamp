import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewAuthor from './components/NewAuthor';
import EditAuthor from './components/EditAuthor';
import Main from './view/Main';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/author/new" element={<NewAuthor />} />
          <Route path="/author/:id/edit" element={<EditAuthor />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
