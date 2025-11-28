import styles from "./page.module.css";

export default function DepartmentPage({ department }) {
  return (
    <div className={styles.container}>
      <h1>{department.name} Department</h1>

      <h2>About</h2>
      <p>{department.description}</p>

      <h2>Faculty Members</h2>
      <ul>
        {department.faculty.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>

      <h2>Contact Information</h2>
      <p><strong>Email:</strong> {department.contact.email}</p>
      <p><strong>Phone:</strong> {department.contact.phone}</p>
    </div>
  );
}

export async function getStaticProps() {
  const department = {
    name: "Computer Science & Engineering",
    description:
      "The CSE department focuses on AI, ML, Data Science, Cybersecurity, and Software Engineering.",
    faculty: ["Dr. Ramesh Kumar", "Prof. Anitha Devi", "Prof. Suresh Babu"],
    contact: {
      email: "cse@kluniversity.in",
      phone: "+91-9876543210",
    },
  };

  return {
    props: { department },
  };
}
