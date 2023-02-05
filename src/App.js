import "./App.css";
import URLShortnerForm from "./Components/URLShortnerForm/";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Redirect from "./Components/Redirect/";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<URLShortnerForm />} />
          <Route path="/:id" element={<Redirect />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
