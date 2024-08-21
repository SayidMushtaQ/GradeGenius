import style from "../styles/grades.module.css";
import { useGrade } from "../hooks/grade.context";
export default function Grades() {
  const { subjects,hanldeAddPopUp,handleCalcualtePopUp,handleCalcaulation,onchangeHandleEdit } = useGrade();
  const handleCalcualte = ()=>{
    handleCalcaulation();
    handleCalcualtePopUp()
  }
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
                  onChange={e=>onchangeHandleEdit(e,index)}
                  value={item.marks}
                />
              </div>
            </div>
          ))}
        </div>
        <div className={style.gradesActions}>
          <button className="bth-primary" onClick={handleCalcualte}>Calculate</button>
          <button className="bth-primary" onClick={()=>hanldeAddPopUp()}>New sub</button>
        </div>
      </div>
    </>
  );
}
