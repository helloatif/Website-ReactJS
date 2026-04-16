import { useParams } from 'react-router-dom';

const programDetails = {
  1: { name: "BS Computer Science", duration: "4 Years", eligibility: "FSc Pre-Engineering with 60%", subjects: ["Programming", "Data Structures", "Databases", "Operating Systems"] },
  2: { name: "BS Data Science", duration: "4 Years", eligibility: "FSc with 60%", subjects: ["Python", "Statistics", "Machine Learning", "Big Data"] },
  3: { name: "BS Artificial Intelligence", duration: "4 Years", eligibility: "FSc with 60%", subjects: ["AI Fundamentals", "Neural Networks", "Deep Learning", "NLP"] },
  4: { name: "BS Informatics", duration: "4 Years", eligibility: "FSc with 55%", subjects: ["Web Dev", "Mobile Apps", "UI/UX", "Database"] },
  5: { name: "BS Cyber Security", duration: "4 Years", eligibility: "FSc with 60%", subjects: ["Network Security", "Cryptography", "Hacking", "Forensics"] },
  6: { name: "MS Computer Science", duration: "2 Years", eligibility: "BS CS with 2.5 CGPA", subjects: ["Algorithms", "Research", "Cloud Computing", "Thesis"] },
  7: { name: "MS Artificial Intelligence", duration: "2 Years", eligibility: "BS CS/AI with 2.5 CGPA", subjects: ["Advanced ML", "Reinforcement Learning", "AI Ethics", "Thesis"] }
};

function ProgramDetail() {
  const { id } = useParams();
  const program = programDetails[id];

  if (!program) {
    return <h2>Program not found</h2>;
  }

  return (
    <div style={{ padding: '40px' }}>
      <h1>{program.name}</h1>
      <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
        <p><strong>Duration:</strong> {program.duration}</p>
        <p><strong>Eligibility:</strong> {program.eligibility}</p>
        <p><strong>Key Subjects:</strong></p>
        <ul>
          {program.subjects.map((subject, index) => (
            <li key={index}>{subject}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProgramDetail;