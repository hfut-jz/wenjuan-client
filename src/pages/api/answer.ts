import type {NextApiRequest,NextApiResponse} from "next";
import {postAnswer} from "@/service/answer";

function genAnswerInfo(reqBody:any){
    const answerList:any[]=[]
    Object.keys(reqBody).forEach(key=>{
        if(key==='questionId')return
        answerList.push({
            componentId:key,
            value:reqBody[key]
        })
    })
    return{
        questionId:reqBody.questionId||'',
        answerList
    }
}

export default async function handler(
    req:NextApiRequest,
    res:NextApiResponse

){
    if(req.method!=='POST'){
        res.status(200).json({errno:-1,msg:'method错误'})
    }
    const answerInfo=genAnswerInfo(req.body)
    console.log('answerInfo',answerInfo)
    try {
        //提交到服务器mock，如果其成功了
        const resData=await postAnswer(answerInfo)
        console.log('resData',resData)
        res.redirect('/success')
    }catch (err){
        console.log(err)
        res.redirect('/fail')
    }
    res.status(200).json({errno:0})
}
