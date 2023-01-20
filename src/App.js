import { BrowserRouter,Routes,Route } from "react-router-dom";
import Countries from "./components/Countries";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Countries/>}/>
        <Route path="*"  />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
