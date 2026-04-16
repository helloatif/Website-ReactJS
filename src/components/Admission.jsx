function Admission() {
    return (
      <div style={{ padding: '40px' }}>
        <h1>Admission Information</h1>
        
        <div style={{ marginBottom: '30px' }}>
          <h2>Eligibility Criteria</h2>
          <ul>
            <li>FSc/Intermediate with minimum 60% marks</li>
            <li>BS degree with minimum 2.5 CGPA for Masters</li>
            <li>Entry test required for all programs</li>
          </ul>
        </div>
  
        <div style={{ marginBottom: '30px' }}>
          <h2>Admission Process</h2>
          <ol>
            <li>Fill online application form</li>
            <li>Submit required documents</li>
            <li>Appear for entry test</li>
            <li>Pay admission fee after selection</li>
          </ol>
        </div>
  
        <div style={{ marginBottom: '30px' }}>
          <h2>Important Dates</h2>
          <ul>
            <li>Application Start: May 1, 2026</li>
            <li>Last Date to Apply: July 15, 2026</li>
            <li>Entry Test: July 25, 2026</li>
            <li>Classes Start: September 1, 2026</li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default Admission;