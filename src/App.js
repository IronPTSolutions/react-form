import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import SimpleForm from './components/SimpleForm';

function App() {
  return (
    <div className="App container p-5">
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Form
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/simple-form">
            SimpleForm
          </Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/simple-form" component={SimpleForm} />
        <Route exact path="/" component={Form} />
      </Switch>
    </div>
  );
}

export default App;
