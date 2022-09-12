import Home from "./pages/Home";
import Login from "./pages/Login"
import Marketplace from "./pages/Marketplace"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shopping" element={<Marketplace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
