import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BrewPage from './BrewPage';

const Index = () => <h2>Home</h2>;
const Breweries = () => <div id='BrewPage'><BrewPage/></div>;
const Users = () => <h2>Users</h2>;

const PageSelector = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/breweries/">Breweries</Link>
          </li>
          <li>
            <Link to="/users/">Users</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Index} />
      <Route path="/breweries/" component={Breweries} />
      <Route path="/users/" component={Users} />
    </div>
  </Router>
);

export default PageSelector;
