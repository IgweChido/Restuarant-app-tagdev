
import './App.css';
import MainContainer from './Components/MainContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route  exact path="/*" element={<MainContainer/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
