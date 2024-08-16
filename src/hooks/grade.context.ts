import {useContext} from 'react'
import {GradeContext} from '../context/Grades.context'
export const useGrade = () => useContext(GradeContext);