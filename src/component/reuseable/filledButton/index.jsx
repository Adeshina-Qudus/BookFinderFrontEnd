import style from "./index.module.css"
const FilledButton = ({backGroundColor,text,textColor})=>{
    return(
        <div>
            <button style={{backgroundColor : backGroundColor,color:textColor}}
                    className={style.fillButton}>{text}
            </button>
        </div>
    )
}
export default FilledButton