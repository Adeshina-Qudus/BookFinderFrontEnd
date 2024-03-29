import style from "./index.module.css"
const OutlinedButton = ({backGroundColor,lineColor,text,textColor})=>{
    return(
        <div>
            <button style={{backgroundColor : backGroundColor,borderColor:lineColor,color:textColor}}
                    className={style.lineButton}>{text}
            </button>
        </div>
    )
}
export default OutlinedButton