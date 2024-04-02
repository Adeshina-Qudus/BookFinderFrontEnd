import style from "./index.module.css"
import {useState} from "react";


const SearchPage = ()=>{
    let url = "http://localhost:8080/api/v1/user/searchBook";
    const [title,setTitle] = useState("")

    const handleSubmit = async (e)=>{
        let obj = {
            "title": title,
            "mail" : localStorage.getItem("mail")
        }
        const returnTitle = JSON.stringify(obj)
        e.preventDefault();
        await fetch(url,{
            method :"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body : returnTitle
        }).then((response)=>{
            return response.json();
        }).then((response)=> {
            console.log(response.data.results[0])
        }).catch((error) => console.log(error))
    }

    return(
        <div className={style.mainCont}>
            <div className={style.readingList}>
                <h3>Reading List</h3>
            </div>
            <div className={style.searchBar}>
                <form onSubmit={(event)=> handleSubmit(event)}>
                    <input type={"text"}
                           key={"title"}
                           onChange={(e) => setTitle(e.target.value)}
                           placeholder={"Search Book "}/>
                    <button type={"submit"}>Search</button>
                </form>
                <div className={style.view}></div>
            </div>
        </div>
    )
}
export default SearchPage