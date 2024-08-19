import "./App.css";
import CalcualtePopUp from "./components/CalcualtePopUp";
// import Grades from './components/Grades'
// import AddSubjectsPopUP from "./components/AddSubjectsPopUP";
// import ErrorNotFound from "./components/ErrorNotFound";

// import {useGrade} from './hooks/grade.context'
function App() {
  // const {subjects,add,hanldeAddPopUp} = useGrade()
  return (
    <div className="container">
      <div className="sub-container">
        <div className="main-box">
          <section className="box-header">
            <header>
              <h1>Grades with GradeGenius</h1>
              <p>
                Simple web app for quick and accurate exam grade calculations,
                designed to help students and educators effortlessly track
                academic progress.
              </p>
            </header>
          </section>
          <span>Grades</span>
            <div className="box-body">
              {/* {add && <AddSubjectsPopUP setAdd={hanldeAddPopUp}/>} */}
              {/* {!subjects.length ?   <ErrorNotFound setAdd={hanldeAddPopUp} /> : <Grades/>} */}
              <CalcualtePopUp/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
