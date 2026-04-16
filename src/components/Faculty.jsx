const facultyMembers = [
    { id: 1, name: "Dr. Ahmad Raza", designation: "Professor & Head", expertise: "Artificial Intelligence", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Dr. Fatima Khan", designation: "Associate Professor", expertise: "Data Science", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Prof. Saeed Ahmed", designation: "Assistant Professor", expertise: "Cyber Security", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Dr. Nadia Ali", designation: "Associate Professor", expertise: "Software Engineering", image: "https://via.placeholder.com/150" }
  ];
  
  function Faculty() {
    return (
      <div style={{ padding: '40px' }}>
        <h1>Our Faculty</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '30px' }}>
          {facultyMembers.map((faculty) => (
            <div key={faculty.id} style={{ textAlign: 'center', border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
              <img src={faculty.image} alt={faculty.name} style={{ width: '120px', height: '120px', borderRadius: '50%' }} />
              <h3>{faculty.name}</h3>
              <p><strong>{faculty.designation}</strong></p>
              <p>Expertise: {faculty.expertise}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Faculty;