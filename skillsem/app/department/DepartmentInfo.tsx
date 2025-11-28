type Department = {
  name: string;
  description: string;
  faculty: string[];
  contact: {
    email: string;
    phone: string;
  };
};

export default function DepartmentInfo({ department }: { department: Department }) {
  return (

    <div className="container">

      <h1 className="title">{department.name} Department</h1>


      <h2>About</h2>
      <p>{department.description}</p>

      <h2>Faculty Members</h2>
      <ul>
        {department.faculty.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      <h2>Contact Information</h2>
      <p>
        <strong>Email:</strong> {department.contact.email}
      </p>
      <p>
        <strong>Phone:</strong> {department.contact.phone}
      </p>
    </div>
  );
}
