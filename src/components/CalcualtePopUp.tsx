import PopUPWrapper from "./PopUPWrapper";
import style from "../styles/calculatepopup.module.css";
import { useGrade } from "../hooks/grade.context";
export default function CalcualtePopUp() {
  const {handleCalcualtePopUp,result} = useGrade()
  return (
    <PopUPWrapper>
      <div className={`popup-container ${style.calculatePopUpContainer}`}>
        <section className={style.caulateHeaderTXT}>
          <header>
            <h1>Subjects</h1>
            <p>Below, you&apos;ll find a comprehensive list of all subjects.</p>
          </header>
        </section>
        <div className={style.caulateTableList}>
          <table>
            <thead>
              <tr>
                <th>Sub</th>
                <th>Marks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Englsih</td>
                <td><b>69</b></td>
              </tr>
              <tr>
                <td>Englsih</td>
                <td><b>69</b></td>
              </tr>
              <tr>
                <td>Englsih</td>
                <td><b>69</b></td>
              </tr>
              <tr>
                <td>Englsih</td>
                <td><b>69</b></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={style.calculateResults}>
          <div>
            <span>You got:</span>
            <span>
              <b>{result?.marks}</b>
            </span>
          </div>
          <div>
            <span>Out of:</span>
            <span>
              <b>{result?.total}</b>
            </span>
          </div>
          <div>
            <span>Your percentage:</span>
            <span>
              <b>{result?.percentage}</b>
            </span>
          </div>
        </div>
        <button className="bth-primary" onClick={()=>handleCalcualtePopUp()}>Ok</button>
      </div>
    </PopUPWrapper>
  );
}
