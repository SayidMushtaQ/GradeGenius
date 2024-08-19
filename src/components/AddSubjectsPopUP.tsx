import React, { useState } from "react";
import { useGrade } from "../hooks/grade.context";
import PopUPWrapper from "./PopUPWrapper";
import style from "../styles/adSubjects.module.css";
import { validate } from "../helper/addSubValidater";
import { ErrorNotify, SuccessNotify } from "../util/MessageNotify";
export default function AddSubjectsPopUP({setAdd}:{setAdd:()=>void}) {
  const { createSub } = useGrade();
  const [sub, setSub] = useState("");
  const [marks, setMarks] = useState("");
  
  const [errors, setError] = useState({ sub: "", marks: "" });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { newFormError } = validate({ sub, marks });
    if (!newFormError.sub && !newFormError.marks) {
      setError({ sub: "", marks: "" });
      createSub(sub, marks);
      setSub('');
      setMarks('')
      SuccessNotify("New Subject Added Successfully..!!🥳");
    } else {
      if (newFormError.sub) {
        ErrorNotify(newFormError.sub);
        setError({ marks: "", sub: newFormError.sub });
      } else if (newFormError.marks) {
        ErrorNotify(newFormError.marks);
        setError({ marks: newFormError.marks, sub: "" });
      }
    }
  };
  return (
    <PopUPWrapper>
      <div className={style.subjectContainer}>
        <form onSubmit={handleSubmit}>
          <div className={style.subjectForm}>
            <div className={style.inputs}>
              <input
                type="text"
                placeholder="Enter sub name"
                onChange={(e) => setSub(e.target.value)}
                value={sub}
                style={
                  !errors.sub
                    ? { border: "1px solid #000000" }
                    : { border: "1px solid #FF5252" }
                }
              />
              <input
                type="number"
                placeholder="Enter marks"
                onChange={(e) => setMarks(e.target.value)}
                value={marks}
                style={
                  !errors.marks
                    ? { border: "1px solid #000000" }
                    : { border: "1px solid #FF5252" }
                }
              />
            </div>
            <div className={style.formButtons}>
              <button type="submit" className="bth-primary">
                Add
              </button>
              <button className="bth-danger" onClick={()=>setAdd()}>Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </PopUPWrapper>
  );
}
