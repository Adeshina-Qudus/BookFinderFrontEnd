import style from "./index.module.css"
import {useState} from "react";


const SearchPage = ()=>{
    let url = "http://localhost:8080/api/v1/user//searchBook";
    const [title,setTitle] = useState("")

    const value = (e)=>{
        const {key,value} =e.target
        setTitle({
            ...title,
            [key] :value
        })
    }


    const handleSubmit = async (e)=>{
        const returnTitle = JSON.stringify(title)
        e.preventDefault();
        await fetch(url,{
            method :"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body : returnTitle
        }).then((response)=>{
            return response.json();
        }).then((value)=>[
            console.log(value.data.message)
        ]).catch((error) => console.log(error))
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
                           onChange={(e) => value(e)}
                           placeholder={"Search Book "}/>
                    <button type={"submit"}>Search</button>
                </form>
            </div>
        </div>
    )
}
export default SearchPage