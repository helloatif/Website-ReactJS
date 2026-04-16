import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#003366', padding: '15px', color: 'white' }}>
      <h2 style={{ display: 'inline', marginRight: '30px' }}>UMT</h2>
      <Link to="/" style={{ color: 'white', marginRight: '15px' }}>Home</Link>
      <Link to="/programs" style={{ color: 'white', marginRight: '15px' }}>Programs</Link>
      <Link to="/admission" style={{ color: 'white', marginRight: '15px' }}>Admission</Link>
      <Link to="/faculty" style={{ color: 'white', marginRight: '15px' }}>Faculty</Link>
    </nav>
  );
}

export default Navbar;