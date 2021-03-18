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
        <div className="text-center">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-auto">
                    <li class="nav-item ">
                        <Link className="text-dark" to="/">Home</Link>
                    </li>
                    <li class="nav-item ">
                        <Link className="text-dark"to="/health">Health</Link>
                    </li>
                    <li class="nav-item ">
                        <Link className="text-dark"to="/gratitude">Gratitude</Link>
                    </li>
                    <li class="nav-item ">
                        <Link className="text-dark"to="/minimalism">Minimalism</Link>
                    </li>
                    <li class="nav-item ">
                        <Link className="text-dark"to="/career">Career</Link>
                    </li>
                    <li class="nav-item ">
                        <Link className="text-dark"to="/mindset">Mindset</Link>
                    </li>
                    <li class="nav-item ">
                        <Link className="text-dark"to="/about">About</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
        
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
