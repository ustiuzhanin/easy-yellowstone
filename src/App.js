import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import ScrollToTop from './hoc/ScrollToTop/ScrollToTop';

import Home from './containers/Home/Home';

function App() {
  return (
    <div className="App">
      <ScrollToTop>
        <Layout>
          <Switch>
            <Route path='/' exact component={Home} />
          </Switch>
        </Layout>
      </ScrollToTop>
    </div>
  );
}

export default App;
