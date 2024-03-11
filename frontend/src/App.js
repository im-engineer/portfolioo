import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "../src/pages/Main/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
