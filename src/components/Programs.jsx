import { Link } from 'react-router-dom';
import { useState } from 'react';

const programs = [
  { id: 1, name: "BS Computer Science", duration: "4 Years" },
  { id: 2, name: "BS Data Science", duration: "4 Years" },
  { id: 3, name: "BS Artificial Intelligence", duration: "4 Years" },
  { id: 4, name: "BS Informatics", duration: "4 Years" },
  { id: 5, name: "BS Cyber Security", duration: "4 Years" },
  { id: 6, name: "MS Computer Science", duration: "2 Years" },
  { id: 7, name: "MS Artificial Intelligence", duration: "2 Years" }
];

function Programs() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter programs based on search term
  const filteredPrograms = programs.filter(program =>
    program.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '40px' }}>
      <h1>Programs Offered</h1>
      
      {/* Search Bar */}
      <div style={{ marginBottom: '30px' }}>
        <input
          type="text"
          placeholder="🔍 Search programs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            maxWidth: '400px',
            padding: '12px',
            fontSize: '16px',
            border: '1px solid #ddd',
            borderRadius: '8px'
          }}
        />
        {searchTerm && (
          <p style={{ marginTop: '10px', color: '#666' }}>
            Found {filteredPrograms.length} program(s)
          </p>
        )}
      </div>

      {/* Programs Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '30px' }}>
        {filteredPrograms.map((program) => (
          <div key={program.id} style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
            <h3>{program.name}</h3>
            <p>Duration: {program.duration}</p>
            <Link to={`/program/${program.id}`}>
              <button style={{ padding: '8px 16px', backgroundColor: '#003366', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Show message if no results */}
      {filteredPrograms.length === 0 && (
        <p style={{ textAlign: 'center', marginTop: '50px', color: '#999' }}>
          No programs found matching "{searchTerm}"
        </p>
      )}
    </div>
  );
}

export default Programs;