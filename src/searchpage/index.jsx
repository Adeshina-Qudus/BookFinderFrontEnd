import style from "./index.module.css"
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const SearchPage = ()=>{
    let url = "http://localhost:8080/api/v1/user/searchBook";
    const [title,setTitle] = useState("")
    const [book, addBook] = useState([])

    // useEffect(() => {
    //     const storedBook = JSON.parse(localStorage.getItem("book"));
    //     if (storedBook) {
    //         addBook(storedBook);
    //     }
    // }, []);

    const AddBook = (value)=>{
       const updated = [...book, {title: value.title, image : value.image}]
        localStorage.setItem("book", JSON.stringify(updated))
        addBook(updated);
    }

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
            console.log(response.data)
            AddBook(response.data)
        }).catch((error) => console.log(error))
    }

    return(
        <div className={style.mainCont}>
            <div className={style.readingList}>
                <h3>Reading List</h3>
                <div>
                    {book.map(value => {
                        return(
                            <div>
                            <h4 key={value.id}>{value.title}</h4>
                                <img key={value.id} src={value.image} alt={"link"}/>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={style.searchBar}>
                <form onSubmit={(event)=> handleSubmit(event)}>
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