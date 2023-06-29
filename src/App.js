import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Redirect } from './components/Redirect';
import { Home } from "./components/Home";
import { Login } from "./Login";

export const App = () => {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/redirect" element={<Redirect />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
