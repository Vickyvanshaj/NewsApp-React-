import React, { useState, useContext, useEffect } from 'react'
import { MyContext } from './Context';
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function DashBoard() {
    
    let admin = useContext(MyContext);
    
    useEffect(() => {


        const getNews = async () => {
            let newsPresent=localStorage.getItem("news");
            if(newsPresent){
                newsPresent=JSON.parse(newsPresent);
                admin.setNews(newsPresent);

            }
            else{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const items = await response.json();
            admin.setNews(items)
            console.log(items);
            localStorage.setItem("news",JSON.stringify(items))
            return items;
            }
        }
        getNews();
        
    }, [])

    console.log(admin.news)
   
   
   
    if(admin.isLoggedIn==false){
        return <div>Log In first</div>
      }

    return (
        <div className="container my-4 row">

            {admin.news.length>0&&<Card
                bg='success'
                text='white'
                style={{ width: '18rem' }}
                className="m-2 col-md-4 "

            >
                <Link to={`dashboard/${admin.news[0].id}`} style={{ textDecoration: 'none' }}>
                    <Card.Header className="text-white" >News</Card.Header>
                    <Card.Body className="text-white">
                        <Card.Title> {admin.news[0].title} </Card.Title>
                        <Card.Text>
                            {admin.news[0].body}
                        </Card.Text>
                    </Card.Body>
                </Link>
            </Card>}
            {admin.news.length>0&&<Card
                bg='success'
                text='white'
                style={{ width: '18rem' }}
                className="m-2 col-md-4"
                key='1'
            >
                <Link to={`dashboard/${admin.news[1].id}`} style={{ textDecoration: 'none' }}>
                    <Card.Header className="text-white">News</Card.Header>
                    <Card.Body className="text-white">
                        <Card.Title> {admin.news[1].title} </Card.Title>
                        <Card.Text>
                            {admin.news[1].body}
                        </Card.Text>
                    </Card.Body>
                </Link>
            </Card>}
            {admin.news.length>0&&<Card
                bg='success'
                text='white'
                style={{ width: '18rem' }}
                className="m-2 col-md-4"
                key='2'
            >
                <Link to={`dashboard/${admin.news[2].id}`} style={{ textDecoration: 'none' }}>

                    <Card.Header className="text-white">News</Card.Header>
                    <Card.Body className="text-white">
                        <Card.Title> {admin.news[2].title} </Card.Title>
                        <Card.Text>
                            {admin.news[2].body}
                        </Card.Text>
                    </Card.Body>
                </Link>
            </Card>}
        </div>
    )
}

export default DashBoard;

//alternative window.location.href
//how  every component can be related
//useContext not works