import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/a-propos" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
