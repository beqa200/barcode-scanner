import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Link
} from "react-router-dom";

import BarcodeScanner from "./pages/BarcodeScanner";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/barcode_scanner" element={<BarcodeScanner />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
