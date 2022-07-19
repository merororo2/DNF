import "./App.css";
import Header from "./components/Header";
import SearchServer from "./components/SearchServer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchChar from "./components/SearchChar";
import CharViewInfoData from "./components/CharViewInfoData";
import CharItemData from "./components/CharItemData";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header />

      <Router>
        <Routes>
          <Route path="/" element={<SearchServer />} />
          <Route path="/CharViewInfo" element={<CharViewInfoData />} />
          <Route path="/charView" element={<SearchChar />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
