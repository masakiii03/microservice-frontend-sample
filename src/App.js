import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from "./components/Home";
import { Login } from "./Login";

export const App = () => {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
