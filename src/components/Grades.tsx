import style from "../styles/grades.module.css";
import { useGrade } from "../hooks/grade.context";
export default function Grades() {
  const { subjects,hanldeAddPopUp } = useGrade();
  return (
    <>
      <div className={style.gradesContainer}>
        <div className={style.gradesSubContainer}>
          {subjects.map((item, index) => (
            <div className={style.gradeBox} key={index}>
              <div className={style.gradeBoxElements}>
                <span>{item.sub}</span>
                <input
                  type="number"
                  name="marks"
                  id="marks"
                  min={0}
                  value={item.marks}
                />
              </div>
            </div>
          ))}
        </div>
        <div className={style.gradesActions}>
          <button className="bth-primary">Calculate</button>
          <button className="bth-primary" onClick={()=>hanldeAddPopUp()}>New sub</button>
        </div>
      </div>
    </>
  );
}
