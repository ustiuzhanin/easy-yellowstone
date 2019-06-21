import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import ScrollToTop from './hoc/ScrollToTop/ScrollToTop';
import About from './containers/About/About';
import Faq from './containers/Faq/Faq';
import Contacts from './containers/Contacts/Contacts'
import Tours from './containers/Tours/Tours';
import Book from './containers/Book/Book';

import Home from './containers/Home/Home';

function App() {
  return (
    <div className="App">
      <ScrollToTop>
        <Layout>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/faq' exact component={Faq} />
            <Route path='/contacts' exact component={Contacts} />
            <Route path='/tours/:id' exact component={Tours} />
            <Route path='/booking/' exact component={Book} />
          </Switch>
        </Layout>
      </ScrollToTop>
      {/* <Route path='/gallery/' exact component={FullscreenGallery} /> */}
    </div>
  );
}

export default App;
