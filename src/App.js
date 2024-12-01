
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to POWFit Trainer ChatGPT</h1>
      <p>Purchase credits to access the AI-powered fitness assistant.</p>
    </div>
  );
};

const Pricing = () => {
  return (
    <div>
      <h2>Pricing</h2>
      <p>Choose a plan to get started.</p>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Access the POWFit Trainer ChatGPT.</p>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
