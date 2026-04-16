function Home() {
    return (
      <div>
        <div style={{ backgroundColor: '#003366', padding: '80px', textAlign: 'center', color: 'white' }}>
          <h1>University of Management and Technology</h1>
          <p>Excellence in Education Since 2002</p>
          <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#ff9900', border: 'none' }}>Apply Now</button>
        </div>
  
        <div style={{ padding: '40px', textAlign: 'center' }}>
          <h2>Why Choose UMT?</h2>
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '30px' }}>
            <div style={{ width: '200px', padding: '20px', backgroundColor: '#f9f9f9' }}>
              <h3>50+</h3>
              <p>Degree Programs</p>
            </div>
            <div style={{ width: '200px', padding: '20px', backgroundColor: '#f9f9f9' }}>
              <h3>10,000+</h3>
              <p>Students Enrolled</p>
            </div>
            <div style={{ width: '200px', padding: '20px', backgroundColor: '#f9f9f9' }}>
              <h3>500+</h3>
              <p>Expert Faculty</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;