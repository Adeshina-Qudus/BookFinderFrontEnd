import style from "./index.module.css"
import hero from "../assert/landingPage/hero.png"
import search from "../component/reuseable/svg/searchIcon.svg"
import {Link} from "react-router-dom";
const LandingPage = ()=>{
    return(
        <div className={style.mainCont}>
            <div className={style.main}>
                <div className={style.text}>
                    <h1>Unlock Your Next Great Read<br />with BookFinder!</h1>
                    <p>Start your journey with BookFinder today and embark on a literary<br /> adventure like no other.
                      Let your imagination soar, your knowledge expand,<br/> and your love for reading flourish with BookFinder
                       where every page turns <br/>into a new discovery.</p>
                               <Link to={"/signUp"} className={style.linking}>
                                   <button className={style.buttonType}><img src={search} alt={"search"} width={25}
                                   height={15}/>Find Book</button></Link>
                </div>
                {/*<Link to={"/sign-up"} className={style.linking}>Sign Up</Link>*/}
                <div className={style.image}>
                    <img src={hero} alt={"hero"} height={350}/>
                </div>
            </div>

        </div>
    )
}
export default LandingPage