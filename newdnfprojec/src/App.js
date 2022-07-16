import './App.css';
import Header from './components/Header';
import SearchServer from './components/SearchServer';
import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchChar from './components/SearchChar';
function App() {
  return (
    <div className="App">
      <Header/>
      
      <Router>
        <Routes>
          <Route path="/" element={<SearchServer /> }  />
          <Route path="/charView" element={<SearchChar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
