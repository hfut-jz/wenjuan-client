//注意这里面的内容一定要与mock端的一致
import React, {FC} from 'react'
import styles from './QuestionRadio.module.scss'

type PropsType = {
    fe_id: string
    props: {
        title: string
        options: Array<{
            text: string
            value: string
        }>
        value: string
        isVertical: boolean
    }
}
const QuestionRadio: FC<PropsType> = ({fe_id, props: {title, options, value, isVertical}}) => {
    let liClassName=styles.horizontalItem
    if(isVertical)liClassName=styles.verticalItem
    return(
        <div>
            <p>{title}</p>
            <ul className={styles.list}>
                {options.map(opt=>{
                    const {value:val,text}=opt
                    return <li key={val} className={liClassName}>
                        <label>
                            <input type={'radio'} name={fe_id} value={val} defaultChecked={val===value}/>
                            {text}
                        </label>
                    </li>
                })}

            </ul>
        </div>
    )

}
export default QuestionRadio