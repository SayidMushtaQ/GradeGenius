import { useGrade } from "../hooks/grade.context";
export default function AddSubjects() {
  const { subjects } = useGrade();
  console.log(subjects)
  return <div>AddSubjects</div>;
}
