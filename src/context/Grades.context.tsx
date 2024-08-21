import React,{createContext, useState,useCallback} from 'react'


const defaultValues:GradeContextTypes = {
  subjects:[],
  createSub:()=>{},
  add:false,
  hanldeAddPopUp: () => {},
  calcualte:false,
  handleCalcualtePopUp:()=>{},
  handleCalcaulation:()=>{},
  result:null,
  onchangeHandleEdit:()=>{}
}

export const GradeContext = createContext<GradeContextTypes>(defaultValues)

export default function GradeProvider({children}:{children:React.ReactNode}) {
  const [subjects,setSubjects] = useState<{sub:string,marks:string}[]>([]);
  const [add, setAdd] = useState(false);
  const [calcualte,setCalculate] = useState(false)
  const [result,setResult] = useState<{marks:number,total:number,percentage:number} | null>(null)
  const hanldeAddPopUp = useCallback(() => setAdd((pre) => !pre), []);  
  const handleCalcualtePopUp = useCallback(()=>setCalculate((pre)=>!pre),[])
  const createSub = (sub:string,marks:string)=>{
    setSubjects(pre=>[...pre,{sub,marks}]);
  }
  const handleCalcaulation = ()=>{
   const marks = subjects.reduce((pre,current)=> pre + Number(current.marks),0)
   const total = subjects.length * 100;
   const percentage = (marks/total) * 100;
   setResult({marks,total,percentage:Number(percentage.toFixed(2))})
  }
  const onchangeHandleEdit = useCallback((e:React.ChangeEvent<HTMLInputElement>,index:number) =>{
      const newSubjects = [...subjects];
      newSubjects[index].marks = e.target.value;
      setSubjects(newSubjects); 
  },[subjects])
  return(
    <GradeContext.Provider value={{subjects,createSub,add,hanldeAddPopUp,calcualte,handleCalcualtePopUp,handleCalcaulation,result,onchangeHandleEdit}}>
      {children}
    </GradeContext.Provider>
  ) 
}

