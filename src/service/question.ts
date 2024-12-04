import {get} from "@/service/ajax";

export function getQuestionList(id:string){
    const url=`/api/question/${id}`
    const data=get(url)
    return data

}