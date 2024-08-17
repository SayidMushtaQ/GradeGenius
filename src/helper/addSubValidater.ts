interface formDataPropsAndError{
    sub:string,
    marks:string
}

export const validate = ({sub,marks}:formDataPropsAndError)=>{
    const newFormError:formDataPropsAndError = {sub:'',marks:''}

    if(!sub){
        newFormError.sub = 'Please enter Sub name is required'
    }else if(sub.length <= 2){
        newFormError.sub = 'Sub name is to short'
    }   
    if(!marks){
        newFormError.marks = 'Marks is required'
    }else if(!/^\d+$/.test(marks)){
        newFormError.marks = 'Please enter valid marks'
    }else if(Number(marks) > 100){
        newFormError.marks = 'Please enter marks between 1 and 100'
    }
    return {newFormError}
}