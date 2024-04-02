import style from "./index.module.css"
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";

const Signup =()=>{
    let url = "http://localhost:8080/api/v1/user/signUp";
    const [user,setUser] = useState({
        "mail" : "",
        "name" : "",
        "password" : "",
        "confirmPassword":""
    })
    // const history = useHistory()

    const navigate = useNavigate();

    const value =(e)=>{
        const {name, value} = e.target
        setUser({
            ...user,
            [name] : value
        })
        console.log(user)
    }
    const handleSubmit =async(e)=>{
        const returnUser = JSON.stringify(user)
        e.preventDefault();
         await fetch(url, {
            method: "POST",
            headers: {
                 "Content-Type": "application/json",
             },
             body: returnUser,
        }
        ).then((response)=> {
            // history.push(`/signIn?mail=${encodeURIComponent(returnUser.mail)}`)
             return response.json();
         }).then((value) =>{
               console.log(value.data.message)
             navigate("/signIn")
         }).catch((error)=> console.log(error))
    }
    return(
        <div className={style.mainCont}>
            <div className={style.signUpTable}>
                <h3>Welcome To BookFinder</h3>
                <p>Already have an account ?<Link to={"/signIn"}>Sign in</Link></p>
                <form onSubmit={(event) => handleSubmit(event)}>
                    <label>Mail</label>
                    <input type={"text"}
                           name={"mail"}
                           onChange={(e) => value(e)}
                           className={style.value}/>
                    <label>Username</label>
                    <input type={"text"}
                           name={"name"}
                           onChange={(e) => value(e)}
                           className={style.value}/>
                    <label>Password</label>
                    <input type={"text"} className={style.value}
                           name={"password"}
                           onChange={(e) => value(e)}/>
                    <label>ConfirmPassword</label>
                    <input type={"text"} className={style.value}
                           name={"confirmPassword"}
                           onChange={(e) => value(e)}/>
                        <button className={style.submit} type={"submit"} >
                            Create An Account</button>
                    <p>Already have an account ?<Link to={"/signIn"}>Sign in</Link></p>
                </form>
            </div>

        </div>
    )
}
export default Signup