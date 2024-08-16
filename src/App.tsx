import "./App.css";
import AddSubjects from "./components/AddSubjects";
// import ErrorNotFound from "./components/ErrorNotFound";
import GradesProvider from "./context/Grades.context";
function App() {
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
          <GradesProvider>
            <div className="box-body">
              <AddSubjects/>
            </div>
          </GradesProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
