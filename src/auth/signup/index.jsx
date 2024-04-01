import style from "./index.module.css"
import {Link} from "react-router-dom";
const Signup =()=>{

    return(
        <div className={style.mainCont}>
            <div className={style.signUpTable}>
                <h3>Welcome To BookFinder</h3>
                <p>Already have an account ?<Link to={"/signIn"}>Sign in</Link></p>
                <form>
                    <label>Email</label>
                    <input type={"text"} className={style.value}/>
                    <label>username</label>
                    <input type={"text"} className={style.value}/>
                    <label>Password</label>
                    <input type={"text"} className={style.value}/>

                    <button className={style.submit} type={"submit"}>Create An Account</button>
                    <p>Already have an account ?<Link to={"/signIn"}>Sign in</Link></p>
                </form>
            </div>

        </div>
    )
}
export default Signup