import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { FormOpt, NameForm, Personal, Authorize, Graduate, PrivateRoute } from "./pages";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* ✅ Public Route */}
        <Route path="/" element={<NameForm />} />

        {/* ✅ Protected Routes */}
        <Route path="/formopt" element={<PrivateRoute><FormOpt /></PrivateRoute>} />
        <Route path="/Personal" element={<PrivateRoute><Personal /></PrivateRoute>} />
        <Route path="/Authorize" element={<PrivateRoute><Authorize /></PrivateRoute>} />
        <Route path="/Graduate" element={<PrivateRoute><Graduate /></PrivateRoute>} />
      </Routes>
    </Router>
  );
};

export default App;
