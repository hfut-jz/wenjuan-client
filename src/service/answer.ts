import {post} from "./ajax";

//封装了两层
export async function postAnswer(answerInfo:any){

    const url=`/api/answer`
    const data=post(url,answerInfo)
    return data
}