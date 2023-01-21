import { BrowserRouter, Routes, Route } from "react-router-dom";
import Countries from "./components/Countries";
import CountryDetails from "./components/CountryDetails";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/countries/:name" element={<CountryDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
