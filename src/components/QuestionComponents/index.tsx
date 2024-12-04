import QuestionInput from "@/components/QuestionComponents/QuestionInput";
import QuestionRadio from "@/components/QuestionComponents/QuestionRadio";
import QuestionTitle from "@/components/QuestionComponents/QuestionTitle";
import QuestionInfo from "@/components/QuestionComponents/QuestionInfo";
import QuestionParagraph from "@/components/QuestionComponents/QuestionParagraph";
import QuestionTextarea from "@/components/QuestionComponents/QuestionTextarea";
import QuestionCheckbox from "@/components/QuestionComponents/QuestionCheckbox";
type ComponentInfoType={
    title:string
    isHidden:boolean
    fe_id:string
    props:any
    type:string
}
export const getComponent=(comp:ComponentInfoType)=>{
    const {title,isHidden,fe_id,props,type}=comp
    if(isHidden)return null
    if(type==='questionInput'){
        return <QuestionInput fe_id={fe_id} props={props}></QuestionInput>
    }
    if(type==='questionRadio'){
        return <QuestionRadio fe_id={fe_id} props={props}></QuestionRadio>
    }
    if(type==='questionTitle'){
        return <QuestionTitle  {...props}></QuestionTitle>
    }
    if(type==='questionInfo'){
        return<QuestionInfo {...props}></QuestionInfo>
    }
    if(type==='questionTextarea'){
        return<QuestionTextarea fe_id={fe_id} {...props}></QuestionTextarea>
    }
    if(type==='questionParagraph'){
        return<QuestionParagraph {...props}></QuestionParagraph>
    }
    if(type==='questionCheckbox'){
        return <QuestionCheckbox fe_id={fe_id} {...props}></QuestionCheckbox>
    }
    return null
}
