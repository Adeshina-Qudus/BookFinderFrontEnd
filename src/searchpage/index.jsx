import style from "./index.module.css"
import {useEffect, useState} from "react";
// import {useNavigate} from "react-router-dom";
import axios from "axios";

const SearchPage = ()=>{
    let url = "http://localhost:8080/api/v1/user/searchBook";
    const [title,setTitle] = useState("")
    const [book, addBook] = useState([])

    const AddBook = (value)=>{
       const updated = [...book, {title: value.title, image : value.image}]
        localStorage.setItem("book", JSON.stringify(updated))
        addBook(updated);
    }

    const handleSubmit = async (values,{resetForm}) =>{

        try {
            const payload = {
                mail: localStorage.getItem("mail"),
                title: values.title
            }
            const response = await axios.post(url,payload)
            AddBook(response.data)
            console.log(response.data)
            resetForm()
        }catch (error){
            console.log(error)
        }
    }
    return(
        <div className={style.mainCont}>
                    {book.map(value => {
                        return(
                            <div>
                            <h4 key={value.id}>{value.title}</h4>
                                <img key={value.id} src={value.image} alt={"link"}/>
                            </div>
                        )
                    })}
            <div className={style.searchBar}>
                <form onSubmit={(event)=> handleSubmit}>
                    <input type={"text"}
                           key={"title"}
                           onChange={(e) => setTitle(e.target.value)}
                           placeholder={"Search Book "}/>
                    <button type={"submit"}
                    >Search</button>
                </form>
                <div className={style.view}></div>
            </div>
        </div>
    )
}
export default SearchPage