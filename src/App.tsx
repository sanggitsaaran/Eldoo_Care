import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PlansPage from './pages/PlansPage';
import AboutUsPage from './pages/AboutUsPage';
import BookNowPage from './pages/BookNowPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/plans" element={<PlansPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/book" element={<BookNowPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
