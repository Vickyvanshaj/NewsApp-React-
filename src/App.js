import React,{useState} from 'react'
import Login from './Login'
import {Provider} from './Context';
import DashBoard from './DashBoard'
import Nav from './Nav';
import NewsDetail from './NewsDetail'
import {BrowserRouter as Router ,Route,Switch} from "react-router-dom"
function App() {
  const [admin,setAdmin]=useState(false);
  const [isLoggedIn,setLog]=useState(false);
  const [news, setNews] = useState([]);
  return (
    <div>
    
     <Provider value={{admin:admin,setAdmin:setAdmin,isLoggedIn:isLoggedIn,setLog:setLog,news:news,setNews:setNews}}>
      <Router>
        <Nav/>
       <Switch>
          <Route path='/login' exact component={Login}/>
          <Route path='/dashboard' exact component={DashBoard}/>
          <Route path='/dashboard/:id'  component={NewsDetail}/>
       </Switch>
     </Router>
     </Provider>
    </div>
  )
}

export default App
