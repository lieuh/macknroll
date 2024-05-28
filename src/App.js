import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Commissions from './Commissions';
import Blog from './Blog';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";



function App() {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <Navbar/>
      <Router>
        <Routes>
            <Route
              exact
              path="/"
              element={<Home/>}
            />
            <Route
              path="/about"
              element={<About/>}
            />
            <Route
              path="/portfolio"
              element={<Portfolio/>}
            />
            <Route
              path="/commissions"
              element={<Commissions/>}
            />
            <Route
              path="/blog"
              element={<Blog/>}
            />
            <Route
              path="*"
              element={<Navigate to="/"/>}
            />
          </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
