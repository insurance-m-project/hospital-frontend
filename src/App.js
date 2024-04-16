import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import InsuranceDocument from "./pages/users/InsuranceDocument";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<InsuranceDocument />} />
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
