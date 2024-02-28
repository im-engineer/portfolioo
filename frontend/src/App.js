import { Route,Routes } from 'react-router-dom';
import './App.css';
import Projects from '../src/pages/Projects/Projects';
import Main from '../src/pages/Main/Main'



function App() {
  return (
    <div className="App">
      <Routes>
          <Route  path="/" exact element={<Main/>}/>
          <Route exact path="/projects" element={<Projects/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
