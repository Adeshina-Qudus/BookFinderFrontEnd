import style from "./index.module.css"
import {useState} from "react";
const SignIn = ()=>{

    let url = "http://localhost:8080/api/v1/user/signIn";
    const [user,setUser] = useState({
        "mail" :"",
        "password" : ""
    })
    // const [mail, setMail] = useState('');
    // const [password, setPassword] = useState('');
    const value = (e)=>{
        const {key ,value}= e.target
        setUser({
            ...user,
            [key] : value
        })
    }


    const handleSubmit = async (e)=>{
        // const returnUser = JSON.stringify({mail,password})
        const returnUser = JSON.stringify(user)
        e.preventDefault();
        await fetch(url,{
            method :"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:returnUser

        }).then((response)=>{
            return response.json();
        }).then((value) =>{
            console.log(value.data.message)
        }).catch((error) =>console.log(error))
    }
    return(
        <div className={style.mainCont}>
            <div className={style.signInTable}>
                <h3>Welcome Back</h3>
                <form onSubmit={(event) =>handleSubmit(event)}>
                    <label>Mail</label>
                    <input type={"text"}
                           key={"mail"}
                           onChange={(e) => value(e)}
                           className={style.inputValue}/>
                    <label>Password</label>
                    <input type={"text"}
                           key={"password"}
                           onChange={(e) => value(e)}
                           className={style.inputValue} />
                    <button className={style.submit} type={"submit"}> SignIn</button>
                </form>
            </div>
        </div>
    )
}
export default SignIn