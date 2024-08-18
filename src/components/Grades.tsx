import style from "../styles/grades.module.css";
import {useGrade} from '../hooks/grade.context'
export default function Grades() {
    const {subjects} = useGrade()
  return (
    <div className={style.gradesContainer}>
      <div className={style.gradesSubContainer}>
        {subjects.map(() => (
          <div className={style.gradeBox}>
            <div className={style.gradeBoxElements}>
              <span>English</span>
              <input type="number" name="marks" id="marks" min={0} />
            </div>
          </div>
        ))}
      </div>
      <button className="bth-primary">Calculate</button>
    </div>
  );
}
