
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Programs from './components/Programs';
import ProgramDetail from './components/ProgramDetail';
import Admission from './components/Admission';
import Faculty from './components/Faculty';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/program/:id" element={<ProgramDetail />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/faculty" element={<Faculty />} />
      </Routes>
      <Footer />
      <BackToTop />
    </BrowserRouter>
  );
}

export default App;