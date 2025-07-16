import Home from './pages/homePage';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Qualifications from './pages/qualifications';
import ApplyForm from './pages/applyForm';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/qualifications" element={<Qualifications/>}/>
          <Route path="/apply" element={<ApplyForm/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
