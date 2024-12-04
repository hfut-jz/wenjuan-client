
import styles from '../../styles/Question.module.scss'
import PageWrapper from "@/components/PageWrapper";
import {getQuestionList} from "@/service/question";
import {getComponent} from "@/components/QuestionComponents";

type PropsType = {
    errno: number,
    data?: {
        id: string
        title: string
        desc?: string
        js?: string
        css?: string
        isPublish: boolean
        isDeleted: boolean
        componentList: Array<any>
    }
    msg?: string
}

//c端h5的url规则：http://localhost:3000/question/123424132
//规则：b端和c端规定好规则之后，再去写规则。
export default function Question(props: PropsType) {
    const {errno, data, msg} = props
    const {id = '', title = '', desc = '', isPublish, componentList = [], isDeleted} = data || {}
    if (errno !== 0) {
        return <PageWrapper title="错误">
            <h1>错误</h1>
            <p>{msg}</p>
        </PageWrapper>
    }
    // 已经被删除的，提示错误
    if (isDeleted) {
        return <PageWrapper title={title} desc={desc}>
            <h1>{title}</h1>
            <p>该问卷已经被删除</p>
        </PageWrapper>
    }

    //尚未发布的，提示错误
    if (!isPublish) {
        return <PageWrapper title={title} desc={desc}>
            <h1>{title}</h1>
            <p>该问卷尚未发布</p>
        </PageWrapper>
    }
    const ComponentElem =
        <>
            {componentList.map(c => {
                const component = getComponent(c)
                return <div key={c.fe_id} className={styles.componentWrapper}>
                    {component}
                </div>
            })}
        </>
    return (
        <div className={styles.componentWrapper}>
            <PageWrapper title='问卷页'>
                <h1>{title}</h1>
                <form method='post' action="/api/answer">
                    <input type="hidden" name="questionId" value={id}/>
                    {ComponentElem}
                    {/* <input type="submit" value="提交"/> */}
                    <div className={styles.submitBtnContainer}>
                        {/* <input type="submit" value="提交"/> */}
                        <button type="submit">提交</button>
                    </div>
                </form>
            </PageWrapper>
        </div>
    )
}

export async function getServerSideProps(context: any) {
    const {id = ''} = context.params
    //根据id，await获取问卷数据
    const data=await getQuestionList(id)
    return {
        props: data
    }
}