
import { Redirect, Link, Route, Switch, HashRouter } from "react-router-dom";
import Search from "./Search";
import Science from "./Science";
import Homepage from "./Home";
import Login, { fakeAuth } from "./Login";
import React, { useState, useEffect } from 'react';
import './styles.css'
import flame from'./91381.png'
import sci from './scie.png'
import se from './search-512.webp'
import home from './home.png'
const apiKey=process.env.REACT_APP_SECRET_KEY;

export default function App() {

    return (
    <div>
      <nav className="navbar navbar">
        <ul  className="nav navbar-nav">

          <li>
              <Link to="/search"><img title="Search" style={{marginTop:"-9%", width: "5%" }} src={se}/></Link>
          </li>
            {/*<li>*/}
            {/*    <Link to="/home"><img style={{marginTop:"-9%", width: "5%" }} src={home}/></Link><br/>*/}
            {/*</li>*/}
          <li>
             <Link to="/"> <img title="Trending" style={{marginTop:"-9%", width: "5%" }} src={flame}/></Link>
          </li>

          <li>
            <Link to="/science"><img title="Science" style={{ width: "5%" }} src={sci}/></Link>
          </li>

        </ul>
      </nav>

      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        <Route path="/search" component={Search} />
        <PrivateRoute path="/admin" component={Admin} />
        <Route path="/science" component={Science} />
      </Switch>

    </div>
  );
}

/* PrivateRoute component definition */
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

//Home component
function Home() {
    const [totalReactPackages, setTotalReactPackages] = useState([]);

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key='+ apiKey)
            .then(response => response.json())
            .then(data => setTotalReactPackages(data.results));

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
    console.log(totalReactPackages);
    return (
        <div >

            <h1 style={{borderBottom:'2px solid red'}}>Trending<span>.</span></h1>
            {totalReactPackages.length > 0 ? (
                totalReactPackages.map(item => (
                    <li>
                        <a href={item.url}> <h2>{item.title}</h2>
                            <p>{item.abstract}</p>
                            <img style={{boxShadow: '3px 3px 5px 6px #ccc', marginBottom:'10%'}} src={item.multimedia[0].url} alt={item.multimedia[0].url} /></a>
                    </li>
                ))
            ) : (
                <h1>Loading posts...</h1>
            )}
        </div>
    );

}


//Admin component
const Admin = ({ match }) => {
  return (
    <div>
      {" "}
      <h2>Welcome admin </h2>
    </div>
  );
};
