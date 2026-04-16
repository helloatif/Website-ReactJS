import { Link } from 'react-router-dom';

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
  return (
    <div style={{ padding: '40px' }}>
      <h1>Programs Offered</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '30px' }}>
        {programs.map((program) => (
          <div key={program.id} style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
            <h3>{program.name}</h3>
            <p>Duration: {program.duration}</p>
            <Link to={`/program/${program.id}`}>
              <button style={{ padding: '8px 16px', backgroundColor: '#003366', color: 'white', border: 'none' }}>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programs;