import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SignUpPage } from "./pages/SignUpPage";
import { HomePage } from './pages/HomePage';


export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>    
  );
}
