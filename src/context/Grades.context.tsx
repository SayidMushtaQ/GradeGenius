import React,{createContext, useState} from 'react'


const defaultValues:GradeContextTypes = {
  subjects:[{sub:'',marks:''}],
  createSub:()=>{}
}

export const GradeContext = createContext<GradeContextTypes>(defaultValues)

export default function GradeProvider({children}:{children:React.ReactNode}) {
  const [subjects,setSubjects] = useState<{sub:string,marks:string}[]>([]);
  const createSub = (sub:string,marks:string)=>{
    setSubjects(pre=>[...pre,{sub,marks}]);
  }

  return(
    <GradeContext.Provider value={{subjects,createSub}}>
      {children}
    </GradeContext.Provider>
  ) 
}

