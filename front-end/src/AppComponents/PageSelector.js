import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BrewPage from './BrewPage';
import BarPage from './BarPage';
import DrinkPage from './DrinkPage';

const Index = () => <h2>Home</h2>;
const Breweries = () => <div id='BrewPage'><BrewPage/></div>;
const Bars = () => <div id='BarPage'><BarPage/></div>;
const Drinks = () => <div id='DrinkPage'><DrinkPage/></div>

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
            <Link to="/bars/">Bars</Link>
          </li>
          <li>
            <Link to="/drinks/">Drinks</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Index} />
      <Route path="/breweries/" component={Breweries} />
      <Route path="/bars/" component={Bars} />
      <Route path="/drinks/" component={Drinks}/>
    </div>
  </Router>
);

export default PageSelector;
