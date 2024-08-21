interface GradeContextTypes{
    createSub: (name:string,marks:string) => name
    subjects:{sub:string,marks:string}[],
    add:boolean,
    hanldeAddPopUp: () => void
    calcualte:boolean
    handleCalcualtePopUp:()=>void,
    handleCalcaulation:()=>void,
    result:{marks:number,total:number,percentage:number} | null,
    onchangeHandleEdit:(e:React.ChangeEvent<HTMLInputElement>,index:number)=>void
}