import "./department.css";
import DepartmentInfo from "./DepartmentInfo";

export default function DepartmentPage() {
  // Static data acting as props
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

  return <DepartmentInfo department={department} />;
}
