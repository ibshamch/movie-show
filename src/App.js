import { Routes, Route } from "react-router-dom";
import Homepage from "./Routes/Homepage";
import Details from "./Routes/Details";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
