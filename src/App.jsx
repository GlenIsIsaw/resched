
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FormOpt, NameForm, Personal, Authorize, Graduate } from "./pages";


const App = () => {
  return (
    <Router>
      <Routes>

      <Route path="/" element={<NameForm />} />
      <Route path="/formopt" element={<FormOpt />} />
      <Route path="/Personal" element={<Personal />} />
      <Route path="/Authorize" element={<Authorize />} />
      <Route path="/Graduate" element={<Graduate />} />
      
      </Routes>
    </Router>
  );
};

export default App
