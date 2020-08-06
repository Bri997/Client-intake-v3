import React from "react"
import {BrowserRouter as Router,Route, Link, Switch} from "react-router-dom"
import UploadPage from "./UploadPage"

const Home = () => {
    return(
        <div>
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/UploadPage">Upload Page</Link>
          </li>

        </ul>
      </div>

      <Switch>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route exact path = "/UploadPage"><UploadPage/></Route>
      
     
      </Switch>
    </Router>
</div> )
}

export default Home