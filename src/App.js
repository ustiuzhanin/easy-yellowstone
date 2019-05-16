import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import ScrollToTop from './hoc/ScrollToTop/ScrollToTop';
import FullscreenGallery from './components/Gallery/FullscreenGallery/FullscreenGallery';
import About from './containers/About/About'

import Home from './containers/Home/Home';

function App() {
  return (
    <div className="App">
      <ScrollToTop>
        <Layout>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />
          </Switch>
        </Layout>
      </ScrollToTop>
      {/* <Route path='/gallery/' exact component={FullscreenGallery} /> */}
    </div>
  );
}

export default App;
