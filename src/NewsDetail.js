import React,{useContext} from 'react'
import { MyContext } from './Context'
import {useHistory} from "react-router-dom"
function NewsDetail({match}) {
  const admin=useContext(MyContext)
  let history=useHistory();
  console.log(admin)
  if(admin.isLoggedIn==false){
    return <div>Log In first</div>
  }
 
  const handleBlur=(e)=>{
    console.log(e.target.innerHTML)
    admin.news[match.params.id-1].body=e.target.innerHTML
    let news=localStorage.getItem("news");
    news=JSON.parse(news);
    news[match.params.id-1].body=e.target.innerHTML;
    localStorage.setItem("news",JSON.stringify(news))
    console.log(news);
    history.push('/dashboard')



  }
    return (
        <div className="container">
           <h1 className='text-center'>{admin.news[match.params.id-1].title}</h1>
           <p contentEditable={admin.admin} onBlur={handleBlur} suppressContentEditableWarning={true}>{admin.news[match.params.id-1].body}</p>
           
        </div>
    )
}

export default NewsDetail;
