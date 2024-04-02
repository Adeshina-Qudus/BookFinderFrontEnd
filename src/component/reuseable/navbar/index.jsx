import style from "./index.module.css"
import FilledButton from "../filledButton";
import OutlinedButton from "../outlinedButton";
import {Link} from "react-router-dom";
const Navbar = ()=>{
    return(
        <div className={style.mainCont}>
            <div className={style.pTag}>
                <Link to={""}><p>Book<span style={{color:"#89b4f6"}}>Finder</span>.com</p></Link>
                <p>About</p>
                <p>Preference</p>
                <p>Feedback</p>
            </div>
            <div className={style.button}>
                <Link to={"/signIn"}>
                    <FilledButton backGroundColor={"#FFFFFF"}
                                  text={"Sign In"} textColor={"black"}/></Link>
                <Link to={"/signUp"}>
                    <OutlinedButton backGroundColor={"#FFFFFF"}
                                    text={"Sign Up"} lineColor={"pink"} textColor={"black"}/></Link>
                {/*<Link to={"/sign-up"} className={style.linking}>Sign Up</Link>*/}
            </div>
        </div>
    )
}

export default Navbar