function Footer() {
  return (
    <footer style={{ 
      backgroundColor: '#003366', 
      color: 'white', 
      padding: '40px',
      marginTop: '50px',
      textAlign: 'center'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <div>
          <h3>University of Management and Technology</h3>
          <p>Excellence in Education Since 2002</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <p>Admissions</p>
          <p>Scholarships</p>
          <p>Contact Us</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>📍 Lahore, Pakistan</p>
          <p>📞 042-12345678</p>
          <p>✉ admissions@umt.edu.pk</p>
        </div>
      </div>
      <hr style={{ margin: '20px 0' }} />
      <p>&copy; 2026 University of Management and Technology. All rights reserved.</p>
    </footer>
  );
}

export default Footer;