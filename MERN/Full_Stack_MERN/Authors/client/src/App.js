import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewAuthor from './components/NewAuthor';
import EditAuthor from './components/EditAuthor';
import Main from './view/Main';
import OneAuthor from './components/OneAuthor';
import Error from './components/Error';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/author/new" element={<NewAuthor />} />
          <Route path="/author/:id" element={<OneAuthor/>} />
          <Route path="/author/:id/edit" element={<EditAuthor />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
