import "./App.css";
import URLShortnerForm from "./Components/URLShortnerForm/";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Redirect from "./Components/Redirect";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/shorturl" />}  />
            
            
          <Route path="/shorturl" element={<URLShortnerForm />} />
          <Route path="/shorturl/:id" element={<Redirect />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
