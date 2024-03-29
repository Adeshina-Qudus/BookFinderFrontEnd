import style from "./index.module.css"
import FilledButton from "../filledButton";
import OutlinedButton from "../outlinedButton";
const Navbar = ()=>{
    return(
        <div className={style.mainCont}>
            <div className={style.pTag}>
                <p>Book<span style={{color:"blue"}}>Finder</span>.com</p>
                <p>About</p>
                <p>Preference</p>
                <p>Feedback</p>
            </div>
            <div className={style.button}>
                <FilledButton backGroundColor={"#FFFFFF"} text={"Sign In"} textColor={"black"}/>
                <OutlinedButton backGroundColor={"#FFFFFF"} text={"Sign Up"} lineColor={"pink"} textColor={"black"}/>
            </div>
        </div>
    )
}

export default Navbar