import React,{createContext, useState} from 'react'


const defaultValues:GradeContextTypes = {
  subjects:[{name:'',marks:0}],
  createSub:()=>{}
}

export const GradeContext = createContext<GradeContextTypes>(defaultValues)

export default function GradeProvider({children}:{children:React.ReactNode}) {
  const [subjects,setSubjects] = useState([{
    name:'',
    marks:0
  }]);
  const createSub = (name:string,marks:number)=>{
    setSubjects(pre=>[...pre,{name,marks}]);
  }

  return(
    <GradeContext.Provider value={{subjects,createSub}}>
      {children}
    </GradeContext.Provider>
  ) 
}

