import { BrowserRouter, Routes, Route } from "react-router-dom";
import Countries from "./components/Countries";
import CountryDetails from "./components/CountryDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/:name" element={<CountryDetails />} />
          <Route path="*" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
