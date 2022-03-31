import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import TextAdd from "./components/TextAdd";
import TextDetail from "./components/TextDetail";
import TextList from "./components/TextList";

function App() {
  return (
    <div
      style={{ marginTop: "5px" }}
      className="ui raised very padded text container segment"
    >
      <Router>
        <Routes>
          <Route path="/" element={<TextList />} />
          <Route path="/posts/:id" element={<TextDetail />} />
          <Route path="/text-add" element={<TextAdd />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
