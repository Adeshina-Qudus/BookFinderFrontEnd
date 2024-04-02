import style from "./index.module.css"
import {useState} from "react";
import {useNavigate} from "react-router-dom";
const SignIn = ()=>{

    let url = "http://localhost:8080/api/v1/user/signIn";
    const [user,setUser] = useState({
        "mail" :"",
        "password" : ""
    })
    const navigate = useNavigate();
    // const [mail, setMail] = useState('');
    // const [password, setPassword] = useState('');
    const value = (e)=>{
        const {name ,value}= e.target
        setUser({
            ...user,
            [name] : value
        })
    }


    const handleSubmit = async (e)=>{
        // const returnUser = JSON.stringify({mail,password})
        const returnUser = JSON.stringify(user)
        localStorage.setItem("mail",user.mail)
        e.preventDefault();
        await fetch(url,{
            method :"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body :returnUser
        }).then((response)=>{
            return response.json();
        }).then((value) =>{
            if(value.successful) {
                console.log(value.data.message)
                navigate("/searchPage")
            }else {
                alert(value.data.message)
            }
        }).catch((error) =>console.log(error))
    }
    return(
        <div className={style.mainCont}>
            <div className={style.signInTable}>
                <h3>Welcome Back</h3>
                <form onSubmit={(event) =>handleSubmit(event)}>
                    <label>Mail</label>
                    <input type={"text"}
                           name={"mail"}
                           onChange={(e) => value(e)}
                           className={style.inputValue}/>
                    <label>Password</label>
                    <input type={"text"}
                           name={"password"}
                           onChange={(e) => value(e)}
                           className={style.inputValue} />
                    <button className={style.submit} type={"submit"}> SignIn</button>
                </form>
            </div>
        </div>
    )
}
export default SignIn