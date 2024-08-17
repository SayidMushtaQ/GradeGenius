import { useGrade } from "../hooks/grade.context";
import PopUPWrapper from "./PopUPWrapper";
import style from "../styles/adSubjects.module.css";
export default function AddSubjectsPopUP() {
  const { subjects } = useGrade();
  console.log(subjects);
  return (
    <PopUPWrapper>
      <div className={style.subjectContainer}>
        <form>
          <div className={style.subjectForm}>
            <div className={style.inputs}>
              <input type="text" placeholder="Enter sub name" />
              <input type="text" placeholder="Enter marks" />
            </div>
            <div className={style.formButtons}>
              <button type="submit" className="bth-primary">
                Add
              </button>
              <button className="bth-danger">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </PopUPWrapper>
  );
}
