import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Health from '../pages/Health'
import Gratitude from '../pages/Gratitude'
import Minimalism from '../pages/Minimalism'
import Career from '../pages/Career'
import Mindset from '../pages/Mindset'
import Home from '../pages/Home'
import About from '../pages/About'

const Main = () => {
    return (
    <Router>
        <nav>
            <ul className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/health">Health</Link>
                </li>
                <li>
                    <Link to="/gratitude">Gratitude</Link>
                </li>
                <li>
                    <Link to="/minimalism">Minimalism</Link>
                </li>
                <li>
                    <Link to="/career">Career</Link>
                </li>
                <li>
                    <Link to="/mindset">Mindset</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>

        <main>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/health">
                    <Health />
                </Route>
                <Route path="/gratitude">
                    <Gratitude />
                </Route>
                <Route path="/minimalism">
                    <Minimalism />
                </Route>
                <Route path="/career">
                    <Career />
                </Route>
                <Route path="/mindset">
                    <Mindset />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
            </Switch>
        </main>
    </Router>
    )
}

export default Main
