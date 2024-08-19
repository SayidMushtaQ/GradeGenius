import React,{createContext, useState,useCallback} from 'react'


const defaultValues:GradeContextTypes = {
  subjects:[],
  createSub:()=>{},
  add:false,
  hanldeAddPopUp: () => {}
}

export const GradeContext = createContext<GradeContextTypes>(defaultValues)

export default function GradeProvider({children}:{children:React.ReactNode}) {
  const [subjects,setSubjects] = useState<{sub:string,marks:string}[]>([]);
  const [add, setAdd] = useState(false);
  const hanldeAddPopUp = useCallback(() => setAdd((pre) => !pre), []);  
  const createSub = (sub:string,marks:string)=>{
    setSubjects(pre=>[...pre,{sub,marks}]);
  }
  return(
    <GradeContext.Provider value={{subjects,createSub,add,hanldeAddPopUp}}>
      {children}
    </GradeContext.Provider>
  ) 
}

